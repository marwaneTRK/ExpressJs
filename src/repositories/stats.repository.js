const Order = require("../models/order.model");
const Product = require("../models/product.model");

class StatsRepo {

  async countOrders() {
    return  Order.countDocuments();
  }


  async totalRevenue() {
    const result = await Order.aggregate([
      { $group: { _id: null, revenue: { $sum: "$total" } } }
    ]);
    return result[0]?.revenue || 0;
  }

  async topProducts(limit = 5) {
    const result = await Order.aggregate([
      { $unwind: "$products" },
      { 
        $group: { 
          _id: "$products.product", 
          totalSold: { $sum: "$products.quantity" } 
        } 
      },
      { $sort: { totalSold: -1 } },
      { $limit: limit },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },
      { $project: { _id: 0, productName: "$product.name", totalSold: 1 } }
    ]);
    return result;
  }

  // Commandes par utilisateur
  async ordersPerUser() {
    const result = await Order.aggregate([
      { 
        $group: { 
          _id: "$user", 
          totalOrders: { $sum: 1 },
          totalSpent: { $sum: "$total" }
        } 
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      { $unwind: "$user" },
      { $project: { _id: 0, userName: "$user.name", totalOrders: 1, totalSpent: 1 } }
    ]);
    return result;
  }
}

module.exports = new StatsRepo();
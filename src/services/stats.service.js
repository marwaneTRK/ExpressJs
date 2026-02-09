const statsRepo = require("../repositories/stats.repository");

class StatsService {
  async getOrderCount() {
    return statsRepo.countOrders();
  }

  async getTotalRevenue() {
    return statsRepo.totalRevenue();
  }

  async getTopProducts() {
    return statsRepo.topProducts();
  }

  async getOrdersPerUser() {
    return statsRepo.ordersPerUser();
  }
}

module.exports = new StatsService();
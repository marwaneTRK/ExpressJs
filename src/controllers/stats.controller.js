const statsService = require("../services/stats.service");

class StatsController {
  async getOrderCount(req, res, next) {
    try {
      const count = await statsService.getOrderCount();
      res.json({ totalOrders: count });
    } catch (err) {
      next(err);
    }
  }

  async getTotalRevenue(req, res, next) {
    try {
      const revenue = await statsService.getTotalRevenue();
      res.json({ revenue });
    } catch (err) {
      next(err);
    }
  }

  async getTopProducts(req, res, next) {
    try {
      const products = await statsService.getTopProducts();
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  async getOrdersPerUser(req, res, next) {
    try {
      const users = await statsService.getOrdersPerUser();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new StatsController();
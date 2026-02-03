const getMyOrders = (req, res) => {
    const userId = req.userId; const orders = [
        { id: "cmd1", total: 120, user: userId },
        { id: "cmd2", total: 80, user: userId }
    ];
    res.status(200).json({ orders });
};
module.exports = { getMyOrders };
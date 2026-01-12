const sendEmail = require('../utils/sendEmail');
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { name, phone, location, dressType, fabricOption, notes } = req.body;

    if (!name || !phone || !location || !dressType || !fabricOption) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const order = await Order.create({
      name,
      phone,
      location,
      dressType,
      fabricOption,
      notes
    });

    // Send email notification
await sendEmail(order);

    res.status(201).json({
      message: 'Order placed successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

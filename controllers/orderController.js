
// const Order = require('../models/Order');

// exports.createOrder = async (req, res) => {
//   return res.status(200).json({
//     message: 'Order API is alive (MySQL migration in progress)',
//     payload: req.body
//   });
// };


    // Send email notification
// await sendEmail(order);

//     res.status(201).json({
//       message: 'Order placed successfully',
//       order
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// const sendEmail = require('../utils/sendEmail');
const Order = require("../models/Order");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      success: true,
      order
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// GET ALL ORDERS (admin use)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      order: [["createdAt", "DESC"]]
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

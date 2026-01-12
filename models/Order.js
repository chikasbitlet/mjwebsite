const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    dressType: { type: String, required: true },
    fabricOption: {
      type: String,
      enum: ['Customer Provides', 'Designer Provides'],
      required: true
    },
    notes: String,
    status: { type: String, default: 'New' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);

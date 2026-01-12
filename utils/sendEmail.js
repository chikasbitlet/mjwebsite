const nodemailer = require('nodemailer');

const sendEmail = async (order) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // designer receives email
    subject: 'New Dress Order Received',
    html: `
      <h2>New Order Details</h2>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Phone:</strong> ${order.phone}</p>
      <p><strong>Location:</strong> ${order.location}</p>
      <p><strong>Dress Type:</strong> ${order.dressType}</p>
      <p><strong>Fabric Option:</strong> ${order.fabricOption}</p>
      <p><strong>Notes:</strong> ${order.notes || 'N/A'}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

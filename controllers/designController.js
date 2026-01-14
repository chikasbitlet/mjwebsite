// const db = require("../config/db");

// // CREATE DESIGN
// exports.createDesign = (req, res) => {
//   const { title, description, category, price, image_url } = req.body;

//   const sql = `
//     INSERT INTO designs (title, description, category, price, image_url)
//     VALUES (?, ?, ?, ?, ?)
//   `;

//   db.query(sql, [title, description, category, price, image_url], (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json({ message: "Design created", id: result.insertId });
//   });
// };

// // GET ALL DESIGNS
// exports.getDesigns = (req, res) => {
//   db.query("SELECT * FROM designs", (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// };


const Design = require("../models/Design");

// CREATE DESIGN
exports.createDesign = async (req, res) => {
  try {
    const design = await Design.create(req.body);
    res.status(201).json(design);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL DESIGNS
exports.getDesigns = async (req, res) => {
  try {
    const designs = await Design.findAll();
    res.json(designs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

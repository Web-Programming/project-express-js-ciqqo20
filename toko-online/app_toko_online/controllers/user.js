const User = require("../../models/User");

// CREATE - POST /api/users/
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user); // 201 Created
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request
  }
};

// READ ALL - GET /api/users/
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users); // 200 OK
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 Server Error
  }
};

// READ ONE - GET /api/users/:id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" }); // 404 Not Found
    }
    res.status(200).json(user); // 200 OK
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 Server Error
  }
};

// UPDATE - PUT /api/users/:id
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" }); // 404 Not Found
    }
    res.status(200).json(user); // 200 OK
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request
  }
};

// DELETE - DELETE /api/users/:id
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" }); // 404 Not Found
    }
    res.status(200).json({ message: "User berhasil dihapus" }); // 200 OK
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 Server Error
  }
};

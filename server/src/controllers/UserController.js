const User = require("../models/UserModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "User created!", data: newUser });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log("All users:", users);
    res.status(200).json({ message: "Users Fetched!", data: users });
    // users is an array of documents
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

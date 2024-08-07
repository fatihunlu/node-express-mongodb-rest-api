const userModel = require("../db").user;

exports.getAllUsers = async (_req, res) => {
    try {
        const users = await userModel.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const user = new userModel(req.body);
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await userModel.findByIdAndRemove(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

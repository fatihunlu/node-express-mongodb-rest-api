const userModel = require("../db").user;

exports.getAllUsers = (_req, res) => {
    userModel.find({}, (err, users) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(users);
        }
    });
};

exports.getUserById = (req, res) => {
    userModel.findById(req.params.id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    });
};

exports.create = (req, res) => {
    const user = new userModel(req.body);
    user.save((err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            user.save(user).then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send(err);
            });
        }
    });
};

exports.update = (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    });
}

exports.delete = (req, res) => {
    userModel.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    });
}
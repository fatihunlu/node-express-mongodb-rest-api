module.exports = app => {

    const userController = require('../controllers/user.controller');
    var router = require('express').Router();

    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserById);
    router.post('/', userController.create);

    app.use('/api/users', router);
};
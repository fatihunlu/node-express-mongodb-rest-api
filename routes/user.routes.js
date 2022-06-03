module.exports = app => {

    const userController = require('../controllers/user.controller');
    var router = require('express').Router();

    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserById);
    router.post('/', userController.create);
    router.put('/:id', userController.update);
    router.delete('/:id', userController.delete);

    app.use('/api/users', router);
};
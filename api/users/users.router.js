const userRouter = require('express').Router();

const controller = require('./users.controller');

userRouter.get('/',controller.getAllUsers);

userRouter.get('/:userId',controller.getUserById);

userRouter.post('/',controller.createUser);

userRouter.delete('/:userId',controller.deleteUser)

userRouter.put('/:userId',controller.updateUser)
module.exports = userRouter;
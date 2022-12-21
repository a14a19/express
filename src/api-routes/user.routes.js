const UserRoutes = require('express').Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controllers');

UserRoutes.get('/', getUsers);
UserRoutes.post('/', createUser);
UserRoutes.put('/:userId', updateUser)
UserRoutes.put('/:userId', deleteUser)

module.exports = UserRoutes;
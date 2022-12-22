const UserRoutes = require('express').Router();
const { getUsers, createUser, updateUser, deleteUser, createBulkUser } = require('../controllers/user.controllers');

UserRoutes.get('/', getUsers);
UserRoutes.post('/', createUser);
UserRoutes.put('/:userId', updateUser)
UserRoutes.delete('/:userId', deleteUser)
// UserRoutes.post('/bulk', createBulkUser)

module.exports = UserRoutes;
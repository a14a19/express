const ItemRoutes = require('express').Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/item.controllers')

ItemRoutes.get('/', getItems)
ItemRoutes.post('/', createItem)
ItemRoutes.put('/:itemId', updateItem)
ItemRoutes.put('/:itemId', deleteItem)

module.exports = ItemRoutes;
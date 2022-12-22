const Items = require('../models/items.model')

const getItems = (req, res) => {
    Items.find({}).exec((err, itemList) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error!' })
        }
        res.status(200).send({ itemList: itemList })
    })
    // let itemList = [{ item: "item_1" }, { item: "item_2" }];
    // res.send({ itemList, query: req.query });
}

const createItem = (req, res) => {
    const item = new Items(req.body);

    item.save((err, itemCreated) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error!' })
        }
        res.status(200).send({ result: itemCreated })
    })

    // let itemDetail = [{ name: "User_4" }]
    // res.send({ itemDetail, query: req.query })
}

const updateItem = (req, res) => {
    Items.findByIdAndUpdate(req.params.itemId, req.body, { new: true }, (err, itemUpdated) => {
        if (err) {
            return res.status(500).send({ msg: 'Internel server error' })
        }
        res.status(200).send({ result: itemUpdated })
    })

    // let itemDetail = [{ name: "User_5" }]
    // res.send({ itemDetail, params: req.params })
}

const deleteItem = (req, res) => {
    Items.findByIdAndDelete(req.params.itemId, (err, deleted) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error' })
        }
        res.status(200).send({ msg: deleted })
    })

    // res.send({ params: req.params })
}

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
}
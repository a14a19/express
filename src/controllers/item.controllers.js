const getItems = (req, res) => {
    let itemList = [{ item: "item_1" }, { item: "item_2" }];
    res.send({ itemList, query: req.query });
}

const createItem = (req, res) => {
    let itemDetail = [{ name: "User_4" }]
    res.send({ itemDetail, query: req.query })
}

const updateItem = (req, res) => {
    let itemDetail = [{name: "User_5"}]
    res.send({itemDetail, params: req.params})
}

const deleteItem = (req, res) => {
    res.send({params: req.params})
}

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
}
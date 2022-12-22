const Users = require('../models/users.model')

const getUsers = (req, res) => {
    // data coming from mongoDB
    Users.find({}).exec((err, userList) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error!' })
        }
        res.status(200).send({ userList: userList })
    })

    //below for static static data
    // let userList = [{ name: "User_1" }, { name: "User_2" }, { name: "User_3" }];
    // res.send({ userList, query: req.query });
}

const createUser = (req, res) => {
    // it won't work without body-parser
    const user = new Users(req.body);

    user.save((err, userCreate) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error!' })
        }
        res.status(200).send({ result: userCreate })
    })

    // static data below
    // let userDetail = [{ name: "User_4" }]
    // res.send({ userDetail, query: req.query })
}

const createBulkUser = (req, res) => {
    Users.insertMany((err, bulkData) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error!' })
        }
        res.status(200).send(bulkData)
    })
}

const updateUser = (req, res) => {
    Users.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, userUpdated) => {
        if (err) {
            return res.status(500).send({ msg: 'Internel server error' })
        }
        res.status(200).send({ result: userUpdated })
    })

    // let userDetail = [{ name: "User_5" }]
    // res.send({ userDetail, params: req.params })
}

const deleteUser = (req, res) => {
    Users.findByIdAndDelete(req.params.userId, (err, deleted) => {
        if (err) {
            return res.status(500).send({ msg: 'Internal server error' })
        }
        res.status(200).send({ msg: deleted })
    })

    // res.send({ params: req.params })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
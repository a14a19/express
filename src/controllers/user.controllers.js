const getUsers = (req, res) => {
    let userList = [{ name: "User_1" }, { name: "User_2" }, { name: "User_3" }];
    res.send({ userList, query: req.query });
}

const createUser = (req, res) => {
    let userDetail = [{ name: "User_4" }]
    res.send({ userDetail, query: req.query })
}

const updateUser = (req, res) => {
    let userDetail = [{name: "User_5"}]
    res.send({userDetail, params: req.params})
}

const deleteUser = (req, res) => {
    res.send({params: req.params})
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
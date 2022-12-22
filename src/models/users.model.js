const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    name: String,
    mobileNumber: Number,
    role: String
});

// while using postman, above schema should be entered in body > raw and file type should JSON for create(post) and update(put) method.

module.exports = mongoose.model('Users', UserSchema);
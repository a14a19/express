const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    item: String,
    companyName: String,
    mftDate: Date,
    NumOfItem: Number
});

// while using postman, above schema should be entered in body > raw and file type should JSON for create(post) and update(put) method.

module.exports = mongoose.model('Items', itemsSchema);
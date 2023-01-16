const { Schema, model } = require("mongoose");

const catModel = new Schema({
    name: { type: String, required: true },
    hobby: { type: String, required: true },
    age: { type: Number, required: true },
    breed: { type: String },
    color: { type: String },
    weight: { type: Number },
    isAdopted: { type: Boolean, default: false }
});

const Cat = model('Cat', catModel);

module.exports = Cat;
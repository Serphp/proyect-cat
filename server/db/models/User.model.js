const { Schema, model } = require("mongoose");

const userModel = new Schema({
    username: {
        type: String, required: [true, 'Username is required'], unique: true, lowercase: true},
    name: {
        type: String, required: true},
    email: {
        type: String, required: [true, "Email is required."], unique: true, lowercase: true,trim: true,},
    password: {
            type: String, required: [true, "Password is required."],},
    profileImg: {
        type: String, default: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'},
});
// userModel.save();

const User = model("User", userModel);

module.exports = User;
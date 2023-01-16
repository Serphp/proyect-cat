const mongoose = require("mongoose");

//FIX ERROR mongoose 7
mongoose.set('strictQuery', false);

const MONGO_URI =
process.env.MONGO_URI || "mongodb://127.0.0.1:27017/projectcat";

mongoose.connect(MONGO_URI)
.then((x) => {
const dbName = x.connections[0].name;
    console.log(`
    __________________MongoDB Connected with the name: ${dbName}__________________
    `);
})
.catch((err) => {
    console.error("Error connecting to mongo: ", err);
});
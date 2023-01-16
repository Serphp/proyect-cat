const mongoose = require('mongoose');

//requiere structures
const User = require('../models/User.model');
const Cats = require('../models/Cat.model');

const MongoStart = "mongodb://127.0.0.1:27017/projectcat"

const createStructures = async function(){
    try {
        const connect = await mongoose.connect(MongoStart);
        console.log(`==> Create Structures: ${connect.connection[0].name}`)

        const dbUser = await User.create(dbUser)
        console.log('==> Structure User Created.')

        const dbOff = await mongoose.connection.close()
        console.log('==> Seeds create.')
    } catch (e) {
        console.log(`==> Error creating structures: ${e}`)
    }
}

createStructures();


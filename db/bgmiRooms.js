const mongoose = require('mongoose');

async function connectDb(dbName){
    await mongoose.connect(dbName)
    .then(() => {
        console.log(`Mongo database connected at: ${dbName}`)
    })
    .catch(err => {
        console.log(`Monog db connection error: \n${err}`)
    })
}

module.exports = connectDb;
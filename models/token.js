const mongoose = require('mongoose');
let tokenSchema = new mongoose.Schema({
    usrId: {
        type: String,
        unique: true,
        required: true 
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 1800
    }
});

module.exports = mongoose.model('token', tokenSchema);

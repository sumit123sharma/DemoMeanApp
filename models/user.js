

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
    email: String,
    password: String,
   
}, {
    timestamps: true
});

module.exports = new mongoose.model('User', UserSchema);
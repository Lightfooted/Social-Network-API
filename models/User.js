const { Schema, model } = require('mongoose');
//TO DO: Pick dateformat

const UserSchema = new Schema()
//TO DO: username, email, thoughts and friends


const User = model('User', UserSchema);

module.exports = User;
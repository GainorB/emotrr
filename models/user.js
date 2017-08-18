const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    validate: {
      validator: (username) => username.length === 6,
      message: 'You aren\'t Gainor!'
      },
      required: [true, 'ONLY Gainor is allowed!']
  },
  password: {
    type: String,
    validate: {
      validator: (password) => password.length > 5,
      message: 'Password must be greater than 5 characters'
    },
    required: [true, 'Password is required']
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  // tweet text
  tweet: {
    type: String,
    required: [true, 'Tweet text is required']
  },
  // name of user
  name: {
    type: String,
    required: [true, 'Name of user is required']
  },
  // screen name of user
  screen_name: String,
  // profile image of user
  profile_image: String,
  // user location
  location: String,
  // user description
  description: String,
  // user followers
  followers_count: Number
});

const Search = mongoose.model('search', SearchSchema);

module.exports = Search;
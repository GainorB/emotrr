const assert = require('assert');
const Search = require('../models/search');

describe('Deleting a tweet', () => {

  let tweet;

  beforeEach(done => {
    tweet = new Search({
      tweet: 'Hello World',
      name: 'Gainor Bostwick',
      screen_name: 'bosKicKz',
      profile_image: 'http://localhost:3000/',
      location: 'New York',
      description: 'The Man',
      followers_count: 999
    });

    tweet.save().then(()=> done());
  });

  it('Remove model', (done) => {
      tweet.remove()
        .then(() => Search.findOne({ name: 'Gainor Bostwick'}))
        .then((tweet) => {
          assert(tweet === null);
          done();
        });
  });

});
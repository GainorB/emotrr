const assert = require('assert');
const Search = require('../models/search');

describe('Creating new records', () => {

  it('Saves a new record', done => {

  // creating a new search
  let newSearch = new Search({
      tweet: 'Hello World',
      name: 'Gainor Bostwick',
      screen_name: 'bosKicKz',
      profile_image: 'http://localhost:3000/',
      location: 'New York',
      description: 'The Man',
      followers_count: 999
  });

  // saving to database
  newSearch.save()
      .then(() => {
          // isNew === false when newSearch is saved to DB
          assert(!newSearch.isNew);
          done();
      });
  })
})
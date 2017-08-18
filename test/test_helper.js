const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;

before(done => {
  mongoose.connect('mongodb://localhost/emotrr_test', {
    useMongoClient: true,
    /* other options */
  });

  db.on('error', error => console.warn('Warning', error));
  db.once('open', () => done());
});

beforeEach(done => {
  // reference our collection
  const { searches } = mongoose.connection.collections;

  // delete all records before every test
  // makes sure each test is run in isolation
  searches.drop()
    .then(() => done())
    // very first time test suite runs there won't be a DB to drop, so use .catch
    .catch(() => done());
});
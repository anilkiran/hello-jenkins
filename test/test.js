var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
<<<<<<< HEAD
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world hi', done);
=======
  it('respond with hello world-pitta bye', function(done) {
    request(app).get('/').expect('hello world-pitta bye', done);
>>>>>>> c724a119fac4878092260034c4d8abbc0420d576
  });
});
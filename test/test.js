var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world-pitta bye', function(done) {
    request(app).get('/').expect('hello world-pitta bye', done);
  });
});
'use strict';

const User = require('../models/user.js')
const expect = require('expect');
const authRoutes = require('..routes/authRoutes.js');
const app = require('../server.js')
const server = app.listen(3000);

require("dotenv").config();

describe('Testing for routes', () => {
it('403: Forbidden; routes that have not been registered', (done) => {
  // request.post('localhost:3000/user.js').end(function(err, res) {
  //   expect(res.text).toEqual('Note not found');
  //   done();
  });
});


describe('Testing for /api/signup', () => {
  describe('Testing for POST', () => {
  it('400: Bad Request; should send an error if no request body has been provided or the body is invalid', (done) => {
    request.post('localhost:3000/user.js').end(function(err, res) {
      expect(res.text).toEqual('');
      done();
    });
  });

  });
});

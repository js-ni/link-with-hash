/* globals describe it */
/* eslint no-unused-vars: "off" */

const should = require('chai').should();
const Link = require('../dist');

describe('Url', () => {
  it('Is a String', () => {
    Link.to('http://google.com').should.be.an('string');
  });
});

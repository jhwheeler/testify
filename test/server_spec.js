const chai = require('chai');
const chaiHttp = require('chai-http');

const { app } = require('../server/server');

const should = chai.should();

chai.use(chaiHttp);

describe('App', function() {
  it('should start server', function() {
    return chai.request(app)
      .get('/')
        .then(function(res) {
          res.should.have.status(200);
        });
  });
});


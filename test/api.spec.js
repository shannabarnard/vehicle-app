/**
 * Created by brett.hadley on 10/10/2016.
 */
const expect = require('chai').expect;
const getData = require('../src/api').getData;
const server = require('../server');

describe("getData example test", function() {
    beforeEach(() => {
        server.listen(9988);
    });

    it('should respond with an array of vehicles', (done) => {
        getData((response) => {
            const data = JSON.parse(response);
            expect(Array.isArray(data.vehicles)).to.equal(true);
            done();
        })
    })
});

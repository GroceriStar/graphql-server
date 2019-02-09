const request = require('supertest')

const server     = require('../server');

describe('Test the server status', () => {
    test('It should response the GET method', (done) => {
        request(server.express).get('/status').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

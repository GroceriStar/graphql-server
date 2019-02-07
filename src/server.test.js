const request = require('supertest')

// I assume it's not works because we didn't return any server object at our setup.
// did it really yoga building it that way????
const server     = require('../server');

describe('Test the server status', () => {
    test('It should response the GET method', (done) => {
        request(server.express).get('/status').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

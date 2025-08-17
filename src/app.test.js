const supertest = require('supertest');
const app = require('./app');
const request = supertest(app);

describe('/ endpoint', () => {
    it('should return a response', async() => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from Github Action With CI/CD Pipeline Demo App!');
    })
})

describe('/testNode endpoint', () => {
    it('should return a response', async() => {
        const response = await request.get('/testNode');
        expect(response.status).toBe(200);
        expect(response.text).toBe('testNode endpoint connected and getting response!');
    })
})
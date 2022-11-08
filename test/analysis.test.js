import knex from 'knex';
import request from 'supertest';
import app from '../index.js';

describe('GET /', () => {
    it('GET /analytics/top-order Get admin analytic data of top order for the past 30 days', () => {
        return request(app)
            .get('/analytics/top-order')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.success).toEqual(true)
                expect(response.body.data).toEqual(expect.any(Array))
                expect(response.body.message).toEqual(expect.any(String))
            });
    });
})
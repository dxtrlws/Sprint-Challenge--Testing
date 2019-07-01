const { server, games } = require('./server');
const request = require('supertest');

describe('Games server API', () => {
  afterEach(() => {
    return games;
  });
  it('should return a list of games ', async () => {
    const res = await request(server).get('/games');
    expect(res.type).toBe('application/json');
    expect(Array.isArray([res.body])).toBe(true);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(games);
  });
});

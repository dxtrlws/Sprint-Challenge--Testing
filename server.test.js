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
  test('should add a new game ', async () => {
    const game = { title: 'Cyberpunk 2077', genre: 'Role-playing', releaseYear: 2020}
    const res = await request(server).post('/games').send(game)
    expect(res.status).toBe(201)
    expect(res.body).toEqual(game)
})
});

const supertest = require('supertest');
const server = require('./server.js');
// const cesu8 = require('iconv-lite').encodingExists('foo')
const db = require('../server/database.js');

const request = supertest(server);

describe("GET api/carousel/9 ", () => {
  test("It should respond with a status of 200", async () => {
    const response = await request(app).get("/");
    expect(response.body).toHaveProperty(id);
  });
});
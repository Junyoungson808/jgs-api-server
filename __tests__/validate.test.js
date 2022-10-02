'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Validate Test', () => {
  test('404 on a bad route', async() => {
    const response = await request.get('/wrong');
    expect(response.status).toEqual(404);
  // });
  // test('500 if no name is in the string', async() => {
  //   const response = await request.get('/cars?name=');
  //   expect(response.status).toEqual(500);
  // });
  // test('200 if a name is in the string', async() => {
  //   const response = await request.get('/cars?name=toyota');
  //   expect(response.status).toEqual(200);
  });
});
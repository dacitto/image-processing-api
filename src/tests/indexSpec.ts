import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoints responses', () => {
  it('test the index api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('test not found api endpoint', async () => {
    const response = await request.get('/iwfjoief');
    expect(response.status).toBe(404);
  });
});

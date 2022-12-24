import supertest from 'supertest';
import app from '../app';
const request = supertest(app);
describe('Test endpoints responses', async () => {
  it('Not Found', async () => {
    request.get('/Testst').expect(404, function (res) {
      console.log(res);
    });
    // console.log(response);
    // expect(response.statusCode).toBe(404);
  });
});

import supertest from 'supertest';
import app from '../app';
const request = supertest(app);
describe('Test endpoints responses', async () => {
  it('Not Found Page', async () => {
    request.get('/Testst').expect(404, function (res) {
      console.log(res);
    });
  });
  it('Home page test /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('Home page test /index', async () => {
    const response = await request.get('/index');
    expect(response.status).toBe(200);
  });
  it('Home page test /index.html', async () => {
    const response = await request.get('/index.html');
    expect(response.status).toBe(200);
  });
});

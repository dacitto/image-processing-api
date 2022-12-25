import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);
describe('Test image endpoint responses', () => {
  it('test  image api endpoint name=nature&width=500&height=500', async () => {
    const response = await request.get(
      '/image?name=nature&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });

  it('test  image api bad request', async () => {
    const response = await request.get('/image?');
    expect(response.status).toBe(400);
  });

  it('test please provide a width and height', async () => {
    const response = await request.get('/image?name=nature');
    expect(response.body).toEqual({
      message: 'please provide a width and height',
    });
  });
  it('test missing image name', async () => {
    const response = await request.get('/image?width=500&height=500');
    expect(response.body).toEqual({
      message: 'please provide image name example name=car',
    });
  });
});

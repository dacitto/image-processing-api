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

  it('test please provide a width and height', async () => {
    const response = await request.get('/image?name=nature');
    expect(response.body).toEqual({
      message: 'please provide a width and height',
    });
  });
});

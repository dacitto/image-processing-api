import express, { Request, Response } from 'express';
import path from 'path';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import rootRouter from './routes/root';
import imageRouter from './routes/imageRoutes';
const app = express();
app.use(logger);
app.use(express.json());
app.use(express.static('public'));
app.use('/', rootRouter);
app.use('/image/', imageRouter);

// Not found pages
app.all('*', (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname,  '../public/views/404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);

export default app;

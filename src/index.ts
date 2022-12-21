import express, { Request, Response } from 'express';
import path from 'path';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import rootRouter from './routes/root';

const app = express();

const PORT = process.env.PORT ?? 4000;

app.use(logger);
app.use(express.json());
app.use(express.static('public'));
app.use('/', rootRouter);

// Not found pages
app.all('*', (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

// log Errors
app.use(errorHandler);
app.listen(PORT, () => console.log(`🖥️  Server is running on port ${PORT}`));

export default app;

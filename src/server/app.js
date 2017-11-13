import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use('/api', routes);

// Show errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

export default app;

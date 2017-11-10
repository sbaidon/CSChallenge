import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import path from 'path';
// TODO: ADD ROUTES

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// app.use('/api', routes)

export default app;

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template.js'; 
import routes from './routes/routes.js'; 
import { errorHandler } from './controllers/error.controller.js'; 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Routes
app.use('/api', routes); // Use the routes prefixed with '/api'

// Error handling middleware
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).send(Template());
});

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to User application." });
});

export default app;

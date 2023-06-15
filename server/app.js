import express from "express";
import cors from "cors";
import listRouter from './router.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const corsOption = {
	origin: 'http://127.0.0.1:5500',
	optionsSuccessStatus: 200,
	credentials: true,
};
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors(corsOption));
app.use('/list', listRouter);

app.use((req, res, next) => {
	res.sendStatus(404);
});

app.use((error, req, res, next) => {
	console.error(error);
	res.sendStatus(500);
});

app.listen(8080);
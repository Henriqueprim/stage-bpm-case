import express from 'express';
import cors from 'cors';
import ErrorHandler from './Errors/ErrorHandler';

const app = express();

app.use(express.json());
app.use(ErrorHandler.handle);
app.use(cors());

export default app;

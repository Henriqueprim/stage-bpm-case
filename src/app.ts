import express from 'express';
import cors from 'cors';
import ErrorHandler from './Errors/ErrorHandler';
import router from './Routes/Routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(ErrorHandler.handle);

export default app;

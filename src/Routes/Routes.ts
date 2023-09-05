import { Router } from 'express';
import ProcessControllers from '../Controllers/ProcessControllers';

const router = Router();

router.post('/process', (req, res, next) => new ProcessControllers(req, res, next).create());

router.patch('/process/:id', (req, res, next) => new ProcessControllers(req, res, next).addSubprocess());

router.put('/process/:id', (req, res, next) => new ProcessControllers(req, res, next).update());

router.delete('/process/:id', (req, res, next) => new ProcessControllers(req, res, next).delete());

router.get('/process/:id', (req, res, next) => new ProcessControllers(req, res, next).getById());

router.get('/process', (req, res, next) => new ProcessControllers(req, res, next).getAll());

export default router;

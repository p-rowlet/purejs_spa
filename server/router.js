import express from 'express';
import {} from 'express-async-errors';
import * as listController from './controller.js'

const router = express.Router();

router.get('/', listController.getLists);

router.post('/', listController.createList);

router.delete('/:id', listController.deleteList);

export default router;
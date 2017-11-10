import express from 'express';
import { saveLog } from '../controllers/logController';
import { getCoverArt } from '../controllers/externalApi';

const router = express.Router();

router.post('/coverart', saveLog, getCoverArt);

export default router;

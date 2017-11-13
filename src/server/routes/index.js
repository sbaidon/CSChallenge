import express from 'express';
import { saveLog, getLogs } from '../controllers/logController';
import { getCoverArt } from '../controllers/externalApi';

const router = express.Router();

const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

router.get('/coverart', catchErrors(saveLog), catchErrors(getCoverArt));

router.get('/logs', catchErrors(getLogs));

export default router;

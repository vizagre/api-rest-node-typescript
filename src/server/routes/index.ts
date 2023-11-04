import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {    
  return res.send ('Olá Dev!');
});

router.get('/teste', (req, res) => {    
  console.log(req);

  return res.status(StatusCodes.ACCEPTED).json (req.body);
});

export { router };
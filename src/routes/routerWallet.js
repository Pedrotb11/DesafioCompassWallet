import { Router } from 'express';
import ControllerWallet from '../app/controllers/controllerWallet';

const routerWallet = Router();

routerWallet.get('/api/v1/wallet', ControllerWallet.listWallet);

routerWallet.post('/api/v1//wallet', ControllerWallet.createWallet);

routerWallet.get('/api/v1//wallet/:address', ControllerWallet.listOneWallet);

export default routerWallet;
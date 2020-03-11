import { Router } from 'express';

import DealsController from './app/controllers/DealsController';
import ProductsController from './app/controllers/ProductsController';
import OrderController from './app/controllers/OrderController';
import BlingController from './app/controllers/BlingController';

const routes = new Router();

/**Rotas Pipedrive */
routes.get('/deals', DealsController.index);
routes.get('/products/:id', ProductsController.index);
routes.post('/order/:id', OrderController.store)

/**Rotas Bling */
routes.post('/bling', BlingController.store);
routes.get('/bling', BlingController.index);

export default routes
import axios from 'axios';
import Products from '../models/Products';
import 'dotenv/config';

class ProductsController {
  async index(req, res) {

    var retProducts
    await axios.get(process.env.urlPipe+'products/'+req.params.id+'/deals?status=won&'+process.env.tokenPipe)
    .then(function(resp){
      retProducts = resp.data
    });

    return await res.json(retProducts);
  }

}

export default new ProductsController();
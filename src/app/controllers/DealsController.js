import axios from 'axios'
import Deals from '../models/Deals';
import 'dotenv/config';

class DealsController {
  async index(req, res) {
    var retDeals
    await axios.get(process.env.urlPipe+'deals?status=won&'+process.env.tokenPipe)
    .then(function(resp){
      retDeals = resp.data
    });

    return res.json(retDeals.data);
  }

}

export default new DealsController();
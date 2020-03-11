import axios from 'axios'
import xmlEncode from '../../lib/xmlGenerator'
import 'dotenv/config';
import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    var retDeal;
    var retProductDeal;

    await axios.get(process.env.urlPipe+'deals/'+req.params.id+'?'+process.env.tokenPipe)
    .then(function(resp){
      retDeal = resp.data
    });

    if (retDeal.data.status != 'won') {
      return res.json({ error: 'Essa oportunidade não está com status ganho' });
    }

    await axios.get(process.env.urlPipe+'deals/'+req.params.id+'/products?'+process.env.tokenPipe)
      .then(function(resp){
        retProductDeal = resp.data
    });    

    var xmlData = {
      clienteNome: retDeal.data.person_name,
      volumeServico: 'SEDEX',
      itemCodigo: 'TESTE' + retProductDeal.data[0].deal_id,
      itemDescricao: retProductDeal.data[0].name,
      itemQtde: retProductDeal.data[0].quantity,
      itemVlrUnit: retProductDeal.data[0].item_price,
      parcelaVlr: retProductDeal.data[0].value
    }
    var retxml;
    var xml = await xmlEncode.get(xmlData, {});

    //var xml = retxml;

    /*
    await axios.get(process.env.urlPipe+'deals/'+req.params.id+'?status=won&'+process.env.tokenPipe)
    .then(function(resp){
      retDeals = resp.data
    });

    await axios.get(process.env.urlPipe+'products/'+req.params.id+'/deals?status=won&'+process.env.tokenPipe)
    .then(function(resp){
      retProducts = resp.data
    });*/

    
    var retOrder
    let resp = await axios.post(process.env.urlBling+'pedido/json/?'+process.env.tokenBling+'&xml='+xml);

    return await res.json(resp.data);
  }

}

export default new OrderController();
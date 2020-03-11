import axios from 'axios'
import Bling from '../models/Bling';
import 'dotenv/config';

class BlingController {
  async store(req, res){
    var retBling
    var dadosBling = []
    await axios.get(process.env.urlBling+'pedidos/json/?'+process.env.tokenBling)
    .then(function(resp){
      retBling = resp.data.retorno.pedidos
      
      retBling.forEach(element => {
        var numero = element.pedido.numero
        var data = element.pedido.data
        var totalvenda = element.pedido.totalvenda
  
        dadosBling.push({numero,data,totalvenda});
      });
    });

    const bling = await Bling.insertMany(dadosBling)
    .then(function (docs){
      res.json(docs);
    })
    .catch(function(err){
      res.status(500).send(err);
    })

    return res.json(bling);
  }

  async index(req, res){
    const pedidos = await Bling.find({})

    return res.json(pedidos);
  }
}

export default new BlingController();
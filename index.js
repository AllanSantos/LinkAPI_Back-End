const express = require('express');
const request = require('request');

const server = express();

const hostname = 'https://allansilva.pipedrive.com/v1';
const path = '/deals';
const status = '?status=won';
const token = '&api_token=7b9b09be53878940348a684aa40e0bdfad994608'

server.use(express.json());
var deals;

request(`${hostname}${path}${status}${token}`, (err,res,body) => {
  deals = body;
})

server.get('/deals', (req, res) => {
  res.send(deals);
})

server.listen(3000);
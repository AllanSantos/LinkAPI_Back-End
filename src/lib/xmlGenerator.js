import builder from 'xmlbuilder';

class xmlGenerator {
  constructor() {

    this.init();
  }

  init(){

  }

  get(params) {
    var feed = builder.create('pedido', { encoding: 'utf-8' })
        .ele('cliente')
          .ele('nome', params.clienteNome).up()
          .ele('tipoPessoa', '').up()
          .ele('endereco', '').up()
          .ele('cpf_cnpj', '').up()
          .ele('ie_rg', '').up()
          .ele('numero', '').up()
          .ele('complemento', '').up()
          .ele('bairro', '').up()
          .ele('cep', '').up()
          .ele('cidade', '').up()
          .ele('uf', '').up()
          .ele('fone', '').up()
          .ele('email', '').up()
        .up()
        .ele('transporte')
          .ele('transportadora','').up()
          .ele('tipo_frete','').up()
          .ele('servico_correios', '').up()
          .ele('dados_etiqueta')
            .ele('nome','').up()
            .ele('endereco','').up()
            .ele('numero','').up()
            .ele('complemento','').up()
            .ele('municipio','').up()
            .ele('uf','').up()
            .ele('cep','').up()
            .ele('bairro','').up()
          .up()
          .ele('volumes')
            .ele('volume')
              .ele('servico', params.volumeServico).up()
              .ele('codigoRastreamento',).up()
            .up()
          .up()
        .up()
        .ele('itens')
          .ele('item')
            .ele('codigo', params.itemCodigo).up()
            .ele('descricao', params.itemDescricao).up()
            .ele('un','').up()
            .ele('qtde', params.itemQtde).up()
            .ele('vlr_unit', params.itemVlrUnit).up()
          .up()
        .up()
        .ele('parcelas')
          .ele('parcela')
            .ele('data','').up()
            .ele('vlr', params.parcelaVlr).up()
            .ele('obs','Teste obs').up()
          .up()
        .up()
        .ele('vlr_frete','').up()  
        .ele('vlr_desconto','').up()
        .ele('obs','').up()
        .ele('obs_internas','').up()
      
      return encodeURIComponent(feed.end({ pretty: true }))
  }
  
}


export default new xmlGenerator();
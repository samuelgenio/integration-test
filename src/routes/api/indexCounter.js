import elasticConnector from '../../elastic/elasticConnector'

module.exports = (server) => {
 
    server.get('/index/:indexName/counter', async (req, res) => {

      // #swagger.tags = ['Index']
      // #swagger.description = 'Obtém a quantidade de documentos em um índice'
      // #swagger.parameters['indexName'] = { description: 'Nome do índice' }

      const params = { index: req.params.indexName };
      return elasticConnector.getInstance().getClient()
        .count(params)
        .then((resp) => 
            res.status(200).json({ status: "success", result: resp })
          )
        .catch((error) => 
          res.status(500).json({
              status: "error",
              message: error.message,
              params: params
          })
      );
    })
    
}
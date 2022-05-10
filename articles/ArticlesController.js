const express = require ('express')
const router = express.Router() // router é um recurso do EXPRESS que serve para definir rotas fora do seu arquivo principal

router.get('/articles', (req, res) => {
    res.send('ROTA DE ARTIGOS')
})

router.get('/admin/articles/new', (req, res) => { // rota para criar nova categoria, onde ficaria um form por exemplo
    res.send('ROTA PARA CRIAR UM NOVO ARTIGO')
})

module.exports = router // exportar o router para acessar no arquivo principal
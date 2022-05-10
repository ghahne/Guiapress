const express = require ('express')
const router = express.Router() // router é um recurso do EXPRESS que serve para definir rotas fora do seu arquivo principal

router.get('/categories', (req, res) => {
    res.send('ROTA DE CATEGORIAS')
})

router.get('/admin/categories/new', (req, res) => { // rota para criar nova categoria, onde ficaria um form por exemplo
    res.send('ROTA PARA CRIAR UMA NOVA CATEGORIA')
})

module.exports = router // exportar o router para acessar no arquivo principal
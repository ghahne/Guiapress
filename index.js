const express = require('express')
const app = express () // instância do express
const bodyParser = require ('body-parser') // importando bParser
const connection = require ('./database/database')

const categoriesController = require ('./categories/CategoriesController')
const articlesController = require ('./articles/ArticlesController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')

// carregando view engine 
app.set('view engine', 'ejs') 

// configurando body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // dizendo para o bParser aceitar dados de json, além de formulários

// static
app.use(express.static('public'))

// database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!')
    }).catch((error) => {
        console.log(error)
    })


// diz para o express que eu quero usar as rotas la do controller na minha aplicação
app.use('/', categoriesController) // o '/' é um prefixo, eu posso usar qualquer coisa aqui, será escrito antes para chamar as rotas

app.use('/', articlesController)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => { // função callback
    console.log('O servidor está rodando!')
})
const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
app.use(routes)

app.listen(3333)
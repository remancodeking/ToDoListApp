const express = require('express')
const app = express()
const cors = require('cors')
const resigeter = require("./router/resigeter")
const login = require('./router/login')
const nodes_updata = require("./router/nodes_update")
const nodes_post = require("./router/nodes_post")
const nodes_get = require("./router/nodes_get")
const nodes_delete = require("./router/nodes_delete")
const connect = require("./connection/connect")
const port = 3000
const hostname = '127.0.0.1'

// all use app 
app.use(express.json())
app.use(cors())

// all router define 
app.use('/resigeter', resigeter)
app.use("/login", login)

// all nodes router defind
app.use('/nodes', nodes_post)
app.use('/nodes', nodes_get)
app.use('/nodes', nodes_delete)
app.use('/nodes', nodes_updata)


// Short routers
app.get('/', (req, res) => {
  res.send('<h1>Welcome to ToDoListApp</h1>')
})


// listen the server
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
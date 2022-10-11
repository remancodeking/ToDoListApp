const express = require('express')
const app = express()
const cors = require('cors')
const resigeter = require("./router/resigeter")
const login = require('./router/login')
const nodes_updata = require("./router/nodes_update")
const nodes_post = require("./router/nodes_post")
const nodes_get = require("./router/nodes_get")
const nodes_delete = require("./router/nodes_delete")
const user_detile = require("./router/user_detile")
const user_detile_get = require("./router/user_detile_get")
const connect = require("./connection/connect")
const doenv = require("dotenv")
const env = doenv.config()
const port = process.env.PORT
const hostname = process.env.HOSTNAME

// all use app 
app.use(express.json())
app.use(express.static("public"))
app.use(cors())

// all router define 
app.use('/resigeter', resigeter)
app.use("/login", login)
app.use('/userdetile', user_detile)
app.use('/userdetile', user_detile_get)

// all nodes router defind
app.use('/nodes', nodes_post)
app.use('/nodes', nodes_get)
app.use('/nodes', nodes_delete)
app.use('/nodes', nodes_updata)

// Short routers
app.get('/', (req, res) => {
  res.status(200).json({status:true,massage:"ToDoListApp api"})
})

app.use((req, res)=>{
  res.status(404).json({status:false,massage:"Router node found"})
})




// listen the server
app.listen( port, () => {
  console.log(`listening on http://${hostname}:${port}`)
})
const express = require('express')
const app = express()
const resigeter = require("./router/resigeter")
const connect = require("./connection/connect")
const port = 3000

// all use app 
app.use(express.json())


// all router define 
app.use('/resigeter', resigeter)


// Short routers
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// listen the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
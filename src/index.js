const express = require('express')
const cors = require ("cors")
const app = express()
const port =
// const cors = require ("@fastify/cors")
//const formbody = require(@fastify/formbody");

app.get('/', (req, res) => {
  res.send('Hello World!')
  
  //essa função é para que funcione dois host diferentes

})
//onst corsOptions = {
 // credentials:true,
 // origin:/localhost\:3000 ,}

//server.register(cors, corsOpitions)
// server.register(formBody):


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
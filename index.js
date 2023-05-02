const express = require('express')
const app = express();
var cors = require('cors')
const port = 5000

app.use(cors())

const chefData = require('./data/data.json')

app.get('/chefData', (req, res) => {
  res.send(chefData);
})


app.get('/', (req, res) => {
  res.send('chef recipe hunter website')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
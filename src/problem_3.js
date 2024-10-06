var http = require('http');
var axios = require('axios');
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/tx/status', async (req, res) => {
  const { symbol, price, timestamp } = req.body
  try {
    if (typeof symbol !== 'string') {
      throw new Error('symbol must be string');
    }
    if (typeof price !== 'number') {
      throw new Error('price must be number');
    }
    if (typeof timestamp !== 'number') {
      throw new Error('timestamp must be number');
    }
    
    const { data } = await axios.post('https://mock-node-wgqbnxruha-as.a.run.app/broadcast', {
      symbol: "ETH",
      price: 4500,
      timestamp: 1678912345
    })

    const checkedData = await axios.get(`https://mock-node-wgqbnxruha-as.a.run.app/check/${data.tx_hash}`)
    if (!checkedData?.data?.tx_status) {
      throw Error('cannot find tx status')
    }

    res.status(200)
    res.send({ status: checkedData?.data?.tx_status })
  } catch (e) {
    console.error(e.message)
    res.status(400)
    res.send({ message: e.message })
  }
})

app.get('/check/:tx', async (req, res) => {
  const { data } = await axios.get()
})

app.listen(8081, () => {
  console.log('start')
})

// http.createServer(function (req, res) {
// //  console.log('in server')
// //  axios.post('https://mock-node-wgqbnxruha-as.a.run.app/broadcast', {
// //     symbol: "ETH",
// //     price: 4500,
// //     timestamp: 1678912345
// //  }).then(res => {
// //   console.log('res :', res.data);
// //  }).catch(err => {
// //   console.log('err :', err);
// //  })
// console.log('OK')
// }).listen(8081, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8081/');
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'Teste - testando' })
})

app.listen(3333)

import express from 'express'

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
  res.send('oi')
})

app.listen(PORT, console.log(`ABERTO EM http://localhost:${PORT}`))

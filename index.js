import express from 'express'
import router from './routes/index.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.set('views', './views')
app.set('view engine', 'ejs')

const PORT = 5000

app.use('/', router)

app.listen(PORT, console.log(`ABERTO EM http://localhost:${PORT}`))
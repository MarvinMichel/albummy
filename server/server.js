const express = require('express')
const compression = require('compression')
const chalk = require('chalk')
const createConnection = require('./middleware/createConnection')
const { join } = require('path')
const { urlencoded, static } = express

const PORT = process.env.PORT || 8080
const ROOT = join(__dirname, '../client')
const app = express()
const db = createConnection()

const indexRoute = require('./routes/index')
const imagesRoute = require('./routes/images')
const uploadRoute = require('./routes/upload')
const editRoute = require('./routes/edit')

app
  .set('view engine', 'ejs')
  .set('views', __dirname + '/views')
  .use(urlencoded({ extended: true }))
  .use(static(ROOT))
  .use(compression())
  .use('/', indexRoute)
  .use('/images', imagesRoute)
  .use('/upload', uploadRoute)
  .use('/edit', editRoute)
  .listen(PORT, () => {
    console.log(chalk.green(`Server running at port ${PORT}`))
  })

exports.db = db
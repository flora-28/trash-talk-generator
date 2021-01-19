const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate-trash-talk')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trashTalk = generateTrashTalk(req.body)
  res.render('index', { trashTalk })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
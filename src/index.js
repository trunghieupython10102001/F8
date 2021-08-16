const express = require('express')
const exphbs  = require('express-handlebars');
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const route = require('./routes');
const db = require('./config/db');
const app = express()
const port = 3000

// Connect database
db.connect()

// Use cookie parser
app.use(cookieParser('ajdfak9333jd411afaef%9334'))

// Using static file
app.use(express.static(path.join(__dirname, 'public')))

// Morgan logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', exphbs({
	extname: '.hbs',
	isCached: false,
	helpers: {
	}
}))


app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.listen(port, () => {
	console.log(`My app listening at http://localhost:${port}`)
})

// json encode
app.use(express.json())
app.use(express.urlencoded())

route(app)
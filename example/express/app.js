const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use('/api', require('./router')(new express.Router()))
app.listen(4000)
import express from 'express'
import compression from 'compression' // compresses requests
import session from 'express-session'
import helmet from 'helmet'
import lusca from 'lusca'
import MongoStore from 'connect-mongo'
import path from 'path'
import { MONGODB_URI, SESSION_SECRET } from './util/secrets'
import './loaders/db'

// Create Express server
const app = express()

// Connect to MongoDB
const mongoUrl = MONGODB_URI

// Express configuration
app.set('port', process.env.PORT || 3001)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.use(compression())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
      mongoUrl
    })
  })
)

app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

/* Routes */
import indexRouter from './router/index'
app.use('/', indexRouter)

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

export default app

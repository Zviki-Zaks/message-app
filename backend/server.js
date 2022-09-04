const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')

//CREATE SERVER
const app = express()
const http = require('http').createServer(app)

// EXPRESS APP CONFIG
const session = expressSession({
    secret: 'messaging',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
app.use(express.json())
app.use(session)


//PORT
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}


//ROUTES
const userRoute = require('./api/user/user.routes')
const authRoute = require('./api/auth/auth.routes')

const { connectSockets } = require('./services/socket.service')

const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
app.all('*', setupAsyncLocalStorage)

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

//CONNECT TO SOCKET.IO
connectSockets(http, session)

app.get('/**', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    } else {
        res.send('Server ready')
    }
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
    logger.info('Server is running on port: ' + port)
})



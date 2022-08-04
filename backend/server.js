const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')


const app = express()
const http = require('http').createServer(app)

// Express App Config
const session = expressSession({
    secret: 'messaging',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}


app.get('/**', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    } else {
        res.send('Server ready')
    }
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
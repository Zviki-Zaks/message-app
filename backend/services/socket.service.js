const logger = require('./logger.service')

var gIo = null

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })
    gIo.on('connection', socket => {
        logger.debug(`Socket connected - socketId: ${socket.id}`)
        socket.on('disconnect', socket => {
            logger.debug(`Socket disconnected`)
        })
        socket.on('set-user-socket', userId => {
            socket.userId = userId
        })
        socket.on('unset-user-socket', () => {
            delete socket.userId
        })
        socket.on('add-user', newUser => {
            socket.broadcast.emit('added-user', newUser)
        })
        socket.on('chat topic', topic => { // sets user's id as topic
            if (socket.myTopic === topic) return;
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic
        })
        socket.on('chat updated', chat => {
            if (chat.sentToId === socket.myTopic || chat.sentFromId === socket.myTopic) {
                socket.broadcast.emit('message received', chat)
            }
        })

    })
}

module.exports = {
    connectSockets,
}
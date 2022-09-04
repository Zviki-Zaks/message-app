import io from 'socket.io-client'
// import socketIOClient from 'socket.io-client'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//127.0.0.1:3030/'
export const socketService = createSocketService()
console.log('hi')
socketService.setup()

function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      console.log(baseUrl)
      socket = io(baseUrl)
      console.log('socket', socket)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}

// export const socket = socketIOClient(baseUrl)

// console.log('socket', socket)

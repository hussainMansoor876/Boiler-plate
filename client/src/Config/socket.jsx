import io from 'socket.io-client'

const socket = io('/', { reconnect: true })
socket.on('connect', () => {
    console.log('connected', socket.id)
})

socket.on('disconnect', () => {
    console.log('disconnected')
})


export default socket
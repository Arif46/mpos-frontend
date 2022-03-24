let app = require('express')();

let http = require('http').Server(app);

let io = require('socket.io')(http);

io.on('connection', (socket) => {
    io.emit('noOfConnections', Object.keys(io.sockets.connected).length)


    socket.on('disconnect', () => {
        console.log('disconnected')
        io.emit('noOfConnections', Object.keys(io.sockets.connected).length)
    })



    socket.on('chat-message', (msg) => {
        console.log('fgfgfg')
        socket.broadcast.emit('chatMessage', msg)
    })
    socket.on('joined', (name) => {
        socket.broadcast.emit('joined', name)
    })
    socket.on('leaved', (name) => {
        socket.broadcast.emit('leaved', name)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
    socket.on('stoptyping', () => {
        socket.broadcast.emit('stoptyping')
    })


})

http.listen(3000, () => {
    console.log('Server is started at http://localhost:3000')
})

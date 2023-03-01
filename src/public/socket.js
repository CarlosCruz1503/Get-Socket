const socket = io()

console.log(socket)

export const loadNotes = (callback) => {
    socket.on("server:loadNotes", callback)
}

export const saveNote = (title, description) => {
    socket.emit("client:saveNote", {
        title,
        description
    })
}

export const onNewNote = (callback) => {
    socket.on("server:saveNote", callback)
}
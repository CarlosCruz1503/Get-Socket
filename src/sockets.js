import NoteModel from "./models/Note"

export default (io) => {

    io.on("connection", async (socket)=> {

        const emitNotes = async () => {
            const notes = await NoteModel.find()
            console.log(notes)

            io.emit("server:loadNotes",notes)
        }
        emitNotes()

        socket.on("client:saveNote", async (data) => {
            const savedNote = await NoteModel.create(data)
            io.emit("server:saveNote", savedNote)
        })

    })

}

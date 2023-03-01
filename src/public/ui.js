import { saveNote } from "./socket.js"

const noteList = document.querySelector("#notes")

export const renderNotes = async (notes) => {
    console.log(noteList)
    console.log(notes)

    notes.forEach(note => {
        console.log(note)
        noteList.innerHTML += `
        <div>
        <h1>${note.title}</h1>
        <h1>${note.description}</h1>
        </div>
        `
    });
}

export const appendNote = async (note) => {
    noteList.innerHTML += `
        <div>
        <h1>${note.title}</h1>
        <h1>${note.description}</h1>
        </div>
        `
}

export const onHandleSubmit = (e) => {
    console.log("submit")
    e.preventDefault()
    const title = noteForm["title"].value
    const description = noteForm["description"].value
    saveNote(
        title,
        description
    )
}
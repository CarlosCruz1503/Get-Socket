import {loadNotes, onNewNote} from "./socket.js"
import { appendNote, onHandleSubmit, renderNotes } from "./ui.js"

export const socket = io()

const noteForm = document.querySelector("#noteForm")

noteForm.addEventListener("submit", (e) => {
    onHandleSubmit(e)
})

renderNotes()

loadNotes(renderNotes)

onNewNote(appendNote)

import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text">

        <button id="saveNote">Save Note</button>
    `
}

//Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "saveNote") {

         // Make a new object representation of a note
         const newNote = {
             // Key/value pairs here
             text: document.getElementById("note-text").value,
         }

         // Change API state and application state
         saveNote(newNote)
     }
 })

export const NoteForm = () => {
    render()
}    
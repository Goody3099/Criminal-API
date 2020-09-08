import { saveNote } from "./noteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalCollection) => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text">
        <select class="dropdown" id="BADGUY">
        <option value="0">Please select a BAD GUY...</option>
        ${criminalCollection.map(criminalObj => {
        return `<option id="${criminalObj.id}" value="${criminalObj.name}">${criminalObj.name}</option>`
    })}
    </select>
        <button id="saveNote">Save Note</button>
    `
}

//Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        if (document.getElementById("BADGUY").value !== "0") {
            // Make a new object representation of a note
            const newNote = {
                // Key/value pairs here
                text: document.getElementById("note-text").value,
                suspect: document.getElementById("BADGUY").value,
            }

            // Change API state and application state
            saveNote(newNote)

        }
        else {
            window.alert("BAD GUY?")
        }

    }
})
export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals())
        })
}    
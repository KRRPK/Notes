
// let emoji = document.getElementById("emoji");
// let result;
// async function fetchEmoji(){
//     let res = await fetch('https://emoji-api.com/emojis?access_key=123412341234');
//     result = await res.json();
//     console.log(result[230].character);
// }
// fetchEmoji();
// emoji.addEventListener("click",()=>{
//     let randNum = Math.floor(Math.random()*result.length)
//     emoji.innerHTML=result[randNum].character;
// })


let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    notesContainer.innerHTML += `
      <div class="note">
        ${note}
        <button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  if (noteInput.value.trim() === "") return alert("Note cannot be empty");
  notes.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

window.onload = displayNotes;
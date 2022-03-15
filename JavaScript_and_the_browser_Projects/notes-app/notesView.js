class NotesView {
    constructor(model , api) {
      this.model = model;
      this.api = api;
      this.mainContainerEl = document.querySelector('#main-container');
      this.addbuttonEl = document.querySelector('#add-notes-button');
      this.addbuttonEl.addEventListener('click', () => {
        const newNote = document.querySelector('#add-notes').value;
      this.addNewNote(newNote);
      });
    };

    addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
    };
    
    displayNotes() {
      const removenotes = document.querySelectorAll('div.note');
      removenotes.forEach( removeNote => {
        removeNote.remove();
      });

      document.querySelector('#add-notes').value = "";

      const notes = this.model.getNotes()
      // For each note, create and append a new element on the main container
      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.innerText = note;
        noteEl.className = 'note';
        this.mainContainerEl.append(noteEl);
      });
    };
  };
  
  module.exports = NotesView;
/**
 * @jest-environment jsdom
 */
 const fs = require('fs');
 const Notesview = require('./notesView');
 const NotesModel = require('./notesModel');


 describe('notesView', () => {
   it('displays 2 paragraphs', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     const model = new NotesModel();
     const noteview = new Notesview(model);
     model.addNote('First note');
     model.addNote('Second Note');
     noteview.displayNotes();

     expect(document.querySelectorAll('div.note').length).toEqual(2);
   });
 });

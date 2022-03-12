/**
 * @jest-environment jsdom
 */
 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const Notesview = require('./notesView');

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

   it('displays a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const noteview = new Notesview(model);
    const inputEl = document.querySelector('#add-notes');
    const addbuttonEl = document.querySelector('#add-notes-button');
    inputEl.value = "A note has baan added";
    addbuttonEl.click();

    expect(document.querySelectorAll('div.note')[0].innerText).toEqual("A note has baan added");
  });

  it('Once two notes are added the output is 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const noteview = new Notesview(model);
    const inputEl = document.querySelector('#add-notes');
    const addbuttonEl = document.querySelector('#add-notes-button');

    inputEl.value = "A note has baan added";
    addbuttonEl.click();
    inputEl.value = "Another note has baan added";
    addbuttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })


 });

(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.listofnotes = [];
        }
        getNotes() {
          return this.listofnotes;
        }
        addNote(input) {
          this.listofnotes.push(input);
        }
        reset() {
          this.listofnotes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var Notesview = require_notesView();
  var model = new NotesModel();
  model.addNote("This is an example note");
  var noteview = new Notesview(model);
  noteview.displayNotes();
})();

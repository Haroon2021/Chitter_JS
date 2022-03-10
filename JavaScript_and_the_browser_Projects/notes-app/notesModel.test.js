const NotesModel = require('./notesModel');

describe('NotesModel', () => {
    it('can retrieve notes', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });

    it('can retrieve notes', () => {
        const model = new NotesModel();
        model.addNote('note1');
        model.addNote('note2');
        expect(model.getNotes()).toEqual(['note1','note2']);
    });
    it('can retrieve notes', () => {
        const model = new NotesModel();
        model.addNote('note1');
        model.addNote('note2');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
});


// describe('NotesModule', () => {
//     it('can retrieve notes', () => {
//         const model = new Notesmodule();
//         model.addNotes('note1');
//         model.addNotes('note2');
//         expect(model.getNotes()).toEqual();
//         expect(model.getNotes()).toEqual([]);
//     });
// });


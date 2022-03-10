class NotesModel {
    constructor () {
        this.listofnotes = []
    };

    getNotes() {
        return  this.listofnotes;
    };

    addNote(input) {
        this.listofnotes.push(input);
    };

    reset() {
        this.listofnotes = [];
    };
};


module.exports = NotesModel;
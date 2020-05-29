class BookReview {
    constructor(title, author){
        this.author = author;
        this.title = title;
        this.notes = [];
        this.rating = 0;
    }

    addNotes(page, note){
        if(this.notes[page]){
            this.notes[page] = this.notes[page] + ' ' + note;    
        } else {
            this.notes[page] = note;
        }
    }

    // editNotes(page, newNote){
    //     this.notes[page] = newNote;
    // }

    addRating(rating){
        if(rating > 5){
            throw new Error();
        }
        this.rating = rating;
    }    
}
module.exports = { BookReview };

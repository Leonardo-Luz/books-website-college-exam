export class MyList{
    static books = Array();

    static addBook(book){
        this.books.push(book);
        alert('Livro adicionado com sucesso!');
    }

    static getBooks(){
        return this.books;
    }

    static isFavorite(id){
        return this.books.find(book => book.id === id)
    }

    static getBook(id){
        return this.books.find(book => book.id === id)
    }

    static removeBook(id){
        this.books.splice(this.books.indexOf(this.books.find(book => book.id === id)), 1)
        alert('Livro removido com sucesso!');
    }
}


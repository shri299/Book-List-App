function Book(title,author,isbn)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


function UI() {

}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');
    //insert calls
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a hrf="#" class="delete">X</a></td>`;

    list.appendChild(row);
}

UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event listeners

document.getElementById('book-form').addEventListener('submit',function (e) {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value; 
    
    const book = new Book(title,author,isbn);
    const ui = new UI();

    //add book to list
    ui.addBookToList(book);
    //clear field
    ui.clearFields();
    e.preventDefault();
    
})

//Event listernar for delete

document.getElementById('book-list').addEventListener('click',function (e) {
    // console.log(123);
    const ui = new UI();
    ui.deleteBook(e.target);
    e.preventDefault();
})
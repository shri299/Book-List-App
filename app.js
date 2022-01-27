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

UI.prototype.showAlert = function (message,className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    },3000)
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

    if (title==='' || author==='' || isbn==='') {
        ui.showAlert('Please Fill in all the Fields','error');
    }
    else{
        //add book to list
        ui.addBookToList(book);
        //clear field
        ui.clearFields();
        ui.showAlert('Book Added','success');
    }

    
    e.preventDefault();
    
})

//Event listernar for delete

document.getElementById('book-list').addEventListener('click',function (e) {
    // console.log(123);
    const ui = new UI();
    ui.deleteBook(e.target);
    e.preventDefault();
})
// 2 es5 constructor becomes 2 classes

class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{

  addBookToList(book){
    //this is the "database" in tbody
    const list = document.querySelector('#book-list')
    //create tr element in which we will put the book
    const row = document.createElement('tr');
    //take tr and inject html into it which will be the columns (td). insert cols. last one is a link tag which will be the delete button.
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    //apppend the filled out row to the list
    list.appendChild(row);
  }

  showAlert(message, className){
    // Create div for message
    const div = document.createElement('div');
    // Add classes. alert is default, but then extras passed in: error or success. changes the color of the backround of the message
    div.className = `alert ${className}`;
    // Add text. appendChild adds into the div. what is the difference between row.innerHTML and appendchild? 
    div.appendChild(document.createTextNode(message));
    // Insert into the DOM
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert Alert container is the parent. insertbefore needs parent, what we want to insert and before what
    container.insertBefore(div, form);
    // Disappear after 3 secs
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }

  deleteBook(target){
    if(target.className === 'delete'){
      // DOM traversing back to the tr as we want to delete the whole row. target link parent element is td, its parent is the tr
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
    document.querySelector('#title').focus();
  }
}

// Local storage class handling storage
class Store{
  // Fetching books from local storage
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    //will display in the table below. is called at DOM load. looping through local storage and displays books one by one using the UI class. 
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;

      // Add books to UI
      ui.addBookToList(book);
    })
  }
  static addBook(book){
  
    const books = Store.getBooks();
    
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));

  }
  
  static removeBook(isbn){
    // Getting isbn from mouse click event
    // console.log(isbn);

    // Loop through local storage books, find and delete passed book
    const books = Store.getBooks();
    
    // if the passed in isbn is equal to the current book isbn, then delete from books
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event listeners

document.querySelector('#book-form').addEventListener('submit', function(e){
  //get all the data from fields
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //instatiate book constructor
  const book = new Book(title, author, isbn);
  
  //add book to the "database" (table below). using the UI object for that
  const ui = new UI();

  //validate fields
  if(title === '' || author === '' || isbn === ''){
  //error alert. #1: message, #2: class. error class is in css!
  ui.showAlert('Please fill in all fields', 'error');
  } else {
  //add book to list. addBookToList needs to be added to UI prototype
  ui.addBookToList(book);
  
  // Add to local storage
  Store.addBook(book);
    
  // Show success
  ui.showAlert('Book succesfully added!', 'success');

  //clear fields for new input
  ui.clearFields();
  }

 

  e.preventDefault();
});

// Event listener for delete book. book list is the listener, as books are not there when DOM loads. 
document.querySelector('#book-list').addEventListener('click', function(e){
  // Instantiate UI class
  const ui = new UI();
  ui.deleteBook(e.target);

  // REmove from local storage. hard to identify which book, so we need to use isbn, as a unique identifier. 
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  ui.showAlert('Book removed!', 'success');
  e.preventDefault();
})

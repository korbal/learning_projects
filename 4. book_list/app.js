//book constructor. handles creating actual book object
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


//UI constructor. prototype methods to add books, show alert, delete book, etc. 
//everything goes into the prototype
function UI(){}

//add book to "database" (list below)
UI.prototype.addBookToList = function(book){
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
ui.showAlert('Book succesfully added!', 'success');

}

//show alert
UI.prototype.showAlert = function(message, className){
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

//clear input fields
UI.prototype.clearFields = function(){
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
  document.querySelector('#title').focus();
}



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
  ////////////////ui.showAlert('Book succesfully added!', 'success');

  //clear fields for new input
  ui.clearFields();
  }

 

  e.preventDefault();
});

"use strict";

console.log("Test");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pageCount = pages;
  this.read = read;
}

function findBook(bookid) {
  myLibrary.forEach((bk) => {
    if (bk.id === bookid) {
      return bk;
    }
  });
  return null;
}

function removeBook(bookid) {
  let bk = findBook(bookid);
  myLibrary.pop(bk);
}

Book.prototype.toggleRead = function () {
  this.read != this.read;
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("Sometimes a Great Notion", "Ken Kesey", 321, true);
addBookToLibrary("Lonesome Dove", "Larry McMurtry", 654, true);
addBookToLibrary("Shogun", "James Clavell", 543, true);
addBookToLibrary("Tinker, Tailor, Soldier, Spy", "Jean LeCarre", 432, true);
addBookToLibrary(
  "The Adventures of Sherlock Holmes",
  "Sir Aurthur Conan Doyle",
  765,
  true,
);

/*
<card class="book">
<div class="bookTitle">Whatever</div>
<div class="bookAuthor">Joe Writer</div>
<div class="bookPages">123</div>
<div class="cardFooter">
<button class="removeBook">Remove</button>
<label>
<input type="checkbox" name="toggleRead" >
Read it
</label>
</div>
</card>
*/
const bookListDiv = document.getElementById("bookList");

myLibrary.forEach((bk) => {
  let card = document.createElement("div");
  card.classList.add("book");
  card.dataset.id = bk.id;

  let title = document.createElement("div");
  title.classList.add("bookTitle");
  title.textContent = bk.title;
  card.appendChild(title);

  let cardMiddle = document.createElement("div");
  cardMiddle.classList.add("cardMiddle");
  card.appendChild(cardMiddle);

  let author = document.createElement("div");
  author.classList.add("bookAuthor");
  author.textContent = bk.author;
  cardMiddle.appendChild(author);

  let pgCount = document.createElement("div");
  pgCount.classList.add("bookPages");
  pgCount.textContent = bk.pageCount + " pages";
  cardMiddle.appendChild(pgCount);

  let footer = document.createElement("div");
  footer.classList.add("cardFooter");
  card.appendChild(footer);

  let readItDiv = document.createElement("div");
    readItDiv.classList.add("readItDiv");
  let readItLabel = document.createElement("label");
  readItLabel.classList.add("checkboxLabel");
  readItLabel.textContent = "read it";
  readItLabel.for = "toggleRead";
  readItDiv.appendChild(readItLabel);
  let readItCheckbox = document.createElement("input");
  readItCheckbox.type = "checkbox";
  readItCheckbox.name = "toggleRead";
  readItCheckbox.addEventListener("click", function (e) {
    const bookDiv = e.target.closest(".book");
    const bkid = bookDiv.dataset.id;
    let book = findBook(bkid);
    book.toggleRead();
  });
  readItDiv.appendChild(readItCheckbox);
  footer.appendChild(readItDiv);

  let removeButton = document.createElement("button");
  removeButton.classList.add("removeBook");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", (e) => {
    const bookDiv = e.target.closest(".book");
    const bookDivContainer = bookDiv.parentElement;
    const bkid = bookDiv.dataset.id;    
    removeBook(bkid);
    bookDivContainer.removeChild(bookDiv);
  });
  footer.appendChild(removeButton);

  bookListDiv.appendChild(card);
});

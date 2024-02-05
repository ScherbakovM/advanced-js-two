import { Library } from "./book.js";

const myLibrary = new Library(["Война и мир", "Преступление и наказание", "Гарри Поттер и философский камень"]);

myLibrary.addBook("1984");

console.log(myLibrary.allBooks); 
console.log(myLibrary.hasBook("1984")); 

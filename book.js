export class Library {
  #books;

  constructor(books) {
    if (!Array.isArray(books)) {
      throw new TypeError("Аргумент должен быть массивом");
    }

    if (new Set(books).size !== books.length) {
      throw new Error("Массив содержит дубликаты");
    }
    this.#books = [...books];
  }

  get allBooks() {
    return [...this.#books];
  }

  addBook(title) {
    if (typeof title !== "string") {
      throw new TypeError("Название книги должно быть строкой");
    }
    if (this.hasBook(title)) {
      throw new Error("Книга с таким названием уже есть в библиотеке");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    if (typeof title !== "string") {
      throw new TypeError("Название книги должно быть строкой");
    }
    if (!this.hasBook(title)) {
      throw new Error("Книги с таким названием нет в библиотеке");
    }
    const index = this.#books.indexOf(title);
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    if (typeof title !== "string") {
      throw new TypeError("Название книги должно быть строкой");
    }
    return this.#books.includes(title);
  }
}


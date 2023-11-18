/* Single Responsibility Principles */

////////////////////////////////
////////// 1) BAD  /////////////
////////////////////////////////
class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }

  login(username, password) {
    // ...
  }
}

////////////////////////////////
////////// 2) GOOD  /////////////
////////////////////////////////
class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

class UserAuthentication {
  login(username, password) {
    // ...
  }
}

class DataBaseManagement {
  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }
}

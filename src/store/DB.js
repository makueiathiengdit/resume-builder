class Database {
  constructor() {
    this.instance = null;
    this.connection = null;
  }

  getInstance() {
    if (this.instance === null) {
      this.instance = new Database();
    }
    return this.instance;
  }
  getConnection() {
    if (this.connection === null) {
      this.connection = new indexedDB();
    }
    return this.connection;
  }

  store(key, value) {}
  find(key) {}
}

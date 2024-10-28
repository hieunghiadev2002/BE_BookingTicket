const mongoose = require('mongoose');
require('dotenv').config();

class Db {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error', err);
      });
  }
}
module.exports = new Db();

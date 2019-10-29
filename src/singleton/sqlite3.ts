import sqlite3 from "sqlite3";

const sqlite3Impl = sqlite3.verbose();

const db = new sqlite3Impl.Database("./db.sqlite3", err => {
  if (err) return console.error(err);

  console.log("Connected to the SQlite database.");
  createTables();
});

function createTables() {
  db.run(
    "CREATE TABLE IF NOT EXISTS todo(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)"
  );
}

export default db;

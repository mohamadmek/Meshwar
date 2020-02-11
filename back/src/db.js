import sqlite from 'sqlite'
import SQL from 'sql-template-strings';


const test = async () => {
   const db = await sqlite.open('./meshwar.sqlite');

   await db.run(`CREATE TABLE Events (event_id INTEGER PRIMARY KEY AUTOINCREMENT, location TEXT NOT NULL, date TEXT NOT NULL, title TEXT NOT NULL, price INTEGER NOT NULL, image_src TEXT NOT NULL, remaining_seats NUMBER NOT NULL, description text NOT NULL, picture_id INTEGER, FOREIGN KEY(picture_id) REFERENCES Pictures(picture_id));`);

   await db.run(`CREATE TABLE Registrations (registration_id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT, age INTEGER, email TEXT UNIQUE, address TEXT, event_id Integer, mobile TEXT UNIQUE, FOREIGN KEY(event_id) REFERENCES Events(event_id));`);

   await db.run(`CREATE TABLE Pictures (picture_id INTEGER PRIMARY KEY AUTOINCREMENT, event_id INTEGER, type_id INTEGER, name TEXT, FOREIGN KEY(event_id) REFERENCES Events(event_id), FOREIGN KEY(type_id) REFERENCES pictures_types(type_id));`);

   await db.run(`CREATE TABLE pictures_types (type_id INTEGER PRIMARY KEY AUTOINCREMENT, type_name TEXT);`);
}

export default {test};
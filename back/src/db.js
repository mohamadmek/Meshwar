import sqlite from 'sqlite'
import SQL from 'sql-template-strings';


const initializedb = async () => {
   const db = await sqlite.open('./meshwar.sqlite');
   
   const test = async () => {
      await db.run(`CREATE TABLE Events (event_id INTEGER PRIMARY KEY AUTOINCREMENT, location TEXT NOT NULL, date TEXT NOT NULL, title TEXT NOT NULL, price INTEGER NOT NULL, image_src TEXT NOT NULL, remaining_seats NUMBER NOT NULL, description text NOT NULL, picture_id INTEGER, FOREIGN KEY(picture_id) REFERENCES Pictures(picture_id));`);
   
      await db.run(`CREATE TABLE Registrations (registration_id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT, age INTEGER, email TEXT UNIQUE, address TEXT, event_id Integer, mobile TEXT UNIQUE, FOREIGN KEY(event_id) REFERENCES Events(event_id));`);
   
      await db.run(`CREATE TABLE Pictures (picture_id INTEGER PRIMARY KEY AUTOINCREMENT, event_id INTEGER, type_id INTEGER, name TEXT, FOREIGN KEY(event_id) REFERENCES Events(event_id), FOREIGN KEY(type_id) REFERENCES pictures_types(type_id));`);
   
      await db.run(`CREATE TABLE pictures_types (type_id INTEGER PRIMARY KEY AUTOINCREMENT, type_name TEXT);`);
   }


   const getRegistrations = async () => {
      let query = `SELECT * FROM registrations`;
      let result = await db.all(query);
      return result;
   }

   const getEvents = async () => {
      let query = `SELECT * FROM Events`;
      let result = await db.all(query);
      return result;
   }

   const createEvent = async (props) => {
      const {id, location, date, title, price, image_src, remaining_seats, description} = props;
      let query = `INSERT INTO 
         Events(event_id, location, date, title, price, image_src, remaining_seats, description)
         VALUES(${id}, '${location}', '${date}', '${title}', ${price}, '${image_src}', ${remaining_seats}, '${description}');`
      
      let result = await db.run(query, (err) => {
         if (err) throw err;
         console.log('Event Created Successfully!');
      })

      return result;
   }
   
   const createRegistration = async (props) => {
      const {id, name, age, mobile, email, event_id, address} = props;
      let query = `INSERT INTO 
         Registrations (registration_id, full_name, age, email, address, event_id, mobile)
         VALUES('${id}', '${name}', '${age}', '${email}', '${address}', '${event_id}', '${mobile}');`
      
      let result = await db.run(query, (err) => {
         if (err) throw err;
         console.log('Event Created Successfully!');
      })

      return result;
   }

   const controller = {
      getEvents,
      createEvent,
      getRegistrations,
      createRegistration

   }

   return controller;

}

export default initializedb;


import sqlite from 'sqlite'
import SQL from 'sql-template-strings';  
  /**
   * Create the table
//    **/ 
const initializeDatabase = async () => {
  const db = await sqlite.open('./meshwar.sqlite');

  const getEvents = async () => {
    let stmt = "SELECT * FROM Events ORDER BY date";
    try {
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error("Events are empty!");
      }
      return rows
    } catch(err) {
      throw new Error("Could not retrieve list of events");
    }
  }

  const getEventById = async id =>{
    let stmt = `SELECT * FROM Events WHERE event_id=${id} ORDER BY date`;
    try {
      const rows = await db.all(stmt);
      if(rows.length == 0) {
        throw new Error("Events are empty")
      }
      return rows
    }catch(err) {
      throw new Error("could not retrieve list of events")
    }
  }

  const deleteEvent = async id => {
    let stmt = `Delete from Events where event_id=${id}`
    try {
      const result = await db.run(stmt);
      if(result.stmt.changes == 0) {
        throw new Error(`Events with id ${id} dosn't exist`)
      }
      return true;
    }catch(err) {
      throw new Error(`Could not delete event with id ${id}` + err)
    }
  }
  
  const updateEvent = async (id, props) => {
    const {title, price, remaining_seats, location, date, description, image_src} = props;
    const keyList = ["title", "price", "remaining_seats", "location", "date", "description", "image_src"];
    let seperator = ","
    if(!props && !(title && price && remaining_seats && location && date && description && image_src)){
      throw new Error(`You must provide something`)
    }
    let stmt = `Update Events Set `
    Object.keys(props).map(key => {
      if(keyList.includes(key)){
        stmt += `${key}="${props[key]}"${seperator}`
      }
    })
    stmt = stmt.split("")
    stmt.pop();
    stmt = stmt.join("")
    stmt+= ` WHERE even t_id=${id}`
    console.log("stmt", stmt)
    try {
      const result = await db.run(stmt);
      if(result.stmt.changes == 0){
        throw new Error(`event with ${id} does not exist`)
      }
      return true;
    }catch(err){
      throw new Error(`did not update event with id ${id}`)
    }
  };

  const createImage = async (props) => {
    let stmt = `Insert into Pictures (name) values ('${req}')`
    if(req.file == undefined){
      throw new Error(`You must provide an image`);
    }
    try{
      const result = await db.run(stmt)
      return result
    }catch(err){
      throw new Error("this type doesn't work")
    }
  }

  const controller= {
    getEvents,
    getEventById,
    deleteEvent,
    updateEvent,
    createImage
  }

  return controller
}

export default initializeDatabase;








// const test = async () => {
//    const db = await sqlite.open('./meshwar.sqlite');

//    await db.run(`CREATE TABLE Events (event_id INTEGER PRIMARY KEY AUTOINCREMENT, location TEXT NOT NULL, date TEXT NOT NULL, title TEXT NOT NULL, price INTEGER NOT NULL, image_src TEXT NOT NULL, remaining_seats NUMBER NOT NULL, description text NOT NULL, picture_id INTEGER, FOREIGN KEY(picture_id) REFERENCES Pictures(picture_id));`);

//    await db.run(`CREATE TABLE Registrations (registration_id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT, age INTEGER, email TEXT UNIQUE, address TEXT, event_id Integer, mobile TEXT UNIQUE, FOREIGN KEY(event_id) REFERENCES Events(event_id));`);

//    await db.run(`CREATE TABLE Pictures (picture_id INTEGER PRIMARY KEY AUTOINCREMENT, event_id INTEGER, type_id INTEGER, name TEXT, FOREIGN KEY(event_id) REFERENCES Events(event_id), FOREIGN KEY(type_id) REFERENCES pictures_types(type_id));`);

//    await db.run(`CREATE TABLE pictures_types (type_id INTEGER PRIMARY KEY AUTOINCREMENT, type_name TEXT);`);
// }

// export default {test};

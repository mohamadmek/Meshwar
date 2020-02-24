import sqlite from 'sqlite'
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
    } catch (err) {
      throw new Error("Could not retrieve list of events");
    }
  }

  const getEventById = async id => {
    let stmt = `SELECT * FROM Events WHERE event_id=${id} ORDER BY date`;
    try {
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error("Events are empty")
      }
      return rows
    } catch (err) {
      throw new Error("could not retrieve list of events")
    }
  }

  const createEvent = async (props) => {
    const { location, date, title, price, img_src, remaining_seats, description } = props;
    let query = `INSERT INTO 
       Events( location, date, title, price, image_src, remaining_seats, description)
       VALUES('${location}', '${date}', '${title}', ${price}, '${img_src}', ${remaining_seats}, '${description}');`

    try {
      // console.log(query)
      let result = await db.run(query)
      console.log(result.stmt);
      if (result.stmt.changes == 0) {
        throw new Error("something missing")
      } else {
        console.log('hello')
        let lastID = result.stmt.lastID;
        let stmt = `INSERT INTO Pictures(event_id, type_id, name) VALUES(${lastID}, 2, '${img_src}')`
        let res2 = await db.run(stmt)
        console.log(res.stmt)
      }
    } catch (err) {
      throw new Error("could not add event")
    }
  }
  const deleteEvent = async id => {
    let stmt1 = `Delete from Pictures where event_id=${id}`
    let stmt2 = `Delete from Events where event_id=${id}`
    try {
      const result = await db.run(stmt2);
      if (result.stmt.changes == 0) {
        throw new Error(`Events with id ${id} dosn't exist`)
      }
      else {
        const result2 = await db.run(stmt2);
      }

    } catch (err) {
      throw new Error(`Could not delete event with id ${id}` + err)
    }
  }

  const updateEvent = async (id, props) => {
    const { title, price, remaining_seats, location, date, description, image_src } = props;
    const keyList = ["title", "price", "remaining_seats", "location", "date", "description", "image_src"];
    let seperator = ","
    if (!props && !(title && price && remaining_seats && location && date && description && image_src)) {
      throw new Error(`You must provide something`)
    }
    let stmt = `Update Events Set `
    Object.keys(props).map(key => {
      if (keyList.includes(key)) {
        stmt += `${key}="${props[key]}"${seperator}`
      }
    })


    stmt = stmt.split("")
    stmt.pop();
    stmt = stmt.join("")
    stmt += ` WHERE event_id=${id}`
    console.log("stmt", stmt)
    try {
      const result = await db.run(stmt);
      if (result.stmt.changes == 0) {
        throw new Error(`event with ${id} does not exist`)
      }
      return true;
    } catch (err) {
      throw new Error(`did not update event with id ${id}`)
    }
  };


  const updateImage = async (id, image_src) => {
    let stmt = `
      UPDATE Events,
      SET image_src = ${image_src},
      WHERE event_id = ${id};
    `
    try {
      const result = await db.run(stmt);
      if (result.stmt.changes == 0) {
        throw new Error(`Event with id ${id} does not exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`did not update event with id ${id}`);
    }
  }


  const createImage = async (req) => {
    let stmt = `Insert into Pictures (type_id, name) values (1,'${req}')`
    try {
      const result = await db.run(stmt)
      if (result.stmt.changes == 0) {
        throw new Error("you must provide somethind")
      }
      return true;
    } catch (err) {
      throw new Error("this type doesn't work")
    }
  }
  const getImages = async () => {
    let stmt = `Select name from Pictures where type_id=1`
    try {
      const result = await db.all(stmt)
      if (result.length == 0) {
        throw new Error("image not found")
      }
      return result
    } catch (err) {
      throw new Error("image crashed")
    }
  }
  const deleteImage = async (id) => {
    let stmt = `Delete from Pictures where picture_id=${id}`
    try {
      const result = await db.run(stmt)
      if (result.stmt.changes == 0) {
        throw new Error(`Image with id: ${id} doesn't exist`)
      }
      return true
    } catch (err) {
      throw new Error(`did not delete event with id:${id}`)
    }
  }

  const deleteRegistration = async (id, event_id) => {
    let stmt1 = `DELETE FROM Registrations WHERE registration_id=${id}`;
    let stmt2 = `UPDATE Events SET remaining_seats = remaining_seats + 1 WHERE event_id = ${event_id}`
    try {
      let result = await db.run(stmt1);
      console.log(stmt1)
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`Registration with id: ${id} doesn't exist`);
      } else {
        let result2 = await db.run(stmt2);
        console.log(stmt2);
      }
      return true
    } catch (err) {
      throw new Error(`Did not delete registration with id:${id}`);
    }
  }

  const getRegistrations = async () => {
    try {
      let query = `SELECT * FROM registrations`;
      let result = await db.all(query);
      return result;
    } catch (err) {
      throw new Error(`Could not load registrations`);
    }
  }

  const createRegistration = async (props) => {
    const { name, age, mobile, email, event_id, address } = props;
    let query1 = `INSERT INTO 
       Registrations ( full_name, age, email, address, event_id, mobile)
       VALUES( '${name}', '${age}', '${email}', '${address}', '${event_id}', '${mobile}')`;
    let query2 = `UPDATE Events SET remaining_seats = remaining_seats - 1 WHERE event_id = ${event_id}`;
    console.log(query2)
    try {
      let result = await db.run(query1);
      if (result.stmt.changes == 0) {
        throw new Error('Could not add registration')
      } else {
        let result2 = await db.run(query2);
        console.log(result2);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }


  const controller = {
    getEvents,
    getEventById,
    deleteEvent,
    updateEvent,
    createImage,
    getImages,
    deleteImage,
    createEvent,
    getRegistrations,
    createRegistration,
    updateImage,
    deleteRegistration
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



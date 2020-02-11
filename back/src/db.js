import sqlite from 'sqlite'
import SQL from 'sql-template-strings';


  
  /**
   * Create the table
   **/ 
const initializeDatabase = () => {
  const db = await sqlite.open('./db.sqlite');

  const getEvents = async () => {
     const rows = await meshwar.all("SELECT event_id, title, price, available_seats, location, date, description, image_src");
     return rows
  }

  const controller= {
    getEvents
  }

  return controller
}




export default initializeDatabase;
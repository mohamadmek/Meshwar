import app from './app'
import initializeDatabase from './db';

const start = async() => {
  const controller = await initializeDatabase();
  app.get('/', (req, res)=>{
    res.json({message:"Hello"});
  });
}
app.listen(8080, () => console.log('server listening on port 8080'))

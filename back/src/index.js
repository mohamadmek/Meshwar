import app, { upload } from './app'
import initializeDatabase from './db';
import { response } from 'express';
import path from 'path';
const multer = require('multer');
const start = async() => {
  const controller = await initializeDatabase();

  app.get('/', async (req, res)=>{
     const result = await controller.getEvents();
    res.json(result);    
  });

  app.get('/events', async (req, res)=>{
    const result = await controller.getEvents();
   res.json(result);    
 });

  app.get('/events/update/:id', async(req, res) =>{
    const{id} = req.params;
    let event = req.query;  
    const result = await controller.updateEvent(id, event);
    res.json(result)
  })
  
  app.get('/events/delete/:id', async(req, res) =>{
    const {id} = req.params;
    const result = await controller.deleteEvent(id)
    res.json(result)
  });

  app.get('/events/:id', async(req, res) => {
    const id = req.params.id;
    const result = await controller.getEventById(id);
    res.json(result)
  })

//storage
const storage = multer.diskStorage({
 destination:path.join(__dirname, '../public/images'),
 filename: function(req,file,cb) {
   cb(null,Date.now()+file.originalname)
 } 
})
//to get just images not other files
const fileFilter = (req, file,cb) => {
  //reject a file: cb(null, false)
  //accpet a file: cb(null, true)
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif'){
   return cb(null, true)
  } else {
   return cb(null, false)
  }
};
//to upload it
const upload = multer({
  storage: storage,
  limits: {fileSize: 100000},
  fileFilter: fileFilter
})

  app.post('/upload', upload.single("images"), (req, res) => {
    // upload(req,res, (err) => {
    //   if(err){
    //     res.send("error")
    //   } else {
    //     if(req.file == undefined) {
    //       res.send("no file selected")
    //     } else {
    //       res.send("file uploaded")
    //       file: `/${req.file.filename}`
    //     }
    //   }
    // })
    //const result = controller.createImage(req.file.filename);
    res.json(result)
    console.log("file", req.file)
    console.log("meme", req.file.mimetype)
  })
}


app.listen(8081, () => console.log('server listening on port 8080'))
start();

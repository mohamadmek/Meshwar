import app, { upload } from './app'
import initializeDatabase from './db';
import { response } from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
const multer = require('multer');
const start = async() => {
  const controller = await initializeDatabase();

  app.get('/', async (req, res)=>{
     const result = await controller.getEvents();
    res.json(result);    
  });
  
    app.get('/home', async (req, res) => {
	const result = await controller.getEvents();
	res.json(result);
    })

  app.get('/events', async (req, res)=>{
    const result = await controller.getEvents();
    res.json(result)
 });

  app.get('/events/:id', async(req, res) => {
    const id = req.params.id;
    const result = await controller.getEventById(id);
    res.json(result)
  })
  app.post('/events', async (req, res) => {
    console.log(req.body);
    let {id, location, date, title, price, img_src, remaining_seats, description} = req.body;
    let result = await controller.createEvent({id, location, date, title, price, img_src, remaining_seats, description});
    res.json(result)
})
  app.delete('/events/:id', async(req, res) =>{
    const {id} = req.params;
    const result = await controller.deleteEvent(id)
    res.json(result)
  });
  app.put('/events/:id', async(req, res) =>{
    const{id} = req.params;
    let event = req.query;  
    const result = await controller.updateEvent(id, event);
    res.json(result)
  })

//storage
const storage = multer.diskStorage({
 destination:path.join(__dirname, '../public/images'),
 filename: function(req, file, cb) {
   cb(null,Date.now()+file.originalname)
 } 
})
//to get just images not other files
const fileFilter = (req, file, cb) => {
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
  limits: {fileSize: 1000000},
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
    const result = controller.createImage(req.file.filename);
    res.json(result)
  })
                           
  app.delete('/images/:id', async(req, res) => {
    const id = req.params.id;
    const result = await controller.deleteImage(id)
    res.json(result)
  })


  app.post('/contact', async(req, res) => {
	let data = req.body;	
	let output = `
	<p>Contact is trying to reach you</p>
	<h3>Contact Details</h3>
	<ul>
	    <li>Name: ${data.name}</li>
	    <li>Email: ${data.email}</li>
	    <li>Address: ${data.address}</li>
	    <li>Mobile: ${data.mobile}</li>
	    <li>Message: ${data.message}</li>
	</ul>
	`;
	let transporter = nodemailer.createTransport({
	      service: 'gmail',
	    auth: {
	    user: 'maggiepowerpuffgirl@gmail.com', // generated ethereal user
	    pass: 'P@ssword123_'// geerated ethereal password
	    }
	});
  
	let info = await transporter.sendMail({
		from: 'haddadanthony06@gmail.com', // sender address
		to: "maggiepowerpuffgirl@gmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: output // html body
	      
	});
  
      console.log("Message sent: %s", info.messageId);
      })
  
      
      app.get('/events/registrations', async (req, res) => {
          let result = await controller.getRegistrations();
          res.json(result);
      })
     
      app.post('/events/addRegistration', async (req, res) => {
          let { id, name, age, mobile, email, event_id, address } = req.body;
          console.log(req.query);
          let result = await controller.createRegistration({id, name, age, mobile, email, event_id, address});
          res.json(result);
      })
}


app.listen(8080, () => console.log('server listening on port 8080'))
start();

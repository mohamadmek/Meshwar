import app from './app'
import initializedb from './db';
import nodemailer from 'nodemailer';

const start = async () => {
    const controller = await initializedb();
   
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

    app.get('/events', async (req, res) => {
        let result = await controller.getEvents();
        res.json(result);
    })

    app.post('/events', async (req, res) => {
        console.log(req.body);
        let {id, location, date, title, price, img_src, remaining_seats, description} = req.body;
        let result = await controller.createEvent({id, location, date, title, price, img_src, remaining_seats, description});
        res.json(result)
    })
}

start();

app.listen(8080, () => console.log('server listening on port 8080'))

import app from './app';
import bcrypt from 'bcryptjs';
const router = require('express').Router();
import initializeDatabase from './db';
import { registerValidation, loginValidation } from './validation';


const start = async () => {
    const controller = await initializeDatabase();
    router.post('/register', async (req, res) => {
        // Validate Inputs
        const {error} = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

       // Hash the password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        
        try {
            let props = req.body;
            let result = await controller.register(props);
            console.log(result)
            res.json({ success: true, result })
        } catch (err) {
           // throw new Error(err.message);
           res.status(500).send(err.message)
        }
    })

    router.post('/login', async(req, res) => {
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        // Check if email exists
        try {
            const props = req.body;
            const result = await controller.validateLogin(props);
            res.header('auth-token', result).send(result);
        } catch(err) {
            res.status(500).send(err.message);
        }
    })

}



start();
module.exports = router;
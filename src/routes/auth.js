import express from 'express';
import User from '../models/User';

const router = express.Router();
router.post('/', (req, res) => {
    const { credentials } = req.body;
    console.log("connected");
    User.findOne({ email: credentials.email }).then(user => {
         if (user) {

         } else {
            res.status(400).json( {errors: { global: "Invalid Credentials" }});
        }
    });
});

export default router;
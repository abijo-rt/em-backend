const express = require('express');

const dotenv = require('dotenv');
const app = express();
const commonMiddleware = require('./middleware/commonMid')
dotenv.config();
const PORT = process.env.PORT;
const newUserRoute = require('./routes/newUser')
const connectDB=require('./db')

commonMiddleware(app);

// app.use('/user', require('./routes/userauth'))
app.use('/newUser', newUserRoute);

connectDB()



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})






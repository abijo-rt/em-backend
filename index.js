const express = require('express');

const dotenv = require('dotenv');
const app = express();
const commonMiddleware = require('./middleware/commonMid')
dotenv.config();
const PORT = process.env.PORT;
const userRoute = require('./routes/user')
const vendorRoute = require('./routes/vendor')
const connectDB = require('./db')



// const upload = require('./multer')

// app.post('/vendor/upload', (req, res, next) => {
//   console.log('Request Headers:', req.headers);
//   next();
// },
//   upload.single('file'), (req, res) => {
//     try
//     {
//       console.log('Uploaded File Details:', req.file);  // Log the uploaded file details

//       if (!req.file)
//       {
//         return res.status(400).send('No file uploaded.');
//       }

//       res.send({
//         message: 'File uploaded successfully',
//         file: req.file,
//       });
//     } catch (error)
//     {
//       console.error('File upload error:', error);
//       res.status(500).send('Internal server error during file upload.');
//     }
//   });


// commonMiddleware(app);
app.use('/user', userRoute);
app.use('/vendor', vendorRoute);

connectDB()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})






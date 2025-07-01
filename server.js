const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

const studentRoute = require('./routes/studentRoute')
const mainRoute = require('./routes/mainRoute')

  
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/student', studentRoute)
app.use('/jsons', mainRoute)


app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
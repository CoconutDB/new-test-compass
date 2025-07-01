const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

const studentRoute = require('./routes/studentRoute')

  
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/student', studentRoute)

app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
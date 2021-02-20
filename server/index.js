const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./config/db');

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req,res) => res.send('INDEX'));

//cars routes
app.use('/cars', require('./routes/cars'));

app.listen(5000, () => {
    console.log('Server has started');
});
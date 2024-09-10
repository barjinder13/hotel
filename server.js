const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

require('dotenv').config();



app.get('/', function (req, res) {
    res.send('welcome to my hotel,. how i can help you?, we have list of menus')
})
// post route to add a staff

const staffRoutes = require('./routes/staffRoutes');
app.use('/staff',staffRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menuItem',menuItemRoutes);

const menunewRouter = require('./routes/menunewRoutes');
app.use('/menunew',menunewRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port 3000');
})
const express = require('express');
const dotenv = require('dotenv');

//---------------------------------ROUTES---------------------------------
const restaurantRouter = require('./src/api/routes/restaurant.routes');

dotenv.config();
const {connect} = require('./src/utils/db');
const {urlencoded} = require('express');
const PORT = process.env.PORT;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/restaurants', restaurantRouter);

// app.use('/jugadores', jugadoresRouter)
// app.use('/equipos', equiposRouter)
// app.use('/usuarios', usuariosRouter)
app.listen(5000, () => console.log('listening on port', PORT));
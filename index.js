const express = require('express');
const dotenv = require('dotenv');

//---------------------------------ROUTES---------------------------------
const restaurantRouter = require('./src/api/routes/restaurant.routes');
const chefRouter = require('./src/api/routes/chef.routes');
const userRouter = require('./src/api/routes/user.routes');


dotenv.config();
const {connect} = require('./src/utils/db');
const PORT = process.env.PORT;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/restaurants', restaurantRouter);
app.use('/chefs', chefRouter)
app.use('/users', userRouter)

app.listen(5000, () => console.log('listening on port', PORT));
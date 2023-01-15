const express = require('express');
const {
    getRestaurants,
    getRestaurantById,
    postRestaurant,
    postRestaurants,
    putRestaurant,
    deleteRestaurant,
} = require('../controllers/restaurant.controllers');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

deleteRestaurant

//metodos GET
router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);

//metodos POST
router.post('/',[isAuth], postRestaurant);
router.post('/insertMany',[isAuth], postRestaurants);

//metodos PUT
router.put('/:id',[isAuth], putRestaurant);

//metodos DELETE
router.delete('/:id',[isAuth], deleteRestaurant);


//---------------------------------OUTPUT---------------------------------
module.exports = router;



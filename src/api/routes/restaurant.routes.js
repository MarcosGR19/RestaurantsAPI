const express = require('express');
const {
    getRestaurants,
    getRestaurantById,
    postRestaurant,
    postRestaurants,
    putRestaurant,
    deleteRestaurant,
} = require('../controllers/restaurant.controllers')

//---------------------------------INPUT---------------------------------
const router = express.Router();

deleteRestaurant

//metodos GET
router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);

//metodos POST
router.post('/', postRestaurant);
router.post('/insertMany', postRestaurants);

//metodos PUT
router.put('/:id', putRestaurant);

//metodos DELETE
router.delete('/:id', deleteRestaurant);


//---------------------------------OUTPUT---------------------------------
module.exports = router;



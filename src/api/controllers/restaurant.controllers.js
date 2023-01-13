const Restaurant = require('../models/restaurant.model');
//---------------------------------INPUT---------------------------------

const getRestaurants = async(req, res) => {
    try {        
        const allRestaurants = await Restaurant.find();
        // const allRestaurantsMap = allRestaurants.map((item)=> {return {
        //     _id: item._id,
        //     name: item.name,
        //     city: item.city,
        //     foundationYear: item.foundationYear,
        //     restaurantType: item.restaurantType,
        //     chefs: item.chefs
        // }});
        // const allRestaurantsMap = allRestaurants.map(({name,city})=> ({name,city}));
        res.status(200).json(allRestaurants);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getRestaurantById = async(req, res) => {
    try {
        const {id} = req.params;
        const myRestaurant = await Restaurant.findById(id).populate('chefs');
        return res.status(200).json(myRestaurant)
    } catch (error) {
        return res.status(500).json(error);
    }

};

const postRestaurant = async (req,res) => {
    try {
        const {name,city,foundationYear,restaurantType,chefs} = req.body;
        const newRestaurant = new Restaurant({name,city,foundationYear,restaurantType,chefs});
        const inserted = await newRestaurant.save();
        res.status(201).json(inserted)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postRestaurants = async (req,res) => {
    try {
        const restaurants = req.body;
        // const restaurantsObjectList = restaurants.map((item)=> {
        //     const restaurantObj = new Restaurant(item);
        //     return restaurantObj;
        // });
        const inserted = await Restaurant.insertMany(restaurants);
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putRestaurant = async(req, res) => {
    try {
        const {id} = req.params;
        const putNewRestaurant = new Restaurant(req.body);
        putNewRestaurant._id = id;
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, putNewRestaurant, {new: true});
        return res.status(200).json(updatedRestaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteRestaurant = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        return res.status(200).json(deletedRestaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
};


//---------------------------------OUTPUT---------------------------------
module.exports = {
    getRestaurants,
    getRestaurantById,
    postRestaurant,
    putRestaurant,
    deleteRestaurant,
    postRestaurants
}

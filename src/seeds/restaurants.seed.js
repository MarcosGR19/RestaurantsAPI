const mongoose = require('mongoose');//Para conectarse a la DB
const Restaurant = require('../api/models/restaurant.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const restaurants = [
    {
        "_id": "63c15d4f095013598d8840ba",
        "name": "Xi Xao",
        "city": "Bilbao",
        "foundationYear": 1999,
        "restaurantType": "Assian",
        "chefs": [
            "63c17fe00fc41a6e4adbe580"
        ]
    },
    {
        "_id": "63c15d4f095013598d8840bb",
        "name": "Joe Restaurant",
        "city": "Madrid",
        "foundationYear": 2008,
        "restaurantType": "American",
        "chefs": [
            "63c17fe00fc41a6e4adbe581"
        ]
    },
    {
        "_id": "63c15d4f095013598d8840bc",
        "name": "Etxeko",
        "city": "Madrid",
        "foundationYear": 1958,
        "restaurantType": "Spanish",
        "chefs": [
            "63c17fe00fc41a6e4adbe583"
        ]
    },
    {
        "_id": "63c15d4f095013598d8840bd",
        "name": "Xi Xao New",
        "city": "Madrid",
        "foundationYear": 2010,
        "restaurantType": "Assian",
        "chefs": [
            "63c17fe00fc41a6e4adbe580",
            "63c17fe00fc41a6e4adbe584",
            "63c17fe00fc41a6e4adbe586"
        ]
    },
    {
        "_id": "63c15d4f095013598d8840be",
        "name": "Papa Jonhs",
        "city": "Barcelona",
        "foundationYear": 1994,
        "restaurantType": "Italian",
        "chefs": []
    },
    {
        "_id": "63c15dcfe4ed4f8d82289fb0",
        "name": "Mac donnald",
        "city": "Madrid",
        "foundationYear": 1928,
        "restaurantType": "American",
        "chefs": []
    },
    {
        "_id": "63c15dcfe4ed4f8d82289fb1",
        "name": "Burger",
        "city": "Barcelona",
        "foundationYear": 2002,
        "restaurantType": "American",
        "chefs": [
            "63c17fe00fc41a6e4adbe582",
            "63c17fe00fc41a6e4adbe585"
        ]
    },
    {
        "_id": "63c15dcfe4ed4f8d82289fb2",
        "name": "Vigotti",
        "city": "Bilbao",
        "foundationYear": 1986,
        "restaurantType": "Italian",
        "chefs": [
            "63c17fe00fc41a6e4adbe589",
            "63c17fe00fc41a6e4adbe58a"
        ]
    },
    {
        "_id": "63c15dcfe4ed4f8d82289fb3",
        "name": "Totilla Forever",
        "city": "Sevilla",
        "foundationYear": 2002,
        "restaurantType": "Spanish",
        "chefs": [
            "63c17fe00fc41a6e4adbe587",
            "63c17fe00fc41a6e4adbe588",
            "63c17fe00fc41a6e4adbe585"
        ]
    },
    {
        "_id": "63c15dcfe4ed4f8d82289fb4",
        "name": "Rico Taco",
        "city": "Valencia",
        "foundationYear": 1956,
        "restaurantType": "Mexican",
        "chefs": [
            "63c17fe00fc41a6e4adbe585",
            "63c17fe00fc41a6e4adbe588"
        ]
    },
    {
        "_id": "63c15e3d61d6991d4855f9d1",
        "name": "Jamburguer",
        "city": "Sevilla",
        "foundationYear": 1956,
        "restaurantType": "American",
        "chefs": [
            "63c17fe00fc41a6e4adbe58a"
        ]
    },
    {
        "_id": "63c15e3d61d6991d4855f9d2",
        "name": "Arigato",
        "city": "Bilbao",
        "foundationYear": 1787,
        "restaurantType": "Assian",
        "chefs": [
            "63c17fe00fc41a6e4adbe582",
            "63c17fe00fc41a6e4adbe585"
        ]
    },
    {
        "_id": "63c15e3d61d6991d4855f9d3",
        "name": "andaleeee",
        "city": "Madrid",
        "foundationYear": 1999,
        "restaurantType": "Mexican",
        "chefs": [
            "63c17fe00fc41a6e4adbe583",
            "63c17fe00fc41a6e4adbe586"
        ]

    },
    {
        "_id": "63c15e61293118a50be7de83",
        "name": "Jamburguer",
        "city": "Sevilla",
        "foundationYear": 1956,
        "restaurantType": "American",
        "chefs": [
            "63c17fe00fc41a6e4adbe58a",
            "63c17fe00fc41a6e4adbe589"
        ]
    }
];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allRestaurants = await Restaurant.find();
    if(allRestaurants.length > 0) {
        await Restaurant.collection.drop();
        console.log(`All restaurants were deleted from <${Restaurant.db.name}.${Restaurant.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting restaurants: ", error))
.then(async () => {
    const restaurantsMap = restaurants.map((item) => new Restaurant(item));
    await Restaurant.insertMany(restaurantsMap);
    console.log(`All restaurants were created in <${Restaurant.db.name}.${Restaurant.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating restaurants: ", error))
.finally(() => mongoose.disconnect());
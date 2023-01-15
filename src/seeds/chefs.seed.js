const mongoose = require('mongoose');//Para conectarse a la DB
const Chef = require('../api/models/chef.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const chefs = [
{
    "_id": "63c17fe00fc41a6e4adbe580",
    "name": "Xi Xao",
    "nationality": "Kenia",
    "michelinStars": 3
},
{
    "_id": "63c17fe00fc41a6e4adbe581",
    "name": "Big Joe",
    "nationality": "USA",
    "michelinStars": 2
},
{
    "_id": "63c17fe00fc41a6e4adbe582",
    "name": "Angel",
    "nationality": "Espana",
    "michelinStars": 3
},
{
    "_id": "63c17fe00fc41a6e4adbe583",
    "name": "Martin Berasategui",
    "nationality": "Espana",
    "michelinStars": 0
},
{
    "_id": "63c17fe00fc41a6e4adbe584",
    "name": "Xi Xao Jr",
    "nationality": "Chinese",
    "michelinStars": 0
},
{
    "_id": "63c17fe00fc41a6e4adbe585",
    "name": "Jose",
    "nationality": "Espana",
    "michelinStars": 4
},
{
    "_id": "63c17fe00fc41a6e4adbe586",
    "name": "Lee Sin",
    "nationality": "Japan",
    "michelinStars": 0
},
{
    "_id": "63c17fe00fc41a6e4adbe587",
    "name": "Sergio",
    "nationality": "Marruecos",
    "michelinStars": 2
},
{
    "_id": "63c17fe00fc41a6e4adbe588",
    "name": "Pitel",
    "nationality": "Espana",
    "michelinStars": 7
},
{
    "_id": "63c17fe00fc41a6e4adbe589",
    "name": "Lotti",
    "nationality": "Italia",
    "michelinStars": 4
},
{
    "_id": "63c17fe00fc41a6e4adbe58a",
    "name": "Angelinano",
    "nationality": "Argentina",
    "michelinStars": 2
},
{
    "_id": "63c1835453def7ccf65e0906",
    "name": "Manin",
    "nationality": "Kenia",
    "michelinStars": 0
}
];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allChefs = await Chef.find();
    if(allChefs.length > 0) {
        await Chef.collection.drop();
        console.log(`All chefs were deleted from <${Chef.db.name}.${Chef.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting chefs: ", error))
.then(async () => {
    const chefsMap = chefs.map((item) => new Chef(item));
    await Chef.insertMany(chefsMap);
    console.log(`All chefs were created in <${Chef.db.name}.${Chef.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating chefs: ", error))
.finally(() => mongoose.disconnect());
const mongoose = require('mongoose');//Para conectarse a la DB
const Movie = require('../api/models/movies.model');//Para crear objeto de DB
const dotenv = require('dotenv');//Para conectarse DB
dotenv.config();
//---------------------------------INPUT---------------------------------

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
];

mongoose.set("strictQuery", false);

//Connecto to DB
mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0) {
        await Movie.collection.drop();
        console.log(`All movies were deleted from <${Movie.db.name}.${Movie.collection.name}>`);
    }
}).catch((error) => console.log("Error occurred while deleting movies: ", error))
.then(async () => {
    const moviesMap = movies.map((item) => new Movie(item));
    await Movie.insertMany(moviesMap);
    console.log(`All movies were created in <${Movie.db.name}.${Movie.collection.name}>`);
})
.catch((error) => console.log("Error occurred while creating movies: ", error))
.finally(() => mongoose.disconnect());
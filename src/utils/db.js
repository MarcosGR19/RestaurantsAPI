const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Iniciar dotenv
dotenv.config();
//---------------------------------INPUT---------------------------------

const connect = async () => {
    try {
        mongoose.set('strictQuery', false); //Para evitar aviso
        const DB = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        //INFO
        const {name, host} = DB.connection;
        console.log(`Connected to DB "${name}" in host "${host}"`);
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`);
    }
}

//---------------------------------OUTPUT---------------------------------
module.exports = {connect};

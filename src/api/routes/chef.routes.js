const express = require('express');
const {
    getChefs,
    getChefById,
    postChef,
    postChefs,
    putChef,
    deleteChef,
} = require('../controllers/chef.controller')

//---------------------------------INPUT---------------------------------

const router = express.Router();

//metodos GET
router.get('/', getChefs);
router.get('/:id', getChefById);

//metodos POST
router.post('/', postChef);
router.post('/insertMany', postChefs);

//metodos PUT
router.put('/:id', putChef);

//metodos DELETE
router.delete('/:id', deleteChef);

//---------------------------------OUTPUT---------------------------------
module.exports = router;

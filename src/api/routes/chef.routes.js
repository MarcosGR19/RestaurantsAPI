const express = require('express');
const {
    getChefs,
    getChefById,
    postChef,
    postChefs,
    putChef,
    deleteChef,
} = require('../controllers/chef.controller')

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------

const router = express.Router();

//metodos GET
router.get('/', getChefs);
router.get('/:id', getChefById);

//metodos POST
router.post('/',[isAuth], postChef);
router.post('/insertMany',[isAuth], postChefs);

//metodos PUT
router.put('/:id',[isAuth], putChef);

//metodos DELETE
router.delete('/:id',[isAuth], deleteChef);

//---------------------------------OUTPUT---------------------------------
module.exports = router;

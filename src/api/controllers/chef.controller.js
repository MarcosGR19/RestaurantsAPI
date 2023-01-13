const Chef = require('../models/chef.model');

//---------------------------------INPUT---------------------------------

const getChefs = async(req,res,next) => {
    try {
        const {id} = req.query;
        
        const allChefs = await Chef.find();
        const allChefsMap = allChefs.map((item)=> {return {
            _id: item._id,
            name: item.name,
            nationality: item.nationality,
            michelinStars: item.michelinStars
        }});
        res.status(200).json(allChefsMap);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getChefById = async(req, res) => {
    try {
        const {id} = req.params;
        const myChef = await Chef.findById(id);
        return res.status(200).json(myChef)
    } catch (error) {
        return res.status(500).json(error);
    }

};

const postChef = async (req,res) => {
    try {
        const {name,nationality,michelinStars,dishes} = req.body;
        const newChef = new Chef({name,nationality,michelinStars,dishes});
        const inserted = await newChef.save();
        res.status(201).json(inserted)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postChefs = async (req,res) => {
    try {
        const chefs = req.body;
        // const chefsObjectList = chefs.map((item)=> {
        //     const chefObj = new Chef(item);
        //     return chefObj;
        // });
        const inserted = await Chef.insertMany(chefs);
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putChef = async(req, res) => {
    try {
        const {id} = req.params;
        const putNewChef = new Chef(req.body);
        putNewChef._id = id;
        const updatedChef = await Chef.findByIdAndUpdate(id, putNewChef, {new: true});
        return res.status(200).json(updatedChef);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteChef = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedChef = await Chef.findByIdAndDelete(id);
        return res.status(200).json(deletedChef);
    } catch (error) {
        return res.status(500).json(error);
    }
};


//---------------------------------OUTPUT---------------------------------
module.exports = {
    getChefs,
    getChefById,
    postChef,
    putChef,
    deleteChef,
    postChefs
}

const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body // Assuming the request body contains the menuItem data
        // craete the new menuItem document using the mongoose model
        const newmenuItem = new menuItem(data);
        //save the newmenuItem to the database
        const response = await newmenuItem.save();
        console.log('Data Saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})
router.get('/', async (req,res)=>{
    try{
        const data = await menuItem.find();
        console.log('Data Fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})
router.get('/:menuType', async (req,res)=>{
    try{
        const menuType=req.params.menuType
        if(menuType == 'sweet' || menuType == 'sour' || menuType == 'spicy'){
            const response= await menuItem.find({taste : menuType});
            console.log('Fetched response');
            res.status(200).json({response});
        }
        else{
            res.status(404).json({error : 'Invalid Menu Type'});   
          }

    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})
module.exports = router;
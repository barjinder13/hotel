const express = require('express');
const router = express.Router();
const menunew = require('./../models/menunew');

router.post('/', async (req,res)=>{
    try{
        const data = req.body;
        const newmenunew = new menunew(data);
        const response = await newmenunew.save();
        console.log('Data saved');
        res.status(200).json(response);
    }
    catch{
        console.log(err);
        res.status(500).json({error :'Internal Server Error'});
    }
})

router.get('/', async(req,res)=>{
    try{
        const data = await menunew.find();
        console.log('Data Fetched');
        res.status(200).json(data)
    }
    catch{
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})
router.get('/:menunewType', async (req,res)=>{
    try{
        const menunewType = req.params.menunewType
        if(menunewType =='sweet' || menunewType =='spicy' || menunewType=='sour'){
            const response = await menunew.find({taste:menunewType});
            console.log('Response Fetched');
            res.status(200).json({response});
        }
        else{
            
            res.status(404).json({error : 'Invalid menu Type'});
        }
    }
    catch{
        console.log(err);
        res.status(500).json({error :'Internal Server Error'});
    }
})

module.exports = router;
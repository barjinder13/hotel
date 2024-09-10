const express = require('express');
const router = express.Router();
const staff = require('./../models/staff');

router.post('/', async (req, res) => {
    try {
        const data = req.body // Assuming the request body contains the staff data
        // craete the new staff document using the mongoose model
        const newStaff = new staff(data);
        //save the newStaff to the database
        const response = await newStaff.save();
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
        const data = await staff.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})
router.get('/:workType', async (req,res)=>{
    try{
        const workType=req.params.workType // extract the work type from the URL parameter
        if( workType =='chef'  || workType == 'manager' || workType == 'waiter'){
            const response = await staff.find({work : workType});
            console.log('response Fetched');
            res.status(200).json({response});   
    }
        else{
            res.status(404).json({error : 'Invalid Work Type'});   
          }
}
catch(err){
    console.log(err);
    res.status(500).json({Error : 'Internal Server Error'});

}
})
// only for testing purpose
module.exports = router;

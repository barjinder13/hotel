const express = require('express');
const app = express();


app.get('/weather', (req, res)=>{
    const weatherData ={
        temperature : 35,
        condition :'sunny',
        city :'Jalandhar'
    };
    res.json(weatherData)
});
app.listen(3000,() =>{
    console.log(' port are running on 3000')
})
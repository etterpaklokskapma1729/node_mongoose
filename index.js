const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://127.0.0.1:27017/conFusion';
const connect = mongoose.connect(url);


connect.then((db)=>{
    mongoose.set('strictQuery', true);
    console.log('Connected successfully to server');
    
    var newDish = Dishes({
        name : 'Pizzer',
        desciption : 'test'
    });

    newDish.save()
    .then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec();    
    })
    .then((dishes)=>{
        console.log(dishes);

        return Dishes.deleteMany({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    });
});
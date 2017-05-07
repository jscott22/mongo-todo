/**
 * Created by jay on 5/7/17.
 */
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) {
       return console.log('Unable to connect to MongoDB server');
    }

     db.collection('Todos').findOneAndUpdate({
         _id: new ObjectID('590f24237a963fa03ab96309')
     }, {
        $set: {
            completed: true
        }
     }, {
        returnOriginal: false
     }).then((result) => {
         console.log(result);
     });

    // db.close();
});
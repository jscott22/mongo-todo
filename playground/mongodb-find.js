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

    // db.collection('Todos').find({
    //     _id: new ObjectID('590f158287a5b9054c82827f')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(('Unable to fetch tdos', err));
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});
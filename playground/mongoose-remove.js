const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user');
const { ObjectID } = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove().then((doc) => {

// });

Todo.findByIdAndRemove('59183289f59e150c7963a2ab').then((doc) => {
    console.log(doc);
});
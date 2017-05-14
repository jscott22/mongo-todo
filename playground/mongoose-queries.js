const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user');
const { ObjectID } = require('mongodb');

let id = '690f2e44cc8f6a92442b19c';

if (!ObjectID.isValid(id)) {
    console.log('User ID not valid');
}

User.find({
    _id: id
}).then((users) => {
    console.log('Users: ', users);
}).catch((e) => {
    console.log(e);
});

User.findOne({
    _id: id
}).then((user) => {
    console.log('User: ', user);
});

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User . ID not found');
    }

    console.log('User by ID: ', user);
});



// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// });
/**
 * Created by jay on 5/7/17.
 */
let express = require('express');
let bodyParser = require('body-parser');


let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
app.listen(3000, () => {
    console.log('Started on port 3000');
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

// let newTodo = new Todo({
//     text: 'Hug Oscar',
// });

let newUser = new User({

});

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });
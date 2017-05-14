/**
 * Created by jay on 5/7/17.
 */
let express = require('express');
let bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');
let { ObjectID } = require('mongodb');

let app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Started on port 3000');
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e)
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(400).send(
            JSON.stringify({
                reason: 'ID was not valid'
            })
        );
    }

    Todo.findById(id).then((todo) => {

        if (!todo) {
            return res.status(404).send(JSON.stringify({
                reason: 'Could not find a todo by that ID'
            }));
        }
        res.status(200).send({ todo });
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = { app };
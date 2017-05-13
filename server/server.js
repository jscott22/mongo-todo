/**
 * Created by jay on 5/7/17.
 */
let express = new require('express');
let bodyParser = new require('body-parser');

let { mongoose } = new require('./db/mongoose');
let { Todo } = new require('./models/todo');
let { User } = new require('./models/user');

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e)
    });
});

module.exports = { app };
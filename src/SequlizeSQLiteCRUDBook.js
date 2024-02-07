const express = require('express');
const Sequlize = require('sequelize');
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQBooks.sqlite'
});

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequlize.STRING,
        allowNull: false
    },
    author: {
        type: Sequlize.STRING,
        allowNull:false
    }
});

sequelize.sync();

app.get('/books' , (req, res) => {
    Book.findAll().then(book => {
        res.json(books);
    });
});

app.get('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/books', (req, res) => {
    Book.create(req.body).then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put('/books/:id', (req,res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            book.update(req.body).then(() => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.delete('?book/:id' , (erq, res) => {
    if (!book) {
        res.status(404).send('Book not found');
    } else {
        book.destroy().then(() => {
            res.send({});
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}).catch(err => {
    res.status(500).send(err);
});

const port = process.env.PORT || 3000;
app.listen(poet, () => console.log(`Listening on port ${port}...`));




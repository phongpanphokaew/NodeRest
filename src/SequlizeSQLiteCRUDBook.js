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

app.get('/')
'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));


const connection = mysql.createConnection({
    host: "172.23.34.132",
    user: "nodejs",
    password: "nodejs",
    database: "MemoApp"
});


app.get('/', (req, res) => {
    res.render('hello.ejs')
})

app.get('/index', (req, res) => {
    connection.query(
        "select * from memo",
        (error, results) => {
            if(error){
                res.render('index.ejs', {items :error});
            }
            res.render('index.ejs', {items :results});
        }
    );
});



const port = 3000;
app.listen(port);
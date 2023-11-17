'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.disable('x-powered-by')


const connection = mysql.createConnection({
    host: "172.23.34.132",
    user: "nodejs",
    password: "nodejs",
    database: "MemoApp"
});


app.route('/')
    .get((req, res) => {
        connection.query(
            "select * from memo",
            (error, results) => {
                if(error){
                    res.render('index.ejs', {items :error});
                }
                res.render('index.ejs', {items :results});
            }
        );
    })
    .post((req, res) => {
        connection.query(
            "insert into memo (title, content) values (?, ?)",
            [req.body.title, req.body.content],
            (error, results) => {
                if(error) {
                    console.log(error);
                }else{
                    console.log(results);
                    res.redirect('/');
                }
            }
        );
    })

app.get('/test', (req, res) => {
    res.render('test.ejs');
});

app.route('/delete/:id')
    .get((req, res) => {
        connection.query(
            "delete from memo where id=?",
            [req.params.id],
            (error, results) => {
                if(error){
                    console.log(error);
                }else{
                    res.redirect('/');
                }
            }
        );
    });



const port = 3000;
app.listen(port);
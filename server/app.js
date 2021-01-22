/*Server NodeJs*/
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3010;
const app = express();


let options = {
    host: 'remotemysql.com',
    user: 'depZPpcnXl',
    port: 3306,
    password: 'MxbzXwbxJ1',
    database: 'depZPpcnXl'
};

let connection = mysql.createPool(options);

let corsOptions = {
    origin: ['https://samokhindmitro.github.io/cardboard-bootstrap-nodejs', 'http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*Routing*/

app.get('/', function(req,res){
    res.send('Сервер успешное работает!');
});

app.get('/clients', function(req,res){
  connection.query('SELECT * from clients', function(err, rows){
        if(err) throw new  Error;
        res.send(rows);
    });
});

app.post('/clients', function(req,res){

    let input = req.body;
    console.log(input);
    let data = {
        phones: input.phones
    };

    connection.query('INSERT INTO clients SET ?', [data], function(err, rows){
        if(err) throw new  Error;
        res.redirect('/');
    });
});


//404
app.use(function(req, res, next){
    res.status(404).send('Нет такой страинцы повторите ввод!');
});

app.listen(PORT, function(){
    console.log(`Прослушиваем порт по адрессу ${PORT}`);
});



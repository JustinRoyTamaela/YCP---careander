/**
 * Created by littleworld on 15/02/16.
 */


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var mysql = require('mysql');
function getConnection() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'careander'
  });
  return connection;
}


app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(3000, function () {
  console.log('careander app on port 3000');
});

/* LUISTEREN -- Posten in database*/

app.post('/reminder', function (req, res) {
  var connection = getConnection();
  connection.connect();
  var newReminder = {id: req.body.id, client: req.body.client, task: req.body.task, time: req.body.time, info: req.body.info, completed: req.body.completed};
  var query = connection.query('INSERT INTO reminders SET ?', newReminder, function (err, result) {
    console.log("added " +  newReminder);
    res.status(200).end();
  });
  connection.end();
});


/* LUISTEREN -- client toevoegen posten in database */
app.post('/clientToevoegen', function (req, res) {
  var connection = getConnection();
  connection.connect();
  var newClient = {
    id: req.body.id,
    name: req.body.name,
    leeftijd: req.body.leeftijd,
    imgurl: req.body.imgurl,
    kenmerk1: req.body.kenmerk1,
    kenmerk2: req.body.kenmerk2,
    kenmerk3: req.body.kenmerk3
  };
  var query = connection.query('INSERT INTO clienten SET ?', newClient, function (err, result) {
    console.log("added " +  newClient);
    res.status(200).end();
  });
  connection.end();
});

/*LUISTEREN - Halen uit Database */

app.get('/reminders', function(req, res) {
  console.log("in get reminders");
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from reminders order by id asc', function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});

app.delete('/delReminder/:id', function(req, res) {
  var id = req.params.id;
  var connection = getConnection();
  connection.connect();
  connection.query('DELETE from reminders where id = ?', id,  function(err, rows, fields) {
    console.log('deleted ' + id);
    res.status(200).end();
  });
  connection.end();
});



/* LUISTEREN - luisteren naar de clienten table in de database. */

app.get('/clienten', function(req, res) {
  console.log("in get clienten");
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from clienten order by id asc', function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});


app.delete('/delClient/:id', function(req, res) {
  var id = req.params.id;
  var connection = getConnection();
  connection.connect();
  connection.query('DELETE from clienten where id = ?', id,  function(err, rows, fields) {
    console.log('deleted ' + id);
    res.status(200).end();
  });
  connection.end();
});








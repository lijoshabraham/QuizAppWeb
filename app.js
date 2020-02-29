'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.get('/saveLogin', (req, res) => { 
  console.log(req.query);
  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let usersObj = JSON.parse(data);
    // New User
    usersObj.users.push(req.query);
    /* for (var key in usersObj.users) {
        if(JSON.stringify(usersObj.users[key].name)===JSON.stringify('vibin')){
          usersObj.users[key].password = 'vibinjoby';
        }
    } */
    console.log(usersObj);
    let usersStr = JSON.stringify(usersObj);
    fs.writeFileSync('users.json', usersStr);
});
});
app.get('/saveScore', (req, res) => { 
  console.log(req.query);
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Example app listening on port 80!');
} );

  
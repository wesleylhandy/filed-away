// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var multer  = require('multer');
var upload = multer({dest: 'uploads/'});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/uploads', upload.single('doc'), function (req, res, next) {
  res.json({size: req.file.size});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

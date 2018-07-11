const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Prova per vedere se funziona il tutto
app.get('/prova', function(req,res) {
	res.json({funziona: "OK"})
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
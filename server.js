var express = require ('express');
var app= express();

PORT = process.env.PORT || 3000
app.get('*', function(req,res){

    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
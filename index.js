
const express = require('express')
const app = express();
const router = require('./router');
const gamesData = require('./games.json');


app.locals.games = gamesData; 

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(express.static('public'));


app.use(router);

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})
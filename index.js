const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path')

const PORT = process.env.PORT || 5000;

//Set handlebars middleware
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'handlebars');

const otherstuff = "Hi, this be more stuff";

//set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));


const express =  require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database configuration
const db = require('./config/database');

db.authenticate()
    .then( () => console.log('Database connectée...'))
    .catch(err => console.log('Erreur ' + err));

const app = express();

//Handlebars
app.engine('handlebars', 
    exphbs({ 
        defaultLayout: 'main',
        runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },   
}));
app.set('view engine', 'handlebars');

//Body Parser
/*app.use(bodyParser.json());*/
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));



//Candidature routes
app.use('/candidatures', require('./routes/candidatures'));
app.use('/', require('./routes/recruteur'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Le serveur écoute le port ${PORT}`));
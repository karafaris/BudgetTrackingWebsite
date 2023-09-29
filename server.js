const express = require('express');
const routes = require('./controllers/user-routes');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
  helpers,
  layoutsDir: path.join(__dirname, 'views'), 
  defaultLayout: 'main', 
});

const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3006;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: { maxAge: 36000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); 

app.get('/login', (req, res) => {
    console.log('Accessed /login route');
    res.render('login'); 
  });
  
  app.get('/signup', (req, res) => {
    console.log('Accessed /signup route');
    res.render('signup'); 
  });
  
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});

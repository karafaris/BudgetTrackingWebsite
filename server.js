/*const express = require('express');
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
*/

const express = require('express');
const db = require('./config/connection');

var cors = require('cors')



// Require model
const { Item } = require('./models');



const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors())


//Get all expenses
app.get('/all', async (req, res) => {
  try {
    console.log("you are here")
    const result = await Item.find({});
   // console.log(result)
    res.status(200).json(result);
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: 'Internal Server Error' })
  }
});

//Get expense via ID
app.get('/all:id', async (req, res) => {
  var v = req.params;

  console.log(v)
  console.log(v.id)
  try {

    const result = await Item.findOne({_id: v.id});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
});


//Delete expense via ID
app.delete('/all:id', async (req, res) => {
  var v = req.params;
  try {
    
    const result = await Item.deleteOne({_id: v.id});
    console.log("Item deleted")
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
});


//Update expense AMOUNT by ID
app.put('/all:id', async (req, res) => {
  console.log("67")
  var v = req.params;
  var amount = req.query.amount
  console.log(req , "69")
  console.log(req.query ,"70")
  console.log(req.params,"71")
  //console.log(amount , "69")
  //console.log(req , "70")
  try {

    const result = await Item.updateOne({_id: v.id},{$set: { "amount" : amount}});
    console.log("Item updated")
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
});

app.post('/save',async (req, res) => {
  //console.log(req)
  var nameOfExpense = req.body.expense;
  var amount = req.body.amount

  //console.log(nameOfExpense);
 // console.log(amount);
  
  try {

    const result = await Item.create({"expense": nameOfExpense , "amount": amount});
    console.log("Item created")
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
});




db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

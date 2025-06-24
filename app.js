const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// sequelize.execute('SELECT * FROM products').then();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

sequelize.sync()
.then(result => {
  console.log('Database synced');
  app.listen(3000);
  // return Product.findAll();
})
.catch(err => {
  console.log('Error syncing database:', err);
});

app.use(errorController.get404);

app.listen(3000);

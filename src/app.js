require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var methodOverride = require('method-override')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartRouter = require('./routes/cart');
var apiProductsRouter = require('./routes/api/apiProductsRouter')
var adminRouter = require('./routes/admin')
let cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware')
const categorysMiddleware = require('./middlewares/categorysMiddleware')
var cors = require('cors')
let apiUsersRouter = require('./routes/api/apiUsersRouter')
let adminMiddleware = require('./middlewares/adminMiddleware')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); 
app.use(session({
  secret: 'secret message',
  resave: false,
  saveUninitialized: true,
}))

app.use(function(req, res, next) {
  res.locals.cart = req.session.cart;
  if(req.session.user)
  res.locals.user = req.session.user
  next();
});

app.use(cookieAuthMiddleware);
app.use(methodOverride('_method'))
app.use(categorysMiddleware);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/admin',adminMiddleware, adminRouter)
app.use('/api/products', apiProductsRouter)
app.use('/api/users', apiUsersRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 

module.exports = app;

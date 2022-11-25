const createError = require('http-errors');
const express = require('express');
const path = require('path');
const axios = require("axios")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./config/db");
const auth = require('./middleware/auth');
const cors = require('cors');
const userRouter = require('./routes/user');
const publiRouter = require('./routes/posts');

const app = express();
// app.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
  
//   next()
// });

// view engine setup
// const testGetPubliByOwner = async (username) => { // ok pour GET les Publi By Owner
//   await axios // sert à appeller l'API
//       .get(`http://localhost:3000/posts/?owner=${username}`)
//       .then(res => {
//           console.log(`statusCode: ${res.status}`);
//           return res.data;
//       })
//       .catch(error => {
//           console.error(error);
//           return null;
//       });
// }

// testGetPubliByOwner("johanna");



app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin:"*",
  methods:["GET","PUT","POST"],
  allowedHeaders: [ "Origin, X-Requested-With, Content-Type, Accept"]
}))
app.use('/user', userRouter);
app.use('/api/auth', userRouter);
app.use('/posts', publiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});




module.exports = app;

const app = require('express')();
// var indexRouter = require('./app/routes/index.js');
// var itemRouter = require('./app/routes/item.js');


// app.use('/', indexRouter);
// app.use('/item', itemRouter);
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vuecrud'
});
 
// connect to database
mc.connect();



// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/mainRoute'); 
// app.use('/',task);
routes(app);
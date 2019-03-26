const express = require('express');
const logger = require('morgan');
// const bodyParser = require('body-parser');
const app = express();
const userController = require('./controllers/userController')


app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`));

app.use('/api/v1', userController);
app.get('/*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`);
});

// const mongoURI = (MONGODB_URI = 'mongodb://localhost/shopping-app');

// mongoose
// 	.connect(mongoURI, { useNewUrlParser: true })
// 	.then(() => console.log('MongoDb is connected'))
// 	.catch((err) => console.log(err));

// const Users = require('./routes/Users');

// app.use('/users', Users);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log('App is up and running on port ' + PORT);
});

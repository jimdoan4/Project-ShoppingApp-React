require('dotenv').config();
const mongoose = require('mongoose');

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/shopping-application')
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
    process.exit(-1)
})

mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB")
})
//export here
module.exports = mongoose
		
		
// 		'mongodb://localhost/shopping-application', {useNewUrlParser: true, useUnifiedTopology: true})
// }

// mongoose.connection.once('open', function() {
// 	console.log(`Mongoose has connected to MongoDB`);
// });

// // If the connection throws an error
// mongoose.connection.on('error', function(error) {
// 	console.error(`MongoDB connection error!!! ${error}`);
// 	process.exit(-1);
// });

module.exports = mongoose;

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
// const User = require('../models/User');
const Apparel = require('../models/Apparel');

// Men Clothing/Shirt
const ventShirt = new Apparel({
	name: 'Metal Vent Tech Short Sleeve V',
	size: 4,
	image: 'https://images.lululemon.com/is/image/lululemon/LM3AT8S_036773_1?$image_carousel-lg_2x$',
	price: 68,
	description:
		'Seamless construction, anti-stink technology, and strategic venting make this shirt training-session ready.'
});
// const basicShirt = new Apparel({
// 	name: '5 Year Basic Tee ELMT',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3BP6S_031384_1?$image_carousel-lg_2x$',
// 	price: 68,
// 	description: 'We built this soft, lightweight crew for ultimate everyday comfort.'
// });
// const ventShirtPolo = new Apparel({
// 	name: 'Metal Vent Tech Polo',
// 	size: 3,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3ASES_0572_1?$image_carousel-lg_2x$',
// 	price: 68,
// 	description:
// 		'Go ahead and get sweaty in this anti-stink polo with strategic venting, four-way stretch fabric, and seamless construction.'
// });
// const ventShirt2 = new Apparel({
// 	name: 'Metal Vent Tech Polo 2',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3AUJS_033061_1?$image_carousel-lg_2x$',
// 	price: 49,
// 	description:
// 		'Seamless construction, anti-stink technology, and strategic venting make this a polo you will not be afraid to sweat in.'
// });
// const sweatPullOver = new Apparel({
// 	name: 'City Sweat Pullover Hoodie',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_1?$image_carousel-lg_2x$',
// 	price: 118,
// 	description:
// 		'Everyone needs a good hoodie. A loose fit and soft, breathable fabric makes this one just that much better.'
// });
// const zipHoodie = new Apparel({
// 	name: 'City Sweat Zip Hoodie',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM4750S_036763_1?$image_carousel-lg_2x$',
// 	price: 128,
// 	description:
// 		'Everyone needs a good hoodie. A loose fit and soft, breathable fabric makes this one just that much better.'
// });
// const ventTechShirt = new Apparel({
// 	name: 'Metal Vent Tech Short Sleeve V',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3AT8S_036773_1?$image_carousel-lg_2x$',
// 	price: 68,
// 	description:
// 		'Seamless construction, anti-stink technology, and strategic venting make this shirt training-session ready.'
// });
// const sleevelessShirt = new Apparel({
// 	name: 'Drysense Mesh Sleeveless',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3BN2S_036744_1?$image_carousel-lg_2x$',
// 	price: 58,
// 	description:
// 		'Break your sweat record in this anti-stink sleeveless tee. It is made from a Mesh fabric that we developed to feel good against your skin—even when you are sweaty.'
// });
// const surgeTank = new Apparel({
// 	name: 'Metal Vent Tech Surge Tank',
// 	size: 4,
// 	image: 'https://images.lululemon.com/is/image/lululemon/LM3AEUS_0023_1?$image_carousel-lg_2x$',
// 	price: 39,
// 	description:
// 		'Stay cool when you are heating it up in this breatheable, seamless, and lightweight tank.Integrated open- hole Mesh fabric allows for maxium airflow so you can push yourself to the max.Plus, anti - stink technology means you can go from running your favourite routes to enjoying a much - deserved cold one at happy hour.'
// });

Apparel.remove({})
	.then(() => ventShirt.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => basicShirt.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => ventShirtPolo.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => ventShirt2.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => sweatPullOver.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => ventTechShirt.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => sleevelessShirt.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => surgeTank.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

// Apparel.remove({})
// 	.then(() => zipHoodie.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());

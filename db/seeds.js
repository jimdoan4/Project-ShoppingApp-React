require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const Review = require('../models/Review');
const Apparel = require('../models/Apparel');

const shirt = new Review({
	title: 'This is the best shirt I ever bought!',
	description: 'This shirt if worth the price'
});

const cityHoodie = new Apparel({
	name: 'City Sweat Pullover Hoodie',
	size: 'Small',
	price: 68.0,
	description:
		'Cozy meets technical in this breathable, sweat-wicking pullover hoodie that keeps your muscles warm before and after training.',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$',
	reviews: [ shirt ]
});

const ventShirt = new Apparel({
	name: 'Metal Vent Tech Short Sleeve V',
	size: 'Medium',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3AT8S_036773_1?$image_carousel-lg_2x$',
	price: 68.0,
	description:
		'Seamless construction, anti-stink technology, and strategic venting make this shirt training-session ready.',
	reviews: [ shirt ]
});

const basicShirt = new Apparel({
	name: '5 Year Basic Tee ELMT',
	size: 'Small',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3BP6S_031384_1?$image_carousel-lg_2x$',
	price: 68.0,
	description: 'We built this soft, lightweight crew for ultimate everyday comfort.',
	reviews: [ shirt ]
});

const ventShirtPolo = new Apparel({
	name: 'Metal Vent Tech Polo',
	size: 3,
	image: 'https://images.lululemon.com/is/image/lululemon/LM3ASES_0572_1?$image_carousel-lg_2x$',
	price: 68.00,
	description:
		'Go ahead and get sweaty in this anti-stink polo with strategic venting, four-way stretch fabric, and seamless construction.',
	reviews: [ shirt ]
});
const ventShirt2 = new Apparel({
	name: 'Metal Vent Tech Polo 2',
	size: 'Large',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3AUJS_033061_1?$image_carousel-lg_2x$',
	price: 49.00,
	description:
		'Seamless construction, anti-stink technology, and strategic venting make this a polo you will not be afraid to sweat in.',
	reviews: [ shirt ]
});
const sweatPullOver = new Apparel({
	name: 'City Sweat Pullover Hoodie',
	size: 'Large',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_1?$image_carousel-lg_2x$',
	price: 118.0,
	description:
		'Everyone needs a good hoodie. A loose fit and soft, breathable fabric makes this one just that much better.',
	reviews: [ shirt ]
});
const zipHoodie = new Apparel({
	name: 'City Sweat Zip Hoodie',
	size: 'Medium',
	image: 'https://images.lululemon.com/is/image/lululemon/LM4750S_036763_1?$image_carousel-lg_2x$',
	price: 128.0,
	description:
		'Everyone needs a good hoodie. A loose fit and soft, breathable fabric makes this one just that much better.',
	reviews: [ shirt ]
});
const ventTechShirt = new Apparel({
	name: 'Metal Vent Tech Short Sleeve V',
	size: 'Small',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3AT8S_036773_1?$image_carousel-lg_2x$',
	price: 68.0,
	description:
		'Seamless construction, anti-stink technology, and strategic venting make this shirt training-session ready.',
	reviews: [ shirt ]
});
const sleevelessShirt = new Apparel({
	name: 'Drysense Mesh Sleeveless',
	size: 'Medium',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3BN2S_036744_1?$image_carousel-lg_2x$',
	price: 58.0,
	description:
		'Break your sweat record in this anti-stink sleeveless tee. It is made from a Mesh fabric that we developed to feel good against your skin—even when you are sweaty.',
	reviews: [ shirt ]
});
const surgeTank = new Apparel({
	name: 'Metal Vent Tech Surge Tank',
	size: 'Large',
	image: 'https://images.lululemon.com/is/image/lululemon/LM3AEUS_0023_1?$image_carousel-lg_2x$',
	price: 39.0,
	description:
		'Stay cool when you are heating it up in this breatheable, seamless, and lightweight tank.Integrated open- hole Mesh fabric allows for maxium airflow so you can push yourself to the max.Plus, anti - stink technology means you can go from running your favourite routes to enjoying a much - deserved cold one at happy hour.',
	reviews: [ shirt ]
});
const surgeShort = new Apparel({
	name: 'Surge Short',
	size: 'Large',
	image: 'https://images.lululemon.com/is/image/lululemon/LM7A99S_0001_2?$product_tile-lg_2x$',
	price: 48.00,
	description:
		'Stay cool when you are heating it up in this breatheable, seamless, and lightweight tank.Integrated open- hole Mesh fabric allows for maxium airflow so you can push yourself to the max.Plus, anti - stink technology means you can go from running your favourite routes to enjoying a much - deserved cold one at happy hour.',
	reviews: [ shirt ]
});
const noBoxer = new Apparel({
	name: 'No Boxer',
	size: 'Medium',
	image: 'https://images.lululemon.com/is/image/lululemon/LM9563S_036866_2?$product_tile-lg_2x$',
	price: 39.00,
	description:
		'Stay cool when you are heating it up in this breatheable, seamless, and lightweight tank.Integrated open- hole Mesh fabric allows for maxium airflow so you can push yourself to the max.Plus, anti - stink technology means you can go from running your favourite routes to enjoying a much - deserved cold one at happy hour.',
	reviews: [ shirt ]
});

Apparel.deleteMany({})
	.then(() => cityHoodie.save())
	.then(() => surgeTank.save())
	.then(() => sleevelessShirt.save())
	.then(() => ventTechShirt.save())
	.then(() => zipHoodie.save())
	.then(() => sweatPullOver.save())
	.then(() => ventShirt2.save())
	.then(() => ventShirtPolo.save())
	.then(() => basicShirt.save())
	.then(() => surgeShort.save())
	.then(() => noBoxer.save())
	.then(() => ventShirt.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());

// apparels: [cityHoodie, surgeTank, sleevelessShirt, ventTechShirt, zipHoodie, sweatPullOver, ventShirt2, ventShirtPolo, basicShirt]


// User.deleteMany({})
// 	.then(() => jim.save())
// 	.then(() => console.log('Successful Save'))
// 	.then(() => mongoose.connection.close());
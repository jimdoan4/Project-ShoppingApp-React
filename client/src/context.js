// import React, { Component } from 'react';
// // import { storeProducts, detailProduct } from './data';
// import axios from 'axios';
// const ProductContext = React.createContext();

// class ProductProvider extends Component {
// 	state = {
// 		apparels: [],
// 		cart: [],
// 		modalOpen: false,
// 		cartSubTotal: 0,
// 		cartTax: 0,
// 		cartTotal: 0,
// 		apparel: {
// 			_id: '',
// 			name: '',
// 			size: '',
// 			image: '',
// 			price: '',
// 			description: '',
// 			reviews: []
// 		},
// 		displayApparelForm: false
// 	};

// 	componentDidMount = () => {
// 		this.getAllApparels();
// 	};

// 	getAllApparels = () => {
// 		axios.get('/api/apparels').then((res) => {
// 			this.setState({ apparels: res.data });
// 		});
// 	};

// 	setApparels = () => {
// 		let apparels = [];
// 		getAllApparels.forEach((item) => {
// 			const singleItem = { ...item };
// 			apparels = [ ...apparels, singleItem ];
// 		});
// 		this.setState(() => {
// 			return { apparels };
// 		}, this.checkCartItems);
// 	};

// 	getItem = (id) => {
// 		const apparel = this.state.apparels.find((item) => item.id === id);
// 		return apparel;
// 	};
// 	// handleDetail = (id) => {
// 	// 	const apparel = this.getItem(id);
// 	// 	this.setState(() => {
// 	// 		return { detailProduct: product };
// 	// 	});
//     // };

//     handleApparel = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post(`/api/apparels/${this.state.apparelId}`, {
// 				image: this.state.apparel.image,
// 				name: this.state.apparel.name,
// 				description: this.state.apparel.description,
// 				size: this.state.apparel.size,
// 				price: this.state.apparel.price
// 			})
// 			.then((res) => {
// 				const apparelsList = [ this.state.apparels ];
// 				apparelsList.unshift(res.data);
// 				this.setState({
// 					apparel: {
// 						name: '',
// 						size: '',
// 						image: '',
// 						price: '',
// 						description: ''
// 					},
// 					displayUserForm: false,
// 					apparels: apparelsList
// 				});
// 			});
//     };

// 	addToCart = (id) => {
// 		let tempApparels = [ ...this.state.apparels ];
// 		const index = tempApparels.indexOf(this.getItem(id));
// 		const apparel = tempApparels[index];
// 		apparel.inCart = true;
// 		apparel.count = 1;
// 		const price = apparel.price;
// 		apparel.total = price;

// 		this.setState(() => {
// 			return {
// 				apparels: [ ...tempApparels ],
// 				cart: [ ...this.state.cart, apparel ]
// 				// detailProduct: { ...product }
// 			};
// 		}, this.addTotals);
// 	};
// 	openModal = (id) => {
// 		const apparel = this.getItem(id);
// 		this.setState(() => {
// 			return { modalProduct: apparel, modalOpen: true };
// 		});
// 	};
// 	closeModal = () => {
// 		this.setState(() => {
// 			return { modalOpen: false };
// 		});
// 	};
// 	increment = (id) => {
// 		let tempCart = [ ...this.state.cart ];
// 		const selectedApparel = tempCart.find((item) => {
// 			return item.id === id;
// 		});
// 		const index = tempCart.indexOf(selectedApparel);
// 		const apparel = tempCart[index];
// 		apparel.count = apparel.count + 1;
// 		apparel.total = apparel.count * apparel.price;
// 		this.setState(() => {
// 			return {
// 				cart: [ ...tempCart ]
// 			};
// 		}, this.addTotals);
// 	};
// 	decrement = (id) => {
// 		let tempCart = [ ...this.state.cart ];
// 		const selectedApparel = tempCart.find((item) => {
// 			return item.id === id;
// 		});
// 		const index = tempCart.indexOf(selectedApparel);
// 		const apparel = tempCart[index];
// 		apparel.count = apparel.count - 1;
// 		if (apparel.count === 0) {
// 			this.removeItem(id);
// 		} else {
// 			apparel.total = apparel.count * apparel.price;
// 			this.setState(() => {
// 				return { cart: [ ...tempCart ] };
// 			}, this.addTotals);
// 		}
// 	};
// 	getTotals = () => {
// 		// const subTotal = this.state.cart
// 		//   .map(item => item.total)
// 		//   .reduce((acc, curr) => {
// 		//     acc = acc + curr;
// 		//     return acc;
// 		//   }, 0);
// 		let subTotal = 0;
// 		this.state.cart.map((item) => (subTotal += item.total));
// 		const tempTax = subTotal * 0.1;
// 		const tax = parseFloat(tempTax.toFixed(2));
// 		const total = subTotal + tax;
// 		return {
// 			subTotal,
// 			tax,
// 			total
// 		};
// 	};
// 	addTotals = () => {
// 		const totals = this.getTotals();
// 		this.setState(
// 			() => {
// 				return {
// 					cartSubTotal: totals.subTotal,
// 					cartTax: totals.tax,
// 					cartTotal: totals.total
// 				};
// 			},
// 			() => {}
// 		);
// 	};
// 	removeItem = (id) => {
// 		let tempApparels = [ ...this.state.apparels ];
// 		let tempCart = [ ...this.state.cart ];

// 		const index = tempApparels.indexOf(this.getItem(id));
// 		let removedApparel = tempApparels[index];
// 		removedApparel.inCart = false;
// 		removedApparel.count = 0;
// 		removedApparel.total = 0;

// 		tempCart = tempCart.filter((item) => {
// 			return item.id !== id;
// 		});

// 		this.setState(() => {
// 			return {
// 				cart: [ ...tempCart ],
// 				apparels: [ ...tempApparels ]
// 			};
// 		}, this.addTotals);
// 	};
// 	clearCart = () => {
// 		this.setState(
// 			() => {
// 				return { cart: [] };
// 			},
// 			() => {
// 				this.setApparels();
// 				this.addTotals();
// 			}
// 		);
// 	};
// 	render() {
// 		return (
// 			<ProductContext.Provider
// 				value={{
// 					...this.state,
// 					handleDetail: this.handleDetail,
// 					addToCart: this.addToCart,
// 					openModal: this.openModal,
// 					closeModal: this.closeModal,
// 					increment: this.increment,
// 					decrement: this.decrement,
// 					removeItem: this.removeItem,
// 					clearCart: this.clearCart
// 				}}
// 			>
// 				{this.props.children}
// 			</ProductContext.Provider>
// 		);
// 	}
// }

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer };

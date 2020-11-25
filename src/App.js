import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          id: 1
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          id: 2
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 4,
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    // console.log('product',product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    // console.log('product',product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handleDeleteQuantity = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // it will return me products in form of array whose id != given id

    this.setState({
      products: items
    })
  }

  getCartCount = () =>{
    const {products} = this.state;

    let count =0;
    
    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal += product.qty * product.price;
    })

    return cartTotal;

  }

  render() {

    const {products} = this.state;
    return (

      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
         products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteQuantity = {this.handleDeleteQuantity} />
         <div style = {{fontSize: 20, padding: 10}}>
           TOTAL: {this.getCartTotal()}
         </div>
      </div>
      
    );
  }

}



export default App;

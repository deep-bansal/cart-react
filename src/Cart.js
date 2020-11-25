import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: "Watch",
                    qty: 1,
                    image: '',
                    id: 1
                },
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 10,
                    image: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: "Laptop",
                    qty: 4,
                    image: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) =>{
        // console.log('product',product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    } 

    handleDecreaseQuantity = (product) =>{
        // console.log('product',product);
        
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products
        })
    } 

    handleDeleteQuantity  = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id ); // it will return me products in form of array whose id != given id

        this.setState({
            products: items
        })
    }
    render(){
        const {products} = this.state;
        return (
           
            <div className = "cart">
                {products.map((product) =>{
                    return <CartItem 
                    product = {product}
                    key = {product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteQuantity = {this.handleDeleteQuantity} />
                })}
            </div>
        )
    }

}
   

export default Cart;
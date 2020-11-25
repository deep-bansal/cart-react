import React from 'react';

class CartItem extends React.Component {

    // this.decreaseQuantity = this.decreaseQuantity.bind(this);

    // increaseQuantity = () => {

    //     // in react we cant directly mutate the state we require a setState function to do tso because this wont render the state to react
    //     //this.state.qty = this.state.qty + 1;
    //     // console.log('this',this.state);

    //     //set state form 1, generally for things that dont require previous states and also it returns an object
    //     // this.setState ({
    //     //     qty: this.state.qty + 1
    //     // }, () =>{
    //     // to avoid async commands setstate provide us with call back function in this as well as other form also
    //     //})

    //     //setState Form 2, use this if you require prev state
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log(this.state);
    //     })

    // }

    // decreaseQuantity = () => {

    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     })
    // }



    // resetQuantity = () => {
    //     this.setState({
    //         qty: 0
    //     })
    // }



    render() {
        // console.log(this.props);
        const { price, title, qty } = this.props.product;
        const {product,onDecreaseQuantity,onIncreaseQuantity,onDeleteQuantity} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                            src="https://www.flaticon.com/svg/static/icons/svg/864/864373.svg"
                            alt="decrease"
                            className="action-icons"
                            onClick={() => onDecreaseQuantity(product)}/>

                        <img
                            src="https://www.flaticon.com/svg/static/icons/svg/864/864378.svg"
                            alt="decrease"
                            className="action-icons"
                            onClick={() => onIncreaseQuantity(product)} />

                        <img
                            src="https://www.flaticon.com/svg/static/icons/svg/3209/3209887.svg"
                            alt="decrease"
                            className="action-icons"
                            onClick={() => onDeleteQuantity(product.id)} />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
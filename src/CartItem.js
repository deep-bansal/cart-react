import React from 'react';

const CartItem = (props) => {

        // console.log(this.props);
        const { price, title, qty } = props.product;
        const {product,onDecreaseQuantity,onIncreaseQuantity,onDeleteQuantity} = props;
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


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
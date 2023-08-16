import { useState } from "react";

const MenuItem = ({ imageUrl, itemName, itemPrice }) => {

    const [itemQuantity, setItemQuantity] = useState(0);

    const increaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    }

    const decreaseQuantity = () => {
        if (itemQuantity > 0) {
            setItemQuantity(itemQuantity - 1);
        }
    }

    return (
        <div className="menu-item">
            <img alt={itemName} src={imageUrl} />
            <div className="item-details">
                <h3 className="item-name">{itemName}</h3>
                <h4>{itemPrice}</h4>
            </div>
            <div className="button-container">
                <button className='btn' onClick={increaseQuantity}>+</button>
                <div className="count">{itemQuantity}</div>
                <button className='btn' onClick={decreaseQuantity}>-</button>
            </div>
        </div>
    )
}

export default MenuItem;

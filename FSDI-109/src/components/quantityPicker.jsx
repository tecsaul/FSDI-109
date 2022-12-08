import "./quantityPicker.css";
import {useState} from 'react';

const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState(1);
    
    function increase () {
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    function decrease () {
        let val = quantity - 1;
        if (val > 0) {
            setQuantity(val);
            props.onChange(val);
        }
    }

    return (
        <div className="qt-picker">
            <button className= "btn btn-sm btn-dark" disabled={quantity ===  1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className= "btn btn-sm btn-dark" onClick={increase}>+</button> 
        </div>
    );
};

export default QuantityPicker;
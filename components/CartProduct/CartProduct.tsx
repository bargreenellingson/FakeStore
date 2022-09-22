import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './CartProduct.module.css';
import { deleteFromCart, updateQuantityInCart } from 'store/slices/cart';

function CartProduct({ product }) {
    const [inputQuantity, setInputQuantity] = useState(product.quantity);
    const handleQuantityChange = (e) => {
        setInputQuantity(e.target.value);
    };
    const dispatch: any = useDispatch();

    return (
        <div className={classes.product}>
            <div>
                <picture>
                    <source srcSet={product.image} type={'image/webp'} />
                    <img
                        className={classes.productImage}
                        src={product.image}
                        alt={'Product Photo'}
                    />
                </picture>
            </div>
            <div className={classes.productDescription}>
                <div>{product.title}</div>
                <div>{product.quantity}</div>
                <div>
                    <input
                        type="number"
                        value={inputQuantity}
                        onChange={handleQuantityChange}
                    />
                    <button
                        onClick={() =>
                            dispatch(
                                updateQuantityInCart(product.id, inputQuantity)
                            )
                        }
                    >
                        update
                    </button>
                    <button
                        onClick={() => dispatch(deleteFromCart(product.id))}
                    >
                        remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;

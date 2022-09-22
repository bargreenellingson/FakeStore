import { useSelector } from 'react-redux';
import { selectCart } from 'store/slices/cart';
import CartProduct from '../../components/CartProduct';
import classes from './cart.module.css';

export default function Cart() {
    const cart = useSelector(selectCart);

    return (
        <div className={classes.productCart}>
            {cart.map((product, index) => (
                <CartProduct key={index} product={product} />
            ))}
        </div>
    );
}

import Link from 'next/link';
import { selectCartCount } from '../../store/slices/cart';
import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

function CartButton() {
    const cartCount = useSelector(selectCartCount);

    return (
        <>
            <Link href="/cart">
                <div className={classes.cart}>Cart {cartCount}</div>
            </Link>
        </>
    );
}

export default CartButton;

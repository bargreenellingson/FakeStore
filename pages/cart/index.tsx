import { useDispatch, useSelector } from 'react-redux';
import { selectCart, deleteFromCart } from 'store/slices/cart';
import classes from './cart.module.css';

export default function Cart() {
    const cart = useSelector(selectCart);
    const dispatch: any = useDispatch();

    return (
        <div>
            {cart.map((index, product) => (
                <div key={index} className={classes.product}>
                    <div>
                        <picture>
                            <source
                                srcSet={product.image}
                                type={'image/webp'}
                            />
                            <img
                                className={classes.productImage}
                                src={product.image}
                                alt={'Product Photo'}
                            />
                        </picture>
                    </div>
                    <div>
                        <div>{product.title}</div>
                        <div>{product.quantity}</div>
                        <div>update</div>
                        <div>
                            <button
                                onClick={() =>
                                    dispatch(deleteFromCart(product.id))
                                }
                            >
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

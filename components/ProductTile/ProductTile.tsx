import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginToken } from 'store/slices/app';
import { addToCart } from 'store/slices/cart';
import formatPrice from 'util/formatPrice';
import classes from './ProductTile.module.css';

interface ProductTileProps {
    product: any;
}

function ProductTile(props: ProductTileProps) {
    const { product } = props;
    const isLoggedIn = !!useSelector(selectLoginToken);
    const dispatch: any = useDispatch();

    return (
        <div className={classes.productTile}>
            <picture className={classes.productImage}>
                <source srcSet={product.image} type={'image/webp'} />
                <img src={product.image} alt={'Product Photo'} />
            </picture>
            <div className={classes.productTitle}>{product?.title}</div>
            <div>{product?.rating.rate}</div>
            <div className={classes.productPrice}>
                {product.price > 500 && !isLoggedIn ? (
                    <>Sign in to view price</>
                ) : (
                    formatPrice(product.price)
                )}
            </div>
            <div>
                <button onClick={() => dispatch(addToCart(product))}>
                    add to cart
                </button>
            </div>
        </div>
    );
}

export default ProductTile;

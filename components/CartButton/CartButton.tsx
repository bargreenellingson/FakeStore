import Link from 'next/link'
import { selectCartCount } from '../../store/slices/cart'
import { useSelector } from 'react-redux'

function CartButton() {
    const cartCount = useSelector(selectCartCount)

    return (
        <>
            <Link href="/cart">
                <div>Cart</div>
            </Link>
            <>{cartCount}</>
        </>
    )
}

export default CartButton

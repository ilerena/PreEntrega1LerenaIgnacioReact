import { MdOutlineShoppingCart } from 'react-icons/md';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return (
        <>
        <Badge badgeContent={2} color="primary"><MdOutlineShoppingCart color="secondary" /></Badge>
        </>
    )
}

export default CartWidget;
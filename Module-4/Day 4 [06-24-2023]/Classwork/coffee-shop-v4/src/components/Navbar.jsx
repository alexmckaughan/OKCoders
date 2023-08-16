import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart'
import Menu from './Menu'
import './Navbar.css'

const NavBar = () => {

    const [cartClicked, setCartClicked] = useState(false);

    function handleCartClick(event) {
        event.preventDefault()
        console.log("Beginning state: " + cartClicked)
        setCartClicked(!cartClicked);
        console.log("Set to: " + !cartClicked)
    }

    return (
        <>
            <ul className='nav-container'>
                <li><a>HOME</a></li>
                <li><a>MENU</a></li>
                <li style={{ float: 'right' }}><a className="active" onClick={handleCartClick}><ShoppingCartIcon /></a></li>
            </ul>
            <div className='body-container'>
                <Menu />
                {cartClicked && <Cart />}
            </div>
        </>
    )
}

export default NavBar

import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils.js";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.components"
import CartDropdown from "../cart-dropdown/cart-dropdown.components";

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/">
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/content">
                CONTENT
            </Link>
            {
              currentUser ?
                  <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                  :
                  <Link classname="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
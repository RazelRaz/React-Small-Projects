import { NavLink } from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'pending'} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? 'active' : 'pending'} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? 'active' : 'pending'} to="/product/10/shirt">Product</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? 'active' : 'pending'} to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;
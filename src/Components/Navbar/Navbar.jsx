import { NavLink } from "react-router-dom";
import {image} from './image'
const Navbar = () => {

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>

    return (
        <div>
            <div className="w-[1320px] mx-auto pt-8">
                <div className="navbar">
                    <div className="flex-1">
                        <img src={image} />
                    </div>
                    <div className="flex-none">
                        <ul className="gap-x-10 menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
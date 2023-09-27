import { NavLink } from "react-router-dom";

const Navbar = () => {

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>

    return (
        <div>
            <div className="container mx-auto pt-8">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <img src="/src/Images/Logo.png" alt="" />
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
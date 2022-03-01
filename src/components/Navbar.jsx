import React, { useState, useEffect } from "react";
import Item from "./Item";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth >= 640 ? setNavActive(true) : setNavActive(false)
        );
    }, []);

    return (
        <nav className="flex justify-between w-full bg-slate-200 items-center py-2 px-4 relative">
            <Item name="logo" />
            <FaHamburger
                className="text-5xl text-gray-700 hover:text-gray-500 cursor-pointer sm:hidden"
                onClick={() => setNavActive(!navActive)}
            />
            {navActive && (
                <div className="absolute right-0 top-20 flex flex-col px-4 gap-1 sm:static sm:flex-row">
                    <Item name="Home" />
                    <Item name="About" />
                    <Item name="Register" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;

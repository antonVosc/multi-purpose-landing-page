import React, {useState} from "react";
import Button from "./Button";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose} from "react-icons/md";
import "../styles/components/Navbar.scss";
import BrandName from "./BrandName";

function Navbar() {
    const [toggleNavBar, setToggleNavBar]=useState(false);
    const navbarToggler = () => {
        setToggleNavBar(!toggleNavBar);
    }

    return (
        <div className={'navBar ${toggleNavBar === true ? "active" : ""}'}>
            <div className="col">
                <BrandName />

                <div className="collapseble-button">
                    {!toggleNavBar ? (
                        <GiHamburgerMenu onClick={navbarToggler} />
                    ) : (
                        <MdClose onClick={navbarToggler} />
                    )}
                </div>
            </div>

            <nav>
                <div className="links">
                    <ul>
                        <li>
                          <a href="#">About</a>
                        </li>

                        <li>
                          <a href="#">Services</a>
                        </li>

                        <li>
                          <a href="#">Testimonial</a>
                        </li>

                        <li>
                          <a href="#">Blog</a>
                        </li>

                        <li>
                            <Button content="Contact" />
                        </li>
                   </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
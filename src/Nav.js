import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const showFunc = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        };

        window.addEventListener("scroll", showFunc);

        return () => window.removeEventListener("scroll", showFunc);
    }, []);

    return (
        <div className={`nav ${show && "nav--show"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src={`${process.env.PUBLIC_URL}/nav-ico.png`}
                alt="Netflix Avatar"
            />
        </div>
    );
}

export default Nav;

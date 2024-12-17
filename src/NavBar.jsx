import React, {useState, useRef} from "react";

import WhiteCircle from '../public/images/white_menu_icon.png';
import BlackCircle from '../public/images/black_menu_icon.png'

function NavBar({sectionRefs}){
    const[isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    function scrollToSection(section) {
        if (sectionRefs.current[section]) {
            sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });
        }
    }

    const status = isOpen ? BlackCircle : WhiteCircle 
    return(
        <nav className="nav-bar">
            <img className="menu-circle"  onClick={toggleMenu} src={status} />
            {isOpen && (
                <ul className="menu-list">
                    <li>
                    <button onClick={() => scrollToSection("aboutUs")}>About Us</button>                  
                    </li>
                    <li>
                    <button onClick={() => scrollToSection("cards")}>Recipes</button>                  
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar
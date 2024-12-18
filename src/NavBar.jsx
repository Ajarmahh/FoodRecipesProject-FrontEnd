import React, {useState, useRef} from "react";
import SearchBar from "./SearchBar";
import WhiteCircle from '../public/images/white_menu_icon.png';
import BlackCircle from '../public/images/black_menu_icon.png'

function NavBar({sectionRefs, onSearch}){
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
         <div className="menu-container">
            <img className="menu-icon"  onClick={toggleMenu} src={status} />
            {isOpen && (
                <ul className="menu-list">
                    <div className="list-container">
                    <li>
                    <button id="aboutUs-button" onClick={() => scrollToSection("aboutUs")}>About Us</button>                  
                    </li>
                    <li>
                    <button onClick={() => scrollToSection("cards")}>Recipes</button>                  
                    </li> 
                    </div>
                </ul>
            )}
            </div>
            <SearchBar onSearch={onSearch}/>

        </nav>
    )
}

export default NavBar
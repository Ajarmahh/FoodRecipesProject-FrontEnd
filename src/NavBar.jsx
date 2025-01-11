import React, {useState, useRef} from "react";
import SearchBar from "./SearchBar";
import ReusableButton from "./ReusableButton";


function NavBar({sectionRefs, onSearch}){



    function scrollToSection(section) {
        if (sectionRefs.current[section]) {
            sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <nav className="nav-bar">
            <img src="../public/images/MasterKitchen.png"
                 className="w-24 h-16" 
            />

           { /*<p className="font-thin italic">MasterKitchen</p>*/}
            
            <div className="inline-block absolute right-0 bg-transparent">
                <ReusableButton onClick={() => scrollToSection("home")}>Home</ReusableButton> 
                <ReusableButton onClick={() => scrollToSection("cards")}>Recipes</ReusableButton>                  
                <ReusableButton onClick={() => scrollToSection("aboutUs")}>About Us</ReusableButton> 
            </div>                 
            <SearchBar onSearch={onSearch}/>

        </nav>
    )
}

export default NavBar
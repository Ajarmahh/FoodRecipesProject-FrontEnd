import React, {useState, useRef} from "react";
import SearchBar from "./SearchBar";
import ReusableButton from "./ReusableButton";
import mainIcon from "../assets/MasterKitchen.png"
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../auth/auth";



function NavBar({sectionRefs, onSearch}){
    const navigate = useNavigate()

    function scrollToSection(section) {
        if (sectionRefs.current[section]) {
            sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <nav className="nav-bar">
            <img src={mainIcon}
                className="w-24 h-16 cursor-pointer"
                onClick={()=> navigate('/')} 
            />
            
            <div className="flex items-center absolute right-0 bg-transparent mr-6 ml-32">
                <ReusableButton onClick={() => scrollToSection("home")}>Home</ReusableButton> 
                <ReusableButton onClick={() => scrollToSection("cards")}>Recipes</ReusableButton>                  
                <ReusableButton onClick={() => scrollToSection("aboutUs")}>About Us</ReusableButton>
                {getUserRole == 'admin' &&(
                <ReusableButton onClick={() => navigate("/admin")}>Dash Board</ReusableButton>)}
                <Dropdown />
            </div>                 
            <SearchBar onSearch={onSearch}/>

        </nav>
    )
}

export default NavBar
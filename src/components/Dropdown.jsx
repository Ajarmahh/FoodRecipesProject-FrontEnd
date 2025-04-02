import React from "react";
import { useState } from "react";
import person from "../../public/images/person.png";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    
    setIsOpen(false);

    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="relative">
      <img
        src={person}
        className="w-8 h-8 cursor-pointer bg-transparent transform hover:scale-110 transition duration-300 border-none focus:outline-none"
        onClick={toggleDropdown}
        alt="User"
      />

      {isOpen && (
        <div
          id="dropdown"
          className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {/* Render Login/Register links if no token is present */}
            {!localStorage.getItem("token") ? (
              <>
                <li>
                  <a
                    href="/login"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Register
                  </a>
                </li>
              </>
            ) : (
              // Render Logout if token is present
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none bg-transparent border-none"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

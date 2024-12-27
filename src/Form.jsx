import { useState } from "react";

function Form({ newRecipe, handleForm, toggle, onSubmit}) {
    const[formIsOpen, setFormIsOpen]= useState(false)

    function toggle(){
        setFormIsOpen(prevFormIsOpen=> !prevFormIsOpen)
    }

  { /* function handleSubmit(){
        onSubmit({name, description,
        ingredients,
        prepare, 
        image})
    }
*/}
    return (
      <div className="p-20">
        {/* Button to toggle modal */}
        <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            className=" z-50  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-12"
            type="button"
            onClick={toggle}
        >
          Add Recipe
        </button>

        {/* Modal */}
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden={formIsOpen ? "false" : "true"}
          className={`${
            formIsOpen ? 'flex' : 'hidden'
        }  justify-center items-center w-full h-full`}
          >
          <div className="relative p-4 w-full max-w-md max-h-full">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setFormIsOpen(false)}
          ></div>

        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add New Recipe
            </h3>
            </div>

            {/* Modal body */}
            <form onSubmit={onSubmit} className="p-4 md:p-5 w-full">
            <div className="grid gap-4 mb-4 grid-cols-2">
                {/* Name Field */}
                <div className="col-span-2">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={newRecipe.name}
                    onChange={handleForm}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                />
                </div>

                
                <div className="col-span-2">
                <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Image
                </label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    value={newRecipe.image}
                    onChange={handleForm}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Image URL"
                    required
                />
                </div>

                {/* Description Field */}
                <div className="col-span-2">
                <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
                    value={newRecipe.description}
                    onChange={handleForm}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                ></textarea>
                </div>

                {/* Ingredients Field */}
                <div className="col-span-2">
                <label
                    htmlFor="ingredients"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Ingredients
                </label>
                <textarea
                    name="ingredients"
                    id="ingredients"
                    rows="4"
                    value={newRecipe.ingredients}
                    onChange={handleForm}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write ingredients here"
                ></textarea>
                </div>

                {/* Preparation Field */}
                <div className="col-span-2">
                <label
                    htmlFor="prepare"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Preparation
                </label>
                <textarea
                    name="prepare"
                    id="prepare"
                    rows="4"
                    value={newRecipe.prepare}
                    onChange={handleForm}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write preparation steps here"
                ></textarea>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                ></path>
                </svg>
                Add new Recipe
            </button>
            </form>
        </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Form;
  
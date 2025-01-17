import { useState } from "react"
import FilledStar from "../../public/images/filled-star.png"
import EmptyStar from "../../public/images/star.png"


function Card(props){
    const[cardIsOpen, SetCardIsOpen] = useState(false)
    const[isFilled, setIsFilled] = useState(false);
    
    function toggle(event){
        event.stopPropagation() // Prevent event from reaching the parent card
        setIsFilled(!isFilled)
    };

    function toggleCard(){
        SetCardIsOpen(!cardIsOpen)
    }

    const status = isFilled ? FilledStar : EmptyStar;
    
    return (
        <div 
            href="#" 
            className={`${
              cardIsOpen ? 
               'z-40 flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-5xl hover:bg-opacity-50 dark:border-gray-700 dark:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-opacity-80 transition-all duration-500 cursor-pointer '
               : 'z-40 flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-lg hover:bg-opacity-50 dark:border-gray-700 dark:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-opacity-80 transition-all duration-300 cursor-pointer '
            }relative m-8 `}      
            onClick={toggleCard}
            
        >  

            <img 
                className="object-cover w-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg " 
                src={props.image} 
                alt={props.name} 
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                    {props.description.slice(0, cardIsOpen ? props.description.length : 70)}{cardIsOpen ? '' : '...'}
                </p>
            <div className="text-sm text-gray-600 dark:text-white">
                {cardIsOpen && (
                    <>
                    <strong>Ingredients:</strong>{' '}
                    {props.ingredients} <br />
                    </>
                )} 

                <button
                    onClick={() => props.onDelete()}
                    className=" bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg focus:outline-none "
                    style={{position: "absolute", bottom:16, right: 6}}
                    >
                    Delete
                </button>

                {cardIsOpen && (
                    <div className="m-3">
                    <strong>Preparation:</strong>{' '}
                    {props.prepare} <br />
                    </div>
                )}                    
            </div>

            <img 
                className="toggle-star" 
                onClick={toggle} 
                src={status} 
                width="50px" 
                height="50px" 
                alt="Toggle Star"
                style={{position: "absolute", top: 10 , right: 10}}
            />

          </div>  
        </div>
    );
    
}

export default Card

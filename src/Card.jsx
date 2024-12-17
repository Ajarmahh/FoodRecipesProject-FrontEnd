import { useState } from "react"
import FilledStar from "../public/images/filled-star.png"
import EmptyStar from "../public/images/star.png"


function Card(props){
    const[isFilled, setIsFilled] = useState(true);
    function toggle(){
        setIsFilled(!isFilled)
    };

    const status = isFilled ? FilledStar : EmptyStar;

    return(
        <div className="card">
                {props.image}
                <strong>Title: </strong>{ props.name} <br></br>
                <strong>Description: </strong>{ props.description} <br></br>
                <strong>Ingredients: </strong>{props.ingredients} <br></br>
                <strong>Preparation: </strong>{props.preparation} <br></br>
                <img className="toggle-star" onClick={toggle} src={status} width='50px' height='50px'/>                                    
        </div>
    )
}

export default Card

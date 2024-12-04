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
        <>
          
            Title: { props.title} <br></br>
            Description: { props.text} <br></br>
            <img onClick={toggle} src={status} width='50px' height='50px'/>
            
        </>
    )
}

export default Card

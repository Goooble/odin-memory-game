import "./css/card.css"
import { useState } from "react"
function Card({id}){
    const [isSelected, setSelected] = useState(false)
    return (
        <button onClick={()=>setSelected(true)} className={"card " + isSelected}>
            <p>{id}</p>
        </button>
        
    )
}

export default Card
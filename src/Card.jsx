import "./css/card.css"
import { useState } from "react"
function Card({id}){
    const [isSelected, setSelected] = useState(false)
    return (
        <button className="card">
            <p>{id}</p>
        </button>
        
    )
}

export default Card
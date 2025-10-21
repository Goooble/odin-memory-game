import "./css/card.css"

function Card({id, setScore, score, isSelected, setSelected}){
    function handleClick(){
        if(isSelected[id]){
            setScore(0);
            setSelected(new Array(10).fill(false))
        }else{
            isSelected[id]?setScore(0):setScore(score+1)
        const array = [...isSelected];
        array[id] = true;
        setSelected(array)   
        }
        
    }
    return (
        <button onClick={handleClick} className={"card " + isSelected[id]}>
            <p>{id}</p>
        </button>
        
    )
}



export default Card
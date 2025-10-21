import "./css/card.css";

function Card({
  id,
  setScore,
  score,
  isSelected,
  setSelected,
  pokemon,
  isWon,
  setWon,
}) {
  function handleClick() {
    console.log(score);
    if (isSelected[id]) {
      setScore(0);
      setSelected(new Array(10).fill(false));
    } else {
      isSelected[id] ? setScore(0) : setScore(score + 1);
      const array = [...isSelected];
      array[id] = true;
      setSelected(array);
    }
    if (score === 10) {
      console.log("jel");
      setWon(isWon + 1);
    }
  }
  let className = "card " //+ isSelected[id];//to test the game visual reference
  score === 10 && (className += " won");

  return (
    <button onClick={handleClick} className={className}>
      {pokemon.path ? <img src={pokemon.path} /> : <p>Loading...</p>}

      <p>{pokemon.name}</p>
    </button>
  );
}

export default Card;

import { useState } from "react";
import { gameCards } from "./imgObj";
import shuffle from "../shuffle";
import ScoreBoard from "./scoreBoard";
export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedImgs, setSelectedImgs] = useState([]);
  const defaultCards = [...gameCards];
  let cardList = defaultCards.map((card) => {
    return (
      <div key={card.id} className="gameCard">
        <img
          onClick={() => handleImgClick(card.id)}
          className="image"
          src={card.url}
        ></img>
        <h2>{card.name}</h2>
      </div>
    );
  });

  function handleImgClick(id) {
    if (!selectedImgs.includes(id)) {
      setSelectedImgs([...selectedImgs, id]);
      setScore((prev) => prev + 1);
      shuffle(gameCards);
    } else {
      if (score > bestScore) {
        setBestScore(score);
        setDefaults();
      } else {
        setDefaults();
      }
    }
  }
  function setDefaults() {
    setScore(0);
    setSelectedImgs([]);
  }

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore} />
      <div className="gameCards">{cardList}</div>
    </>
  );
}

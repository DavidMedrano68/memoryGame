export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreBoard">
      <div className="score">{"Score: " + score}</div>
      <div className="bestScore">{"Best Score: " + bestScore}</div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";

function SortButton({
  current,
  toggleSort,
}: {
  current: boolean;
  toggleSort: () => void;
}) {
  return (
    <button style={{ marginTop: "20px" }} onClick={toggleSort}>
      Sort {current ? "descending" : "ascending"}
    </button>
  );
}

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isSortAsc, setIsSortAsc] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function toggleSort() {
    setIsSortAsc((prev) => !prev);
  }

  const moves = history.map((_, move) => {
    const moveAtRowCol = {
      row: Math.floor(move / 3) + 1,
      col: Math.floor(move % 3) + 1,
    };
    const description =
      move > 0
        ? "Go to move (" + moveAtRowCol.row + ", " + moveAtRowCol.col + ")"
        : "Go to game start";
    return (
      <li key={move}>
        {move === currentMove ? (
          "You are at move #" + move
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const movesSorted = isSortAsc ? moves : moves.reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <SortButton current={isSortAsc} toggleSort={toggleSort} />
      <div className="game-info">
        <ol>{movesSorted}</ol>
      </div>
    </div>
  );
}

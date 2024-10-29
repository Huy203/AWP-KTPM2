type SquareProps = {
  value?: string;
  isWinner?: boolean;
  onSquareClick: () => void;
};

type BoardProps = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares: string[]) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }

  if (!squares.some((square) => square === null)) {
    return {
      winner: "draw",
      line: [],
    };
  }

  return null;
}

function Square({ value, isWinner, onSquareClick }: SquareProps) {
  return (
    <button
      className="square"
      style={{
        display: "flex",
        width: "40px",
        height: "40px",
        background: isWinner ? "blue" : "",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winnerInfo = calculateWinner(squares);
  let status;
  if (winnerInfo && winnerInfo.winner) {
    status = "Winner: " + winnerInfo.winner;
    if (winnerInfo.winner === "draw") {
      alert("Draw");
    }
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    console.log("hehe");
  }
  console.log("hehe2");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="status">{status}</div>
      {squares.map((_, i) => {
        return i % 3 === 0 ? (
          <div
            key={i}
            className="board-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {Array.from({ length: 3 }, (_, j) => {
              const index = i + j;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  isWinner={winnerInfo?.line.includes(index)}
                  onSquareClick={() => handleClick(index)}
                />
              );
            })}
          </div>
        ) : null;
      })}
    </div>
  );
}

import { useState } from "react";
import "../App.css";
import { motion, AnimatePresence, time } from "framer-motion";
import useTimer from "easytimer-react-hook";

function GlassBridge() {
  const numRows = 10;
  const [bridge, setBridge] = useState(generateBridge(numRows));
  const [playerPosition, setPlayerPosition] = useState({ row: 0, index: 0 });
  const [hasWon, setHasWon] = useState(false);
  const [brokenTiles, setBrokenTiles] = useState([]);
  const [timer, isTargetAchieved] = useTimer();
  const [numberOfTries, setNumberOfTries] = useState(0);

  function generateBridge(num) {
    const newBridge = [];

    for (let row = 0; row < num; row++) {
      const rowTiles = [];
      const safeIndex = Math.floor(Math.random() * 2);

      rowTiles[safeIndex] = "safe";
      rowTiles[1 - safeIndex] = "danger";

      newBridge.push(rowTiles);
    }

    return newBridge;
  }

  function handleTileClick(row, index) {
    if (row !== playerPosition.row + 1) return;
    if (row === 1) timer.start();

    const tiles = bridge[row];
    if (tiles[index] === "danger") {
      setBrokenTiles((prev) => [...prev, { row, index }]);
      setPlayerPosition({ row: 0, index: 0 });
      setNumberOfTries(numberOfTries + 1);
    } else {
      setPlayerPosition({ row, index });
      if (row === numRows - 1) {
        setHasWon(true);
        timer.pause();
      }
    }
  }

  function reset() {
    setBrokenTiles([]);
    setPlayerPosition({ row: 0, index: 0 });
    setHasWon(false);
    setBridge(generateBridge(numRows));
    setNumberOfTries(0);
    timer.stop();
  }

  return (
    <main className="game-container">
      <h1>
        <a href="https://fontmeme.com/squid-game-font/">
          <img
            src="https://fontmeme.com/permalink/250115/3923c8bab4b3dc0b954775151de9ccbc.png"
            alt="squid-game-font"
            border="0"
          />
        </a>
      </h1>
      <header className="header">
        <p>
          Tid: <span className="time">{timer.getTimeValues().toString()}</span>
        </p>
        <p>
          Antal försök: <span className="attempts">{numberOfTries}</span>
        </p>
      </header>
      <section className={hasWon ? "game-over show" : "game-over"}>
        {hasWon && (
          <>
            <h2 className="win">
              <a href="https://fontmeme.com/squid-game-font/">
                <img
                  src="https://fontmeme.com/permalink/250115/50295187ba7f4e3ca36b61aac5d61499.png"
                  alt="squid-game-font"
                  border="0"
                />
              </a>
            </h2>
            <header className="header">
              <p>
                Tid:{" "}
                <span className="time">{timer.getTimeValues().toString()}</span>
              </p>
              <p>
                Antal försök: <span className="attempts">{numberOfTries}</span>
              </p>
            </header>
            <button className="button" onClick={reset}>
              New game
            </button>
          </>
        )}
      </section>
      <section className="bridge">
        {bridge.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((tile, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  className={`tile ${
                    playerPosition.row === rowIndex &&
                    playerPosition.index === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleTileClick(rowIndex, index)}
                  initial={{ scale: 1 }}
                  animate={
                    brokenTiles.some(
                      (t) => t.row === rowIndex && t.index === index
                    )
                      ? { scale: 0, opacity: 0 }
                      : { scale: 1 }
                  }
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {playerPosition.row === rowIndex &&
                  playerPosition.index === index
                    ? "X"
                    : ""}
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

export default GlassBridge;

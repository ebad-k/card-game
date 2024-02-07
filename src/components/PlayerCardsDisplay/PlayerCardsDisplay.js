import React from "react";
import "./PlayerCardsDisplay.css";

const PlayerCardsDisplay = ({ playersCards, winner }) => {
  return (
    playersCards.length > 0 && (
      <div>
        <h2 className="players-cards-text">Players' Cards</h2>
        <table className="players-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Cards</th>
            </tr>
          </thead>
          <tbody>
            {playersCards.map((player, index) => (
              <tr key={index} className={winner === index + 1 ? "winner-row" : ""}>
                <td>Player {index + 1}</td>
                <td>{player.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default PlayerCardsDisplay;

import React from "react";
import "./WinnerDisplay.css";

const WinnerDisplay = ({ winner, winningCards }) => {
  return (
    winner && (
      <div>
        <h2 className="winner-text">Winner</h2>
        <p className="winner-player">Player {winner}</p>
        <h3 className="winning-cards-text">Winning Cards</h3>
        <ul className="winning-cards-list">
          {winningCards.map((card, index) => (
            <li key={index}>{card}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default WinnerDisplay;

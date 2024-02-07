import React, { useState } from "react";
import Button from "../Button/Button";
import WinnerDisplay from "../WinnerDisplay/WinnerDisplay";
import PlayerCardsDisplay from "../PlayerCardsDisplay/PlayerCardsDisplay";
import { shuffleDeck, distributeCards, evaluateWinner } from "../../utils/gameUtils";
import "./CardGame.css";

const CardGame = () => {
  const [winner, setWinner] = useState(null);
  const [winningCards, setWinningCards] = useState([]);
  const [playersCards, setPlayersCards] = useState([]);

  const handleStartGame = () => {
    const cardDeck = [
      "2@", "2#", "2^", "2*",
      "3@", "3#", "3^", "3*",
      "4@", "4#", "4^", "4*",
      "5@", "5#", "5^", "5*",
      "6@", "6#", "6^", "6*",
      "7@", "7#", "7^", "7*",
      "8@", "8#", "8^", "8*",
      "9@", "9#", "9^", "9*",
      "10@", "10#", "10^", "10*",
      "J@", "J#", "J^", "J*",
      "Q@", "Q#", "Q^", "Q*",
      "K@", "K#", "K^", "K*",
      "A@", "A#", "A^", "A*"
    ];
    const shuffledDeck = shuffleDeck([...cardDeck]);
    const distributedPlayers = distributeCards(shuffledDeck);
    const { winner, winningCards } = evaluateWinner(distributedPlayers);

    setWinner(winner);
    setWinningCards(winningCards);
    setPlayersCards(distributedPlayers);
  };

  return (
    <div className="container">
      <Button onClick={handleStartGame} />
      <WinnerDisplay winner={winner} winningCards={winningCards} />
      <PlayerCardsDisplay playersCards={playersCards} winner={winner} />
    </div>
  );
};

export default CardGame;

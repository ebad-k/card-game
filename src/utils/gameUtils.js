export const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };
  
  export const distributeCards = (shuffledDeck) => {
    const players = [[], [], [], []];
    shuffledDeck.forEach((card, index) => {
      const playerIndex = index % 4;
      players[playerIndex].push(card);
    });
    return players;
  };
  
  export const evaluateWinner = (players) => {
    let maxCount = 0;
    let winner = null;
    let winningCards = [];
  
    players.forEach((player, index) => {
      const countMap = {};
      player.forEach(card => {
        const key = card.substring(0, card.length - 1);
        countMap[key] = (countMap[key] || 0) + 1;
      });
  
      const maxKey = Object.keys(countMap).reduce((a, b) => countMap[a] > countMap[b] ? a : b);
      const maxCountCurrentPlayer = countMap[maxKey];
  
      if (maxCountCurrentPlayer > maxCount || winner === null) {
        maxCount = maxCountCurrentPlayer;
        winner = index + 1;
        winningCards = [maxKey];
      } else if (maxCountCurrentPlayer === maxCount) {
        if (maxKey > winningCards[0]) {
          winner = index + 1;
          winningCards = [maxKey];
        } else if (maxKey === winningCards[0]) {
          winningCards.push(maxKey);
        }
      }
    });
  
    return {
      winner,
      winningCards
    };
  };
  
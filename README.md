
## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisties

1. git clone https://github.com/s-justina/card-game.git - clone repository
2. npm install - install all dependencies


### Run game
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view game in the browser.

### Game rules:
"Oczko" – a simple card game where you draw cards until the value of your score (based on cards) is as close to (but not greater than) 21.
          The player draw cards from the deck until decides that he/she not want any more cards or gets a score of 21 or greater.
          A sum greater than or equal to 22 means you lose. The exception to this rule is the "Persian-eyelet" (two aces). Persian eyelet always means win.
          If neither player gets a score of 21, the one closest to that value wins.

### Single player
In this mode you will play with computer. Game start by player drawing two cards. 
In next rounds player draw single card or can resign from the game. Game is continued until one of players(player or bot) wins.
Once game is finished, player can see game result.

### Multiplayer
In this mode you will play with three opponents. First, you and your opponents have to set nicknames, then the game begins and each player draw two cards in their first move. 
In next round player can draw single card of decide to resign. Game is continued until one of players(player or bot) wins. Once game is finished, players can see their result.

### Thanks & enjoy the game!

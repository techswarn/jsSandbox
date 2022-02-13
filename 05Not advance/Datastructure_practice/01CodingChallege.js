const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //1
//   const player1 = game.players[0];
//   const player2 = game.players[1];
//   console.log(player1);
//   console.log(player2)

  //Instead of above do array destructuring

  const [players1, players2] = game.players
//   console.log(players1)
//   console.log(players2)

  //2
  const [gk, ...fieldPlayers] = players1;
  console.log(gk)
  console.log(fieldPlayers)

  //3
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers)

  //4
  const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
  console.log(players1final)

  const {team1, x : draw, team2}= game.odds;
  console.log(team1);
  console.log(draw);
  console.log(team2)

  //5
  const printGoals = (...players) => {
    console.log(players)
    console.log(`${players.length} goals were scored`);
  }

  printGoals('Davies', 'Muller', 'Lewandowski','Kimmich')
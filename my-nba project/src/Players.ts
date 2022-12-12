// class Players {
//   players: Player[];

//   constructor() {
//     this.players = [];
//   }

//   async get_players_by_team_and_year(team: string, year: string) {
//     let players = await $.get(`/players/${team}/${year}`);
//     console.log(players);
//     const playersList = [];
//     let player_card_data = players.map((player: any) => {
//       return {
//         first_name: player["firstName"],
//         last_name: player["lastName"],
//         jersey_number: player["jersey"],
//         position: player["pos"],
//       };
//     });
//     console.log(player_card_data);
//   }
// }

// let playersHeat = new Players();

// playersHeat.get_players_by_team_and_year("heats", "2020");

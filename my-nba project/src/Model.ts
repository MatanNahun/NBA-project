class Model {
  players: Player[];
  dreamTeam: Player[];
  playerStatistics: {};

  constructor() {
    this.players = [];
    this.dreamTeam = [];
    this.playerStatistics = {};
  }

  async getPlayersData(team: string, year: string) {
    const checkbox_input = document.getElementById(
      "checkbox"
    ) as HTMLInputElement;

    let URL: string = `/players/${team}/${year}`;
    URL = checkbox_input?.checked ? URL + "?dateOfBirth=true" : URL;

    let playersData = await $.get(URL);
    for (let i = 0; i < playersData.length; i++) {
      this.players.push(
        new Player(
          playersData[i]["firstName"],
          playersData[i]["lastName"],
          playersData[i]["jersey"],
          playersData[i]["pos"]
        )
      );
    }
    console.log(this.players);
  }

  async addPlayerToDreamTeam(playerToAdd: Player) {
    $.ajax({
      url: "/dreamTeam",
      type: "POST",
      data: JSON.stringify(playerToAdd),
    });
  }

  async deletePlayerFromDreamTeam(playerToDelete: Player) {
    $.ajax({
      url: "/dreamTeam",
      type: "DELETE",
      data: JSON.stringify(playerToDelete),
    });
  }

  async getDreamTeam() {
    let dreamTeamData = await $.get("/dreamTeam");
    for (let i = 0; i < dreamTeamData.length; i++) {
      this.dreamTeam.push(
        new Player(
          dreamTeamData[i]["firstName"],
          dreamTeamData[i]["lastName"],
          dreamTeamData[i]["jerseyNumber"],
          dreamTeamData[i]["position"]
        )
      );
    }
  }

  async getStatitsticsPlayer(lastName: string, firstName: string) {
    let statistics = await $.get(`/players/stats/${lastName}/${firstName}`);
    this.playerStatistics = statistics;
  }
}

async function show() {
  let res = await $.get("/sanity");
  console.log(res);
}

async function show_players() {
  let res = await $.get("/players/lakers/2020");
  console.log(res);
}

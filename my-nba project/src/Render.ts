class Render {
  renderPlayers(players: Player[]): void {
    const sourcePlayers = $("#results-template").html();
    const template = Handlebars.compile(sourcePlayers);
    let newHTML = template({ players });
    $(".players-results").empty();
    $(".players-results").append(newHTML);
  }

  renderDreamTeam(dreamTeam: Player[]): void {
    const sourceDreamTeam = $("#results-dreamTeam-template").html();
    const template = Handlebars.compile(sourceDreamTeam);
    let newHTML = template({ dreamTeam });
    $(".players-results").empty();
    $(".players-results").append(newHTML);
  }

  renderPlayerStatistics(statistics: object, renderDestination: any): void {
    const sourceStatistics = $("#statistics-template").html();
    const template = Handlebars.compile(sourceStatistics);
    let newHTML = template(statistics);
    renderDestination.empty();
    renderDestination.append(newHTML);
  }

  removePlayerStatistics(renderDestination: any): void {
    renderDestination.empty();
  }
}

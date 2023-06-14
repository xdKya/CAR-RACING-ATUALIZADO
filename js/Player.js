class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    // leia os dados e armazene o valor de playerCount
    var playerRef = database.ref("playerCount");
    playerRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    // atualize o playerCount
    database.ref("/").update({
      playerCount: count,
    });
  }
}

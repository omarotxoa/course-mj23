function Player(name, playerClass, level) {
    this.name = name;
    this.playerClass = playerClass;
    this.level = level;
}

const player1 = new Player('Morv', 'warrior', 1);

console.log(player1);
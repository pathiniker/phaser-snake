// During the setup we included the Phaser library in our HTML file.
// This gives us a global object called Phaser.
// Through it, we can access the library’s methods and functions for building games.

var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('Menu', Menu);

// Adding the Game state.
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);

game.state.start('Menu');

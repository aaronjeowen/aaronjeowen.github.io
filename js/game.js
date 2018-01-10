var game = new Phaser.Game(1280, 808, Phaser.AUTO,'gameDiv');
// explanaion of states from from http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement written by 'chad'
game.state.add('boot',bootstate);//create a state for each screen
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',playState);
game.state.add('win',winState);
game.state.add('death',deathState);
game.state.add('shop',shopState);
var mob = [];// mob is the array where enemys will be added to, this should be changed to a group
var slimeMob = [];//array for slimes
var colideLayer;//
var settings;
var numOfEnemies;
var speed;
var damage;
var myHealthBar;
var slow = false;
var playerHealth= 100;
var highScore;
var settingCode= 0; //used to load data from settings.json - sets number of enemies and incremental difficulty
var score =0;
var seconds;
var minutes;
var nextBool = false;
game.state.start('boot');

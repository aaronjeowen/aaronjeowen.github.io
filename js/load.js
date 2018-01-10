var loadState = {
  preload: function() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    var loadingLabel = game.add.text(80, 150, 'loading...', {
      font: '30px Courier',
      fill: 'fff'
    });
    game.load.tilemap('map1', 'assets/Maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('map2', 'assets/Maps/level2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('map3', 'assets/Maps/level3.json', null, Phaser.Tilemap.TILED_JSON);
    //all assets are from kennys assets topdown shooter free package https://kenney.nl/assets/topdown-shooter
    game.load.image('tiles', 'assets/tilesheet_complete.png');
    game.load.spritesheet('gamepad', 'assets/gamepad/gamepad_spritesheet.png', 100, 100);
    game.load.image('player', 'assets/player1.png', 56, 47);
    game.load.image('enemy', 'assets/enemy.png', 56, 47);
    game.load.image('slime', 'assets/slime.png', 103.102);
    game.load.image('buttonSMG', 'assets/buySmg.png');
    //end of kenny assets
    game.load.image('bullet', 'assets/bullet.png'); // bullet create by Master484 from https://opengameart.org/content/bullet-collection-1-m484
    game.load.audio('gunShot', 'assets/sounds/gunShot.mp3'); // sound obtained under standard license from //https://www.zapsplat.com/music/gun-cocking-berretta-9mm/
    game.load.audio('zombieDeath', 'assets/sounds/zombieDeath.mp3') // sound obtained under standard license from https://www.zapsplat.com/music/monster-grunt-or-groan-as-in-pain-or-death-2/
    game.load.json('settings', 'assets/Settings/settings.json'); //setting to change levels
    game.time.advancedTiming = true;
  },
  create: function() {
    game.stage.backgroundColor = "#eaefee";
    game.state.start('menu');
  }
};

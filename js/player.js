class Player {
  constructor() {
    const player = game.add.sprite(100,500,'player');
    player.anchor.setTo(0.5,0.5);
    player.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    player.enableBody = true;
    player.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.physics.enable(player)
    player.body.collideWorldBounds = true;
    player.health = 0;
    player.body.drag.set(100);
    player.body.maxVelocity.set(300);
    player.lastAngle = -90;
    this.sprite= player;
    this.sprite.speed = speed;
  }

  point(){
    this.sprite.rotation = game.physics.arcade.angleToPointer(this.sprite);
  }
}

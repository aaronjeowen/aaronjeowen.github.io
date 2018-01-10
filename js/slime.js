class Slime {
  constructor(x,y) {
    const slime = game.add.sprite(x,y,'slime');
    slime.anchor.setTo(0.5,0.5);
    slime.enableBody = true;
    slime.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(slime, Phaser.Physics.ARCADE);
    game.physics.enable(slime)
    this.sprite= slime;
  }
}

class Enemy {

  constructor(doorx,doory) {
    const enemy = game.add.sprite(doorx,doory,'enemy');
    enemy.anchor.setTo(0.5,0.5);
    enemy.enableBody = true;
    enemy.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    game.physics.arcade.enable(enemy);
    enemy.body.collideWorldBounds = true;
    enemy.body.bounce.x =1;
    enemy.body.bounce.y =1;
    enemy.health= settings[settingCode].enemyHealth;
    enemy.healthbar = new HealthBar(game, {x:0,y:0});
    enemy.damageAmount =1;
    this.sprite= enemy;
  }

move(){
//if(world.player.sprite){
game.physics.arcade.moveToObject(this.sprite, world.player.sprite,100);
//}else {
//  this.sprite.velocity.x =0;
  //this.sprite.velocity.y =0;

//}
}

lookAtPlayer(){
  //this.sprite.rotation = game.physics.arcade.angleTo(world.player.sprite);
  this.sprite.rotation = Math.atan2(world.player.sprite.y - this.sprite.y, world.player.sprite.x - this.sprite.x);
}


}
function hitByBullet(enemy){
  console.log(enemy.health);
  //enemy.health - world.player.sprite.damageAmount;
  console.log(enemy.health);

      console.log('into');
  //enemy.kill();
  numOfEnemies--;
  console.log(numOfEnemies);


}

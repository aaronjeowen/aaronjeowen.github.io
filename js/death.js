var deathState= {
create: function() {

game.stage.backgroundColor = "#fff";
var deathBox = game.add.bitmapData(500, 300);//create button with text to allow user to return to menu and play again
deathBox.ctx.beginPath();
deathBox.ctx.rect(0, 0, 380, 200);
deathBox = game.add.button(game.world.centerX , game.world.centerY, deathBox,  goToMenu, this);
deathBox.anchor.setTo(0.5, 0.5);
deathText = game.add.text(deathBox.centerX, deathBox.centerY, "You have died \n Click here to return to menu", {
  font: "64px Arial",
  fill: "#000",
  align: "center"
});
deathText.anchor.setTo(0.5, 0.5);
},
update:function(){

},
render:function(){

}
}
function goToMenu() {
  //reset values and return to menu
  playerHealth =100;
  fireRate = 500; // set fire rate
  enemySpeed = 100; // set enemy speed
  bulletDamage =20; // set starting bullet damage
  mob=[];
  game.state.start('menu');
}

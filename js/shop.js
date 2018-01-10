var buyHealthText;
var buyBltDmgText
var displayText;
var buyBltSpeedText
var shopState = {
  create: function() {
    game.stage.backgroundColor = "#3D4F60";
    displayText = game.add.text(game.world.centerX, game.world.centerY + 300, "", {
      font: "32px Arial",
      fill: "#9EADBB",
      align: "center"
    }); //set alert text blank ready to be filled
    displayText.anchor.set(0.5);
    this.showScore = game.add.text(game.world.width-200, 100, "Score ="+score, {
      font: "32px Arial",
      fill: "#fff",
      align: "center"
    });
    this.showScore.anchor.setTo(0.5,0.5);

    var buyBltDmg = game.add.bitmapData(380, 200);
    buyBltDmg.ctx.beginPath();
    buyBltDmg.ctx.rect(0, 0, 380, 200);
    buyBltDmg.ctx.fillStyle = '#212D39';
    buyBltDmg.ctx.fill();
    buyBltDmg = game.add.button(game.world.centerX + 380 / 2 + 50, game.world.centerY - 100, buyBltDmg, purchaseBltDmg, this);
    buyBltDmg.anchor.setTo(0.5, 0.5);
    buyBltDmgText = game.add.text(buyBltDmg.centerX, buyBltDmg.centerY, "Increase Bullet Damage\n Current Damage = " + bulletDamage + "\nCost: 100", {
      font: "32px Arial",
      fill: "#9EADBB",
      align: "center"
    });
    buyBltDmgText.anchor.setTo(0.5, 0.5);


    var buyBltSpeed = game.add.bitmapData(380, 200);
    buyBltSpeed.ctx.beginPath();
    buyBltSpeed.ctx.rect(0, 0, 380, 200);
    buyBltSpeed.ctx.fillStyle = '#212D39';
    buyBltSpeed.ctx.fill();
    buyBltSpeed = game.add.button(game.world.centerX - 380 / 2 - 50, game.world.centerY - 100, buyBltSpeed, purchaseBltSpeed, this);
    buyBltSpeed.anchor.setTo(0.5, 0.5);
    buyBltSpeedText = game.add.text(buyBltSpeed.centerX, buyBltSpeed.centerY, "Decrease Bullet Delay\n Current Delay = " + fireRate + "\nCost: 80", {
      font: "32px Arial",
      fill: "#9EADBB",
      align: "center"
    });
    buyBltSpeedText.anchor.setTo(0.5, 0.5);

    //health
    var buyHealth = game.add.bitmapData(380, 200);
    buyHealth.ctx.beginPath();
    buyHealth.ctx.rect(0, 0, 380, 200);
    buyHealth.ctx.fillStyle = '#212D39';
    buyHealth.ctx.fill();
    buyHealth = game.add.button(game.world.centerX, game.world.centerY + 150, buyHealth, purchaseHealth, this);
    buyHealth.anchor.setTo(0.5, 0.5);
    buyHealthText = game.add.text(buyHealth.centerX, buyHealth.centerY, "Refill Health \n Current Health = " + world.player.sprite.health + " \n Cost: 50", {
      font: "32px Arial",
      fill: "#9EADBB",
      align: "center"
    });
    buyHealthText.anchor.setTo(0.5, 0.5);

    var nextLvl = game.add.bitmapData(200, 100);
    nextLvl.ctx.beginPath();
    nextLvl.ctx.rect(0, 0, 380, 200);
    nextLvl.ctx.fillStyle = '#212D39';
    nextLvl.ctx.fill();
    nextLvl = game.add.button(game.world.width - 200, game.world.height - 100, nextLvl, startNextLvl, this);
    //nextLvl.anchor.setTo(0.5, 0.5);
    var nextLvlText = game.add.text(nextLvl.centerX, nextLvl.centerY, "Next Level", {
      font: "32px Arial",
      fill: "#9EADBB",
      align: "center"
    });
    nextLvlText.anchor.setTo(0.5, 0.5);
  },

  update: function() {

    },

  render: function() {}
}

function purchaseBltDmg() {
  if (score >= 100) {
    score -= 100;
    bulletDamage += 10;
    buyBltDmgText.setText("Increase Bullet Damage\n Current Damage = " + bulletDamage + "\nCost: 100");
    this.showScore.setText("Score ="+score);
  } else {
    displayText.setText("Not enough money");
  }
}

function purchaseBltSpeed() {
  if (score >= 80) {
    score -= 80;
    fireRate -= 50;
    buyBltSpeedText.setText("Decrease Bullet Delay\n Current Delay = " + fireRate + "\nCost: 80");
    this.showScore.setText("Score ="+score);
  } else {
    displayText.setText("Not enough money");
  }
}

function purchaseHealth() {
  if (world.player.sprite.health < 99) {
    //if health is lower than full
    if (score >= 50) {
      //refill health and remove points
      playerHealth = 100;
      score -= 50;
      buyHealthText.setText("Refill Health \n Current Health = " + playerHealth + " \n Cost: 50");
      this.showScore.setText("Score ="+score);
    } else {
      displayText.setText("Not enough money");
    }
  } else {
    //display text letting user know their health is > 99
    displayText.setText("Health is already full");
  }
}

function startNextLvl() {
  //reset enemy array, increase setting code for next level and start next level
  mob = [];
  game.state.start("play");

}

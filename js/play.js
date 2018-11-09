var playState = {
  create: function() {
    game.stage.backgroundColor = "#fff";
    nextBool = false; //used to stop update changing level too quickly
    input = new Input();
    world = new World();
    myHealthBar = new HealthBar(this.game, { //create healthbar for player, healthbar.js created by Belahcen Marwane  https://github.com/bmarwane/phaser.healthbar/blob/master/HealthBar.standalone.js
      width: 200,
      height: 20,
      x: 120,
      y: 40
    });
    myHealthBar.setPercent(world.player.sprite.health); //add healthbar to players health
    input.add(Phaser.Keyboard.W, function() { //create input for player to play
      world.player.sprite.body.velocity.y = -speed;
    });
    input.add(Phaser.Keyboard.A, function() {
      world.player.sprite.body.velocity.x = -speed;
    });
    input.add(Phaser.Keyboard.S, function() {
      world.player.sprite.body.velocity.y = +speed;
    });
    input.add(Phaser.Keyboard.D, function() {
      world.player.sprite.body.velocity.x = +speed;
    });
    input.add(Phaser.Keyboard.SPACEBAR, function() {
      weapon.fire();

    });
    timer = game.time.create(false); //start timer to see how quickly the player can play the game
    timer.loop(1000, updateTimer, this);
    timer.start();
    if (game.device.android || game.device.iOS) { // add virtual controls if player is on mobile device, plug for this was created by Shawn Hymel -https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad/tree/master/js
      this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
      this.joystick = this.gamepad.addJoystick(100, 708, 1.2, 'gamepad');
      this.button = this.gamepad.addButton(1100, 708, 1.0, 'gamepad');
    }

  },

  update: function() {

    slimeMob.forEach(function(slime, index) {
      //check to see if player walks over slime patch, call slowPlayer() if they do to slow them
      game.physics.arcade.overlap(world.player.sprite, slime.sprite, this.slowPlayer, null, this);
    })

    world.player.point(); //point player in direction of the mouse
    game.physics.arcade.collide(world.player.sprite, world.base); //collide player with play area bounds
    game.physics.arcade.collide(world.player.sprite, world.obj); //collide player with objects inside play area
    if (world.player.sprite.health == 0) { //call death screen
      game.state.start('death');
    }
    playerHealth = world.player.sprite.health; //update healthbar to match player health - note the healthbar is not the players health
    game.physics.arcade.collide(weapon.bullets, world.base, wallBullet, null, this); //collide bullets with play area
    game.physics.arcade.collide(weapon.bullets, world.obj, wallBullet, null, this); //collide bullets with objects inside play area


    if (game.device.android || game.device.ios) { //use onscreen controls if on mobile
      if (this.joystick.properties.inUse) {
        world.player.sprite.angle = this.joystick.properties.angle; //change angle of player depending on how the joystick is orientainted,
        world.player.sprite.lastAngle = world.player.sprite.angle;
      } else {
        world.player.sprite.angle = world.player.sprite.lastAngle;
        world.player.sprite.body.velocity.x = 0; //stop player from contining velocity when controls are not in use
        world.player.sprite.body.velocity.y = 0;
      }
      world.player.sprite.body.acceleration.x = 2 * this.joystick.properties.x;
      world.player.sprite.body.acceleration.y = 2 * this.joystick.properties.y;
      if (this.button.isDown) {
        weapon.fire();
      }
    } else { //desktop needs to know if mobile controls are used, if they arent then set these to stop player when no input
      world.player.sprite.body.velocity.x = 0;
      world.player.sprite.body.velocity.y = 0;
    }

    input.update();

    if (!slow) {
      //when slow timer has ended, set speed to level speed
      speed = settings[settingCode].speed;
    }

    if (mob.length != 0) {
      mob.forEach(function(enemy, index) { //loop through enemy array
        game.physics.arcade.collide(enemy.sprite, world.obj); //collide with objects in the world
        game.physics.arcade.collide(weapon.bullets, enemy.sprite, this.collideDetect, null, this); //check if a bullet has hit a enemy
        game.physics.arcade.collide(world.player.sprite, enemy.sprite, this.hitPlayer, null, this); //check if an enemy is hitting the player
        enemy.sprite.healthbar.setPosition(enemy.sprite.x, enemy.sprite.y - 20); //update enemy healthbar
        enemy.sprite.healthbar.setPercent(enemy.sprite.health, 2); //set perecent of the enemy health to match healthbar
        enemy.lookAtPlayer(); //
        if (numOfEnemies == 0 && nextBool == false) { //when all dead
          nextBool = true; //flip bool to stop skipping of levels - update is called very quicly and this if can be called more than once if this is not set
          settingCode++; //increment setting code for next level
          if (settingCode == 5 || settingCode == 10 || settingCode == 15) { //if player has reached the end of thier difficulty levels call the win page, else send them shopping for some goodies
            game.state.start("win");
          } else {
            game.state.start("shop");
          }
        }
        enemy.move(); //move the enemy at last
      })
    }
  },

  render: function() {
    game.debug.text(minutes + ' : ' + seconds, 64, 64); //show how long the player has been playing for this attempt

  }
}

function spawnEnemies() {
  var k = settings[settingCode].numberOfDoors; //get number of doors for this level
  var j = Math.floor(Math.random() * k); //choose random number from number of doors
  enemy = new Enemy(settings[settingCode].doorX[j], settings[settingCode].doorY[j]); //spawn an enemy at chosen random door
  mob.push(enemy); //add enemy to array
}

function slowPlayer() {
  slow = true;
  speed = 150; //reduce speed of player
  setTimeout(function() {
    slow = false;
  }, 3000);
}

function hitPlayer(player, enemy) {
  world.player.sprite.damage(enemy.damageAmount); //damge player with enemy damage amout
  myHealthBar.setPercent(world.player.sprite.health, 1);
}

function collideDetect(enemy, bullet) {
  enemy.damage(weapon.damage); //damage the enemy that was hit
  destroy(bullet);
  if (enemy.health <= 0) {
    enemy.healthbar.kill();
    game.sound.play('zombieDeath');
    score += 20;
    world.scoreText.setText("Score: " + score);
    numOfEnemies--;
  }
}

function updateTimer() {
  seconds++;
  if (seconds > 60) {
    seconds = 0;
    if (minutes < 9) {
      minutes++;
      minutes = "0" + minutes;
    } else {
      minutes++;
    }
  }
  if (minutes == 0) {
    minutes = "00"
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
}

function wallBullet(bullet) {
  destroy(bullet); //get rid of that pesky bullet that didn't hit an enemy, that's some poor shooting from you
}

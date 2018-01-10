var finalTime;
var highScoreText;
var winState = {
  create: function() {
    //highscore using localStorage help from shohan4556 --http://www.html5gamedevs.com/topic/17410-localstorage-in-phaser/
    game.stage.backgroundColor = "#bcbcbc";

    finalTime = minutes + seconds;
    if (settingCode == 5) {
      if (localStorage.getItem("easyhighscore") !== null) {
        if (finalTime < localStorage.getItem("easyhighscore")) {
          // player has beeten the fastest time, update fastest time in localStorage and display to screen
          //fastest time is stored as whole number, ie 00:30 would be stored as 0030 - this makes it easier to compare when checking highcore
          localStorage.setItem("easyhighscore", finalTime);
          var textNew = localStorage.getItem("easyhighscore");
          //spliceing text help from user113716 from StackOverflow, link to answer here https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index
          //spliceing text is needed to add ":" to the number stored
          String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
          };
          var result = textNew.splice(2, 0, ":");
           highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'New High Score ' + result, {
            font: '50px Arial',
            fill: '#000'
          });
        } else {
          // no new fastest time, display fastest time and players time
          var textNew = localStorage.getItem("easyhighscore");
          String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
          };
          var result = textNew.splice(2, 0, ":");
           highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'No new quickest time\nQuickest time is ' + result + "\nYour time is " + minutes + ":" + seconds, {
            font: '50px Arial',
            fill: '#000'
          });
        }
      }else {
        //new fastest time when there was no fastest time to begin with
        localStorage.setItem("easyhighscore", finalTime);
        var textNew = localStorage.getItem("easyhighscore");
        String.prototype.splice = function(idx, rem, str) {
          return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        var result = textNew.splice(2, 0, ":");
        var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'New High Score ' + result, {
          font: '50px Arial',
          fill: '#fff'
        });
      }
    }

    if (settingCode == 10) {
      if (localStorage.getItem("easyhighscore") !== null) {
        if (finalTime < localStorage.getItem("easyhighscore")) {
          // player has beeten the fastest time, update fastest time in localStorage and display to screen
          localStorage.setItem("easyhighscore", finalTime);
          var textNew = localStorage.getItem("easyhighscore");
          //spliceing text help from user113716 from StackOverflow, link to answer here https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index
          String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
          };
          var result = textNew.splice(2, 0, ":");
          var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'New High Score ' + result, {
            font: '50px Arial',
            fill: '#fff'
          });
        } else {
          // no new fastest time, display fastest time and players time
          var textNew = localStorage.getItem("easyhighscore");
          String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
          };
          var result = textNew.splice(2, 0, ":");
          var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'No new quickest time\nQuickest time is ' + result + "\nYour time is " + minutes + ":" + seconds, {
            font: '50px Arial',
            fill: '#fff'
          });
        }
      }else {
        //new fastest time when there was no fastest time to begin with
        localStorage.setItem("easyhighscore", finalTime);
        var textNew = localStorage.getItem("easyhighscore");
        String.prototype.splice = function(idx, rem, str) {
          return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        var result = textNew.splice(2, 0, ":");
        var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'New High Score ' + result, {
          font: '50px Arial',
          fill: '#fff'
        });
      }
    }

    if (settingCode == 15) {
      if (localStorage.getItem("easyhighscore") !== null) {
        if (finalTime < localStorage.getItem("easyhighscore")) {
          // player has beeten the fastest time, update fastest time in localStorage and display to screen
          localStorage.setItem("easyhighscore", finalTime);
          var textNew = localStorage.getItem("easyhighscore");
          //spliceing text help from user113716 from StackOverflow, link to answer here https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index
          String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
          };
          var result = textNew.splice(2, 0, ":");
          var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'New High Score ' + result, {
            font: '50px Arial',
            fill: '#fff'
          });
        } else {
          // no new fastest time, display fastest time and players time
          var textNew = localStorage.getItem("easyhighscore");
          String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
          };
          var result = textNew.splice(2, 0, ":");
          var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'No new quickest time\nQuickest time is ' + result + "\nYour time is " + minutes + ":" + seconds, {
            font: '50px Arial',
            fill: '#fff'
          });
        }
      }else {
        //new fastest time when there was no fastest time to begin with
        localStorage.setItem("easyhighscore", finalTime);
        var textNew = localStorage.getItem("easyhighscore");
        String.prototype.splice = function(idx, rem, str) {
          return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        var result = textNew.splice(2, 0, ":");
        var highScoreText = game.add.text(game.world.centerX -200, game.world.centerY-100, 'New High Score ' + result, {
          font: '50px Arial',
          fill: '#fff'
        });
      }
    }

    resetToHome = game.add.bitmapData(500, 100);//create button with text to allow user to return to menu and play again
    resetToHome.ctx.beginPath();
    resetToHome.ctx.rect(0, 0, 380, 200);
    resetToHome = game.add.button(1000 , 700, resetToHome,  goHome, this);
    resetToHome.anchor.setTo(0.5, 0.5);
    resetToHomeText = game.add.text(resetToHome.centerX, resetToHome.centerY, "Click here to return to menu", {
      font: "38px Arial",
      fill: "#000",
      align: "center"
    });
    resetToHomeText.anchor.setTo(0.5, 0.5);

  }

}
function goHome() {
  playerHealth =100;
  mob=[];
  fireRate = 500; // set fire rate
  enemySpeed = 100; // set enemy speed
  bulletDamage =20; // set starting bullet damage
  game.state.start('menu');
}

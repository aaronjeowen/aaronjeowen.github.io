var  menuState = {
  create: function () {
    settingCode= 0;//reset setting code and score
    score =0;
    seconds =0;
    minutes=0;
    var title = game.add.text(game.world.centerX,200,"Zombies",{font:'82px Arial',fill:'#0'});
    title.anchor.setTo(0.5,0.5);
    var easy = game.add.text(game.world.centerX-300,game.world.centerY,'Easy',{font:'50px Arial',fill:'#0'});
    easy.anchor.setTo(0.5,0.5);
    easy.inputEnabled = true;
    easy.events.onInputDown.add(function(){
    game.state.start('play');
    settingCode = 1;
    seconds = 00;//reset timer
    minutes = 00;
    });

    var medium = game.add.text(game.world.centerX,game.world.centerY,'Medium',{font:'50px Arial',fill:'#0'});
    medium.anchor.setTo(0.5,0.5);
    medium.inputEnabled = true;
    medium.events.onInputDown.add(function(){
    settingCode = 6;
    game.state.start('play');
    seconds = 00;
    minutes = 00;
    });

    var hard = game.add.text(game.world.centerX +300,game.world.centerY,'Hard',{font:'50px Arial',fill:'#0'});
    hard.anchor.setTo(0.5,0.5);
    hard.inputEnabled = true;
    hard.events.onInputDown.add(function(){
    game.state.start('play');
    settingCode = 11;
    seconds = 00;
    minutes = 00;

    });
    if (!game.device.ios || !game.device.andorid) {
      this.controlText = game.add.text(game.world.centerX,game.world.centerY+300,"WASD to move | SPACEBAR to shoot | MOUSE to look",{font:'25px Arial',fill:'#0'});
      this.controlText.anchor.setTo(0.5,0.5);
    }else {
      this.controlText = game.add.text(game.world.centerX,game.world.centerY+300,"Left joystick to move| Right button to shoot",{font:'25px Arial',fill:'#0'});
      this.controlText.anchor.setTo(0.5,0.5);
    }
  }
};

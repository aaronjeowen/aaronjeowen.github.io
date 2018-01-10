var fireRate = 500; // set fire rate
var nextFire = 0;
var enemySpeed = 100; // set enemy speed
var bulletDamage =20; // set starting bullet damage
var weapon;
var fireButton;
class World {
    constructor() {
        settings = game.cache.getJSON('settings'); //get setting from the json file
        speed = settings[settingCode].speed; // access the setting obj and pass the setting code - setting code is level number- then use dot notation to choose the value
        numOfEnemies = settings[settingCode].enemies;
        this.slimeNumber = settings[settingCode].slimeNumber;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //collision for layers -- credit to 'marvster' http://www.html5gamedevs.com/topic/5852-multi-layer-json-collide/?do=findComment&comment=35099
        this.map = game.add.tilemap(settings[settingCode].mapName);
        this.map.addTilesetImage('tilesheet_complete', 'tiles');
        this.map.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.base = this.map.createLayer('base');
        this.obj = this.map.createLayer('obj');
        this.base.resizeWorld();
        this.obj.resizeWorld();
        game.physics.arcade.enable(this.base);
        this.exclude=[];
        this.exclude = settings[settingCode].collision;
        this.map.setCollision(this.exclude, true, this.base);
        this.map.setCollisionByExclusion([], true, this.obj);
        //end of collision 
        game.physics.arcade.enable(this.map);

        for (var i = 0; i < this.slimeNumber; i++) { // add slimes to the floor to slow the player
          this.x = game.rnd.integerInRange(settings[settingCode].slimeLimitX[0], settings[settingCode].slimeLimitX[1]);
          this.y = game.rnd.integerInRange(settings[settingCode].slimeLimitY[0], settings[settingCode].slimeLimitY[1]);
          this.slime = new Slime(this.x, this.y);
          slimeMob.push(this.slime);
        }
        this.player = new Player();
        weapon = game.add.weapon(100, 'bullet');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 1000;
        weapon.fireRate = fireRate;
        weapon.damage=bulletDamage;
        // weapon.onfFire = game.sound.play('gunShot');

        weapon.trackSprite(this.player.sprite, 0, 0, true);
        this.player.sprite.health = playerHealth;

        game.time.events.repeat(Phaser.Timer.SECOND * 2, numOfEnemies, spawnEnemies);

        this.scoreText = game.add.text(game.world.width, 40, "Score: " + score, {
          font: "32px Arial",
          fill: "#fff",
          align: "center"
        });
        this.scoreText.anchor.setTo(1.5, 0.5);

    }
}

function destroy(bullet){
bullet.kill();
}

import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import { Game } from '../../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public gameInstance: Game;
  public sizeScreen: {x: Number, y: Number};

  constructor( public navCtrl: NavController, public platform: Platform ) {
    this.platform.ready().then(() => {
        var self = this;
        this.gameInstance = new Game(this.platform.width(), this.platform.height()-50);
        this.sizeScreen = {x: this.platform.width(),y: this.platform.height()};
        this.gameInstance.state.add('GameStart',{
            preload: this.preload,
            create: this.create,
            update: this.update
        });
        this.gameInstance.state.start('GameStart');
    });
  }

  preload(parent) {
    // Preload the image
    this.game.load.image('logo', 'assets/imgs/logo.png');
    this.game.load.image('button', 'assets/imgs/button.jpeg');
  }

  create() {
    // Put the logo in the middle of screen at half size

    //Create the sprite at the center of the screen
    //Putting this for the variable will keep it accessible for the entire game
    this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');

    //reduce to half size the sprite
    this.logo.scale.setTo(0.5);

    //set the anchor poitnto the middle of the sprite
      this.logo.anchor.setTo(0.5);

    // To flip an image you can use scale.setTo with negative value
      // this.logo.scale.setTo(-1, 1) will flip the sprite horizontaly

      //Add a button
      this.button = this.game.add.button(this.game.world.centerX, this.game.world.height, 'button',
          function buttonOnClick() { console.log(this); } , this, 1, 1, 0);
      this.button.scale.setTo(0.5);
      this.button.anchor.setTo(0.5, 1);
      //Function for the button state
      //this.button.onInputOver.add(this.over, this);
      //this.button.onInputOut.add(this.out, this);
      //this.button.onInputUp.add(this.up, this);

  }

  update(){
    // Rotate a sprite
      this.logo.angle += 0.5;
  }

  over() {
    console.log(this);
  }

}

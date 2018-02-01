
// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";


export class Game extends Phaser.Game {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
    constructor(width, height) {
        // call parent constructor
        super( width, height, Phaser.CANVAS, "game", null );

    }
}

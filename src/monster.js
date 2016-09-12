"use strict";

/**
 * @module exports the Player class
 */
module.exports = exports = Monster;


/**
 * @constructor Player
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Monster(position) {
    this.timer = 0;
    this.frame = 0;
    this.direction = 0;
    this.x = position.x;
    this.y = position.y;
    this.width = 16;
    this.height = 16;
    this.spritesheet = new Image();
    this.spritesheet.src = encodeURI('assets/bat/bat.png');

    var self = this;
}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Monster.prototype.update = function (time) {
    this.timer += time;

            if (this.Timer > 1000 / 16) {
                this.frame = (self.frame++) % 6;
                this.timer = 0;
            }

            if (this.direction == 0){
                this.x -= 1;
                if (this.x <= 0) this.direction = 1;
            }
            else {
                this.x += 1;
                if (this.x >= 740) this.direction = 0;
            }
    }

/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Monster.prototype.render = function (time, ctx) {
    ctx.drawImage(
      // image
      this.spritesheet,
      // source rectangle
      this.frame * this.width, 0, this.width, this.height,
      // destination rectangle
      this.x, this.y, this.width, this.height
    );
}

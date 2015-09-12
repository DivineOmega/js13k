var TrafficLight = TrafficLight || {};
convergame = convergame;
function TrafficLight(x, y, rad, col) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.col = col;
  this.updateCol = function(newCol) {
    this.col = newCol;
  };
  this.draw = function() {
    //ctx.drawImage(this.image, parseInt(this.x, 10), parseInt(this.y, 10), parseInt(this.width, 10), parseInt(this.height, 10));
    convergame.drawFilledCircle(parseInt(this.x, 10), parseInt(this.y, 10), this.rad, this.col, this.col);
  };
}

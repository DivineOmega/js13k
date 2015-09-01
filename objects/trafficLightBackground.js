var TrafficLightBackground = TrafficLightBackground || {};
convergame = convergame;
function TrafficLightBackground(x, y, width, height, col) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.col = col;
  this.draw = function() {
    //convergame.drawFilledCircle(parseInt(this.x, 10), parseInt(this.y, 10), this.rad, this.col, this.col);
    convergame.drawFilledRect(parseInt(this.x, 10), parseInt(this.y, 10), parseInt(this.width, 10), parseInt(this.height, 10), this.col, this.col);
  };
}


function ControlsTest()
{
    this.convergame = null;

    this.textToDisplay = "";

    this.updateFunction = function(time)
    {
        this.textToDisplay = "";
        
        this.textToDisplay += "Up: " + this.convergame.isControlPressed("up");
        this.textToDisplay += ", ";
        
        this.textToDisplay += "Down: " + this.convergame.isControlPressed("down");
        this.textToDisplay += ", ";
        
        this.textToDisplay += "Left: " + this.convergame.isControlPressed("left");
        this.textToDisplay += ", ";
        
        this.textToDisplay += "Right: " + this.convergame.isControlPressed("right");
        
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = "#FFFFFF";
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="30px Sans Serif";
        
        this.convergame.ctx.fillText("Dynamic multi-press control system!",100, 100);
        
        this.convergame.ctx.fillText(this.textToDisplay,100, 200);
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
        this.textWhiteCounter = 0;
        this.sceneChangeCounter = 0;
    };
}

function TestScene()
{
    this.convergame = null;

    this.textBlue = true;
    
    this.textBlueCounter = 0;

    this.updateFunction = function(time)
    {
        this.textBlueCounter += time;
        
        if (this.textBlueCounter>0.3)
        {
            this.textBlue = !this.textBlue;
            this.textBlueCounter = 0;
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = '#00FF00';
        if (this.textBlue) textColour = '#0000FF';
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="30px Sans Serif";
        this.convergame.ctx.fillText("Hello! I'm the test scene!",(width*0.5)-200, (height*0.5));
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}

function IntroScene()
{
    this.convergame = null;

    this.textWhite = true;
    
    this.textWhiteCounter = 0;

    this.updateFunction = function(time)
    {
        this.textWhiteCounter += time;
        
        if (this.textWhiteCounter>0.5)
        {
            this.textWhite = !this.textWhite;
            this.textWhiteCounter = 0;
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = '#FF0000';
        if (this.textWhite) textColour = '#FFFFFF';
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="30px Sans Serif";
        this.convergame.ctx.fillText("Reversed Game for JS13K",(width*0.5)-200, (height*0.5));
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
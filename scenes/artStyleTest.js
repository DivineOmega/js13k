
function ArtStyleTest()
{
    this.convergame = null;
    

    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#FEFEFE";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = '#000000';
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="bold 32px Helvetica";
        this.convergame.ctx.fillText("Don't Read The Manual",64, 48);

        this.convergame.ctx.font="16px Helvetica";
        this.convergame.ctx.fillText("3",width / 4, height / 4);
        this.convergame.ctx.fillText("14",width / 2, height / 2);
        this.convergame.ctx.fillText("21",100, 250);
        this.convergame.ctx.fillText("45", width - 250, 550);

        //Scene area
        this.convergame.ctx.rect(32,64, (width - 64), (height - 128));
        this.convergame.ctx.stroke();
        this.convergame.ctx.fillText("2x",width / 2 + 64, height - 80);
        this.convergame.ctx.fillText("1x",width / 2 + 128, height - 80);
        this.convergame.ctx.fillText("1x",width / 2 + 192, height - 80);
        this.convergame.ctx.fillText("5x",width / 2 + 256, height - 80);
        this.convergame.ctx.rect(width / 2 , height - 128, width / 2 - 32, 64);
        this.convergame.ctx.stroke();
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
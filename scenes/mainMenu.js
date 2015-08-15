
function MainMenu()
{
    this.convergame = null;


    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        this.convergame.ctx.fillStyle = "#FFFFFF";
        this.convergame.ctx.font = 64 * this.convergame.getScreenScale() + "px Sans Serif";

        this.convergame.ctx.fillText("Reversed Game for JS13K", 50, 175*this.convergame.getScreenScale());
        
        this.convergame.ctx.font = 42 * this.convergame.getScreenScale() + "px Sans Serif";

        this.convergame.ctx.fillText("Start", 75, height-400*this.convergame.getScreenScale());
        this.convergame.ctx.fillText("Options", 75, height-300*this.convergame.getScreenScale());

        this.convergame.ctx.strokeStyle = "#FFFFFF";
        
        this.convergame.ctx.strokeRect(50, 30+height-500*this.convergame.getScreenScale(), 500*this.convergame.getScreenScale(), 90*this.convergame.getScreenScale());
        this.convergame.ctx.strokeRect(50, 30+height-400*this.convergame.getScreenScale(), 500*this.convergame.getScreenScale(), 90*this.convergame.getScreenScale());
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
        this.textWhiteCounter = 0;
        this.sceneChangeCounter = 0;
    };
}
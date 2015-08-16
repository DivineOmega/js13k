
function OptionsScene()
{
    this.convergame = null;
    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#27ae60');
        this.convergame.drawText(width / 2, 75, colWhite, 64, textFont, "center", "Options", true, 2, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
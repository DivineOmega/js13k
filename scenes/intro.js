
function IntroScene()
{
    this.convergame = null;
    this.currentMenuIndex = 0;
    this.updateFunction = function(time)
    {
        if (this.convergame.isControlPressed("down") && this.currentMenuIndex<1)
        {
            this.currentMenuIndex++;
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "Open Sans",
            colWhite = "#FEFEFE";
        this.convergame.blankCanvas('#2c3e50');

        this.convergame.drawText(width / 2, 75, colWhite, 64, textFont, "Reversed Game for JS13K", true, 2, 2, "#FF00FF");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
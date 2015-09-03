
function IntroScene()
{
    this.convergame = null;
    this.updateFunction = function(time)
    {
        if (this.convergame.isControlPressed("enter"))
        {
            this.convergame.changeScene(mainMenu);
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#27ae60');

        this.convergame.drawText(width / 2, 75, colWhite, 64, textFont, "center", "DRAWBACKS", true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", "A Reversed Game for JS13K - Unlikely created by Ollie & Jordan", true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 600, colWhite, 64, textFont, "center", "Don't press enter to continue...", true, 2, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
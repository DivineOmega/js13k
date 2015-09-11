
function OptionsScene()
{
    this.convergame = null;
    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        var width = 1920,
            height = 1080,
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#e74c3c');
        this.convergame.drawText(width / 2, 75, colWhite, 64, textFont, "center", "Options", true, 2, 2, "#c0392b");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
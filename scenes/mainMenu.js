
function MainMenu()
{
    this.convergame = null;


    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        this.convergame.blankCanvas('#000000');
        
        var textFont = "Open Sans";
        var textStyle = "#FFFFFF";

        this.convergame.drawText(50, 75, textStyle, 64, textFont, "Reversed Game for JS13K");

        this.convergame.drawText(75, 700, textStyle, 42, textFont, "Start");
        this.convergame.drawText(75, 800, textStyle, 42, textFont, "Options");

        var rectangleStyle = "#FFFFFF";
        
        this.convergame.drawRect(50, 650, 500, 90, rectangleStyle);
        this.convergame.drawRect(50, 750, 500, 90, rectangleStyle);
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
    };
}
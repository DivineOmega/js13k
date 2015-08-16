
function MainMenu()
{
    this.convergame = null;

    this.currentMenuIndex = 0;

    this.updateFunction = function(time)
    {
        if (this.convergame.isControlPressed("down") && this.currentMenuIndex<1)
        {
            this.currentMenuIndex++;
        }
        
        if (this.convergame.isControlPressed("up") && this.currentMenuIndex>0)
        {
            this.currentMenuIndex--;
        }
    };
    
    this.renderFunction = function()
    {
        this.convergame.blankCanvas('#000000');
        
        var textFont = "Open Sans";
        var textStyle = "#FFFFFF";

        this.convergame.drawText(50, 75, textStyle, 64, textFont, "Reversed Game for JS13K", true, 2, 2, "#FF00FF");

        var rectangleStyle = "#FFFFFF";
        
        this.convergame.drawRect(50, 650, 500, 90, rectangleStyle);
        this.convergame.drawRect(50, 750, 500, 90, rectangleStyle);
        
        var recentangleFillStyle = "#333333";
        
        switch(this.currentMenuIndex)
        {
            case 0:
                this.convergame.drawFilledRect(50, 650, 500, 90, rectangleStyle, recentangleFillStyle);
                break;
                
            case 1:
                this.convergame.drawFilledRect(50, 750, 500, 90, rectangleStyle, recentangleFillStyle);
                break;
        }
        
        this.convergame.drawText(75, 700, textStyle, 42, textFont, "Start");
        this.convergame.drawText(75, 800, textStyle, 42, textFont, "Options");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
    };
}
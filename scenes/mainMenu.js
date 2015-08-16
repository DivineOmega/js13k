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

        if (this.convergame.isControlPressed("enter") && this.currentMenuIndex === 0)
        {
            // Go to Start Game scene
        } else if (this.convergame.isControlPressed("enter") && this.currentMenuIndex === 1) {
            this.convergame.changeScene(optionsScene);
        }

    };
    this.renderFunction = function()
    {
        this.convergame.blankCanvas('#34495e');
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            textStyle = "#ecf0f1",
            rectangleStyle = "#ecf0f1";

        this.convergame.drawText(width / 2, 75, textStyle, 64, textFont, "center", "Reversed Game for JS13K", true, 2, 2, "#2c3e50");
        this.convergame.drawRect(50, 750, 500, 100, 500, 90, rectangleStyle);
        this.convergame.drawRect(50, 850, 500, 100, 500, 90, rectangleStyle);
        
        var recentangleFillStyle = "#2c3e50";
        
        switch(this.currentMenuIndex)
        {
            case 0:
                this.convergame.drawFilledRect(50, 750, 500, 100, rectangleStyle, recentangleFillStyle); //We would save space by just changing the FillStyle here :) 
                break;
                
            case 1:
                this.convergame.drawFilledRect(50, 850, 500, 100, rectangleStyle, recentangleFillStyle); //We would save space by just changing the FillStyle here :) 
                break;
        }
        
        this.convergame.drawText(100, 810, textStyle, 42, textFont, "left" ,"Start");
        this.convergame.drawText(100, 910, textStyle, 42, textFont, "left" ,"Options");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
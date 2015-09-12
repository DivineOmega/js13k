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
            minigameSwitcher.resetScore();
            minigameSwitcher.resetTimeMultiplier();
            minigameSwitcher.resetGamesPlayedCount();
            
            timeout.resetTimeouts();
            
            this.convergame.changeScene(minigameSwitcher);
            
        } else if (this.convergame.isControlPressed("enter") && this.currentMenuIndex === 1) {
            this.convergame.changeScene(aboutScene);
        }

    };
    this.renderFunction = function()
    {
        this.convergame.blankCanvas('#34495e');
        var textFont = "sans-serif",
            textSize = 96,
            textStyle = "#ecf0f1",
            width = 1920,
            height = 1080,
            boxWidth = 500,
            boxHeight = 100,
            rectangleStyle = "#ecf0f1";

        this.convergame.drawText(width / 2, height / 4, textStyle, textSize, textFont, "center", "DRAWBACKS", true, 0, 2, "#2c3e50");
        this.convergame.drawText(width / 2, (height / 4) + 150, textStyle, 32, textFont, "center", "Don't bother using this menu.", true, 0, 2, "#2c3e50");
        this.convergame.drawRect((width / 2) - (boxWidth / 2), (height / 2), boxWidth, boxHeight, 500, 90, rectangleStyle);
        this.convergame.drawRect((width / 2) - (boxWidth / 2), (height / 2) + (boxHeight + 16), boxWidth, boxHeight, 500, 90, rectangleStyle);
        
        
        
        var recentangleFillStyle = "#2c3e50";
        
        switch(this.currentMenuIndex)
        {
            case 0:
                this.convergame.drawFilledRect((width / 2) - (boxWidth / 2), (height / 2), boxWidth, boxHeight, rectangleStyle, recentangleFillStyle); //We would save space by just changing the FillStyle here :) 
                break;
                
            case 1:
                this.convergame.drawFilledRect((width / 2) - (boxWidth / 2), (height / 2) + (boxHeight + 16), boxWidth, boxHeight, rectangleStyle, recentangleFillStyle); //We would save space by just changing the FillStyle here :) 
                break;
        }
        
        this.convergame.drawText((width / 2), (height / 2) + 60, textStyle, 42, textFont, "center" ,"Start");
        this.convergame.drawText((width / 2), (height / 2) + (boxHeight + 16) + 60, textStyle, 42, textFont, "center" ,"About");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}
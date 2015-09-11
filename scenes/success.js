
function Success()
{
    this.convergame = null;
    
    this.message = null;
    
    this.timer = 0;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.timer>=3)
        {
            this.convergame.changeScene(minigameSwitcher);
        }
    };
    
    this.renderFunction = function()
    {
        var width = 1920,
            height = 1080,
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#32cd32');

        this.convergame.drawText(width / 2, 150, colWhite, 64, textFont, "center", "Score: "+minigameSwitcher.score, true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 400, colWhite, 48, textFont, "center", this.message, true, 2, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        
        var random = this.convergame.random(1,9);
        
        switch (random)
        {
            case 1:
                this.message = "Good stuff!";
                break;
                
            case 2:
                this.message = "You got it.";
                break;
                
            case 3:
                this.message = "That's it.";
                break;
                
            case 4:
                this.message = "Well done.";
                break;
                
            case 5:
                this.message = "Yay! Points.";
                break;
                
            case 6:
                this.message = "Congratz.";
                break;
                
            case 7:
                this.message = "The points go to you!";
                break;
                
            case 8:
                this.message = "Player gets points.";
                break;
                
            case 9:
                this.message = "Points up!";
                break;
        }
    };
}
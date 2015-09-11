
function MinigameDoNothing()
{
    this.convergame = null;
    
    this.controls = '';
    
    this.instruction = null;
    this.correctControl = null;
    
    this.timer = 0;
    this.gameTime = 3;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.convergame.isControlPressed("up") || this.convergame.isControlPressed("down") || 
            this.convergame.isControlPressed("left") || this.convergame.isControlPressed("right") ||
            this.convergame.isControlPressed("space") || this.convergame.isControlPressed("enter") ||
            this.convergame.isControlPressed(null))
        {
            this.convergame.changeScene(fail);
        }
        
        if (this.timer>=this.gameTime)
        {
            minigameSwitcher.score++;
            this.convergame.changeScene(success);
        }
    };
    
    this.renderFunction = function()
    {
        var width = 1920,
            height = 1080,
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#669999');

        this.convergame.drawFilledRect(100, 275, 1600, 200, '#FFFFFF', 'rgba(255, 255, 255, 0.1)');

        this.convergame.drawText(960, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(960, 400, colWhite, 64, textFont, "center", this.instruction, true, 2, 2, "#2c3e50");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(3);
        
        var random = this.convergame.random(1,7);
            
        switch (random)
        {
            case 1:
                this.instruction = "Press something!";
                break;
                
            case 2:
                this.instruction = "Press any key!";
                break;
                
            case 3:
                this.instruction = "Don't not press a key!";
                break;
                
            case 4:
                this.instruction = "Press any key to continue.";
                break;
                
            case 5:
                this.instruction = "To continue, press any key.";
                break;
                
            case 6:
                this.instruction = "To increase your score, press any key.";
                break;
                
            case 7:
                this.instruction = "Free points - hit any key!";
                break;
        }
    };
}
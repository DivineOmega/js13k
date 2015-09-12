
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
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#669999');

        this.convergame.drawFilledRect(100, 275, 1600, 200, '#FFFFFF', 'rgba(255, 255, 255, 0.1)');

        this.convergame.drawText(960, 150, white, 32, font, "center", (this.gameTime-this.timer).toFixed(2), true, 0, 2, "#2c3e50");
        this.convergame.drawText(960, 400, white, 64, font, "center", this.instruction, true, 0, 2, "#2c3e50");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(3);
        
        var random = this.convergame.random(1,5);
            
        switch (random)
        {
            case 1:
                this.instruction = "Press something!";
                break;
                
            case 2:
                this.instruction = "Press any key!";
                break;
                
            case 3:
                this.instruction = "Press any key to continue.";
                break;
                
            case 4:
                this.instruction = "To continue, press any key.";
                break;
                
            case 5:
                this.instruction = "Free points - hit any key!";
                break;
        }
    };
}

function MinigameLeftOrRight()
{
    this.convergame = null;
    
    this.controls = 'Press either the left or right arrow key.';
    
    this.instruction = null;
    this.correctControl = null;
    
    this.timer = 0;
    this.gameTime = 3;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.convergame.isControlPressed(this.correctControl))
        {
            minigameSwitcher.score++;
            this.convergame.changeScene(success);
        }
        else if (this.convergame.isControlPressed("up") || this.convergame.isControlPressed("down") || 
            this.convergame.isControlPressed("left") || this.convergame.isControlPressed("right"))
        {
            this.convergame.changeScene(fail);
        }
        
        if (this.timer>=this.gameTime)
        {
            this.convergame.changeScene(timeout);
        }
    };
    
    this.renderFunction = function()
    {
        var font = "sans-serif",
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
        
        var random = this.convergame.random(1,4);
            
        switch (random)
        {
            case 1:
                this.instruction = "Press left...";
                this.correctControl = "right";
                break;
                
            case 2:
                this.instruction = "Press right...";
                this.correctControl = "left";
                break;
                
            case 3:
                this.instruction = "Don't press left...";
                this.correctControl = "left";
                break;
                
            case 4:
                this.instruction = "Don't press right...";
                this.correctControl = "right";
                break;
        }
    };
}
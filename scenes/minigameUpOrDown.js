
function MinigameUpOrDown()
{
    this.convergame = null;
    
    this.controls = 'Press either the up or down arrow key.';
    
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
        
        if (this.timer>=3)
        {
            this.convergame.changeScene(timeout);
        }
    };
    
    this.renderFunction = function()
    {
        var width = 1920,
            height = 1080,
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#669999');

        this.convergame.drawFilledRect(100, 275, 1600, 200, '#FFFFFF', '#333333');

        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 400, colWhite, 64, textFont, "center", this.instruction, true, 2, 2, "#2c3e50");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        
        var random = this.convergame.random(1,4);
            
        switch (random)
        {
            case 1:
                this.instruction = "Press up...";
                this.correctControl = "down";
                break;
                
            case 2:
                this.instruction = "Press down...";
                this.correctControl = "up";
                break;
                
            case 3:
                this.instruction = "Don't press up...";
                this.correctControl = "up";
                break;
                
            case 4:
                this.instruction = "Don't press down...";
                this.correctControl = "down";
                break;
        }
    };
}
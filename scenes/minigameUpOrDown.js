
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
        
        if (this.timer>=this.gameTime)
        {
            this.convergame.changeScene(timeout);
        }
    };
    
    this.renderFunction = function()
    {
        var font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#1abc9c');

        this.convergame.drawFilledRect(100, 275, 1600, 200, '#FFFFFF', 'rgba(255, 255, 255, 0.1)');

        this.convergame.drawText(960, 150, white, 32, font, "center", (this.gameTime-this.timer).toFixed(2), true, 0, 2, "#16a085");
        this.convergame.drawText(960, 400, white, 64, font, "center", this.instruction, true, 0, 2, "#16a085");
        
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
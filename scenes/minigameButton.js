function MinigameButton()
{
    this.convergame = null;
    
    this.instruction = null;
    this.correctControl = null;
    this.col = null;
    thiscolShadow = null;
    this.timer = 0;
    this.gameTime = 3;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.timer>=3)
        {
            this.convergame.changeScene(timeout);
        }

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
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#669999');

        this.convergame.drawFilledCircle(width / 2, height / 2 + 110, 256, '#2c3e50', '#2c3e50');
        this.convergame.drawFilledCircle(width / 2, height / 2 + 100, 256, this.colShadow, this.colShadow);
        this.convergame.drawFilledCircle(width / 2, height / 2 + 100, 254, this.colShadow, this.col);

        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, height / 2 + 110, colWhite, 64, textFont, "center", this.instruction, true, 0, -2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        
        var random = this.convergame.random(1,2);
        var colRand = this.convergame.random(1, 2);

        switch (random)
        {
            case 1:
                this.instruction = "Press";
                this.correctControl = "down";
                break;
                
            case 2:
                this.instruction = "Don't Press";
                this.correctControl = "up";
                break;
        }

        switch (colRand)
        {
            case 1:
                this.col = "#2ecc71";
                this.colShadow = "#2cc16a";
                break;
            case 2:
                this.col = "#e74c3c";
                this.colShadow = "#c0392b";
                break;
        }
    };
}
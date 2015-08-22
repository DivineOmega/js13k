function MinigameButton()
{
    this.convergame = null;
    this.controls = 'Use the spacebar to press the button!';
    this.instruction = null;
    this.correctControl = "space";
    this.col = null;
    thiscolShadow = null;
    this.timer = 0;
    this.gameTime = 3;
    this.canPress = false;
    this.canPressTimer = null;
    this.updateFunction = function(time)
    {
        this.timer += time;
        if(this.timer > this.canPressTimer) {
            this.canPress = true;
            this.instruction = "Don't Press!";
            
        }
         
        if (this.timer>=3)
        {
            this.convergame.changeScene(timeout);
        }

        if ( this.canPress === true && this.convergame.isControlPressed(this.correctControl))
        {
            minigameSwitcher.score++;
            this.convergame.changeScene(success);
        } 
        else if (this.canPress === false && this.convergame.isControlPressed(this.correctControl))
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
        this.canPressTimer = this.convergame.random(1.75,1.9);
        var colRand = this.convergame.random(1, 2);
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
        this.instruction = "Press Me!";
        
    };
}
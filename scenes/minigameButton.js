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
         
        if (this.timer>=this.gameTime)
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
        var width = 1920,
            height = 1080,
            font = "sans-serif",
            white = "#ecf0f1",
            baseRadius = 256;
        this.convergame.blankCanvas('#1abc9c');

        this.convergame.drawFilledCircle(width / 2, height / 2 + 110, baseRadius, '#2c3e50', '#2c3e50');
        this.convergame.drawFilledCircle(width / 2, height / 2 + 100, baseRadius, this.colShadow, this.colShadow);
        this.convergame.drawFilledCircle(width / 2, height / 2 + 100, baseRadius - 2, this.colShadow, this.col);

        this.convergame.drawText(width / 2, 150, white, 32, font, "center", (this.gameTime-this.timer).toFixed(2), true, 0, 2, "#16a085");
        this.convergame.drawText(width / 2, height / 2 + 110, white, 64, font, "center", this.instruction, true, 0, -2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(3);
        this.canPressTimer = this.convergame.random(this.gameTime*0.05,this.gameTime*0.65);
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
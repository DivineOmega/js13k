function MinigameTrafficLights()
{
    this.convergame = null;
    this.controls = null;
    this.instruction = null;
    this.correctControl = "space";
    this.correctCol = null;
    this.col = null;
    this.colShadow = null;
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
         
       /* if (this.timer>=3)
        {
            this.convergame.changeScene(timeout);
        } */

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
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#669999');
        
        //Traffic Light
        //Traffic Light Rectangle Background
        this.convergame.drawFilledRect((width / 2 + 200) * this.convergame.getScreenScale(), 200 , 400 , height - 100 , '#2c3e50', '#34495e');
        //Traffic Light Rectangle Forground

        //Traffic Light Circle Black
        this.convergame.drawFilledCircle((width / 2 + 375), height / 2 - 128 , 96 , '#2c3e50', '#2c3e50');
        this.convergame.drawFilledCircle((width / 2 + 375), height / 2 + 64 , 96 , '#2c3e50', '#2c3e50');
        this.convergame.drawFilledCircle((width / 2 + 375) , height / 2 + 256 , 96 , '#2c3e50', '#2c3e50');
        //Traffic Light Circle Colour
        this.convergame.drawFilledCircle(width / 2, height / 2 + 100, 254, this.col, this.col);

        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, height / 2 + 110, colWhite, 64, textFont, "center", this.controls, true, 0, -2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.canPressTimer = this.convergame.random(1.75,1.9);
        var colRand = this.convergame.random(1, 3);
        switch (colRand)
        {
            case 1:
                this.col = "#2ecc71"; // Green
                this.correctCol = "green";
                break;
            case 2:
                this.col = "#f39c12"; // Amber
                this.correctCol = "amber";
                break;
            case 3:
                this.col = "#e74c3c"; // Red
                this.correctCol = "red";
        }
        this.controls = 'Never go on a ' + this.correctCol + ' light';
    };
}
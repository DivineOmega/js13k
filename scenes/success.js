
function Success()
{
    this.convergame = null;
    
    this.message = null;
    
    this.timer = 0;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.timer>=minigameSwitcher.getGameTime(3))
        {
            this.convergame.changeScene(minigameSwitcher);
        }
    };
    
    this.renderFunction = function()
    {
        var font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#32cd32');

        this.convergame.drawText(960, 150, white, 64, font, "center", "Score: "+minigameSwitcher.score, true, 0, 2, "#27ae60");
        this.convergame.drawText(960, 400, white, 64, font, "center", this.message, true, 0, 2, "#27ae60");
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
        
        var instrument = Synth.createInstrument('organ');
        
        setTimeout(function() { instrument.play('D', 5, 2); }, 0.00 * 1000);
        setTimeout(function() { instrument.play('G', 5, 2); }, 0.25 * 1000);
        
    };
}
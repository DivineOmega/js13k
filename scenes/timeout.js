
function Timeout()
{
    this.convergame = null;
    
    this.message = null;
    
    this.timer = 0;
    
    this.timeouts = 4;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.timer>=minigameSwitcher.getGameTime(3))
        {
            if (this.timeouts===0)
            {
                this.convergame.changeScene(fail);
            }
            else
            {
                this.convergame.changeScene(minigameSwitcher);
            }
        }
    };
    
    this.renderFunction = function()
    {
        var textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#989898');

        var timeoutsPhrase = "";
        
        if (this.timeouts===1)
        {
            timeoutsPhrase = "1 timeout remains!";
        }
        else if (this.timeouts===0)
        {
            timeoutsPhrase = "You're out of timeouts!";
        }
        else
        {
            timeoutsPhrase = this.timeouts + " timeouts remain!";
        }

        this.convergame.drawText(960, 150, colWhite, 64, textFont, "center", "Score: "+minigameSwitcher.score, true, 0, 2, "#2c3e50");
        this.convergame.drawText(960, 400, colWhite, 48, textFont, "center", this.message, true, 0, 2, "#2c3e50");
        this.convergame.drawText(960, 550, colWhite, 48, textFont, "center", timeoutsPhrase, true, 0, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        if(minigameSwitcher.score > 0) {
            minigameSwitcher.score--;
        }
        var random = this.convergame.random(1,16);
        
        this.timeouts--;
        
        switch (random)
        {
            case 1:
                this.message = "Too slow!";
                break;
                
            case 2:
                this.message = "Faster next time, eh?";
                break;
                
            case 3:
                this.message = "Slooooow.";
                break;
                
            case 4:
                this.message = "You timed out!";
                break;
                
            case 5:
                this.message = "Yawn. Slow.";
                break;
                
            case 6:
                this.message = "Are you still there?";
                break;
                
            case 7:
                this.message = "Hello?";
                break;
                
            case 8:
                this.message = "Player.exe is not responding.";
                break;
                
            case 9:
                this.message = "You took a bit too long.";
                break;
                
            case 10:
                this.message = "You were a bit slow.";
                break;
                
            case 11:
                this.message = "React faster next time!";
                break;
                
            case 12:
                this.message = "You need to be faster!";
                break;
                
            case 13:
                this.message = "Time ran out.";
                break;
                
            case 14:
                this.message = "Good try, but too slow.";
                break;
                
            case 15:
                this.message = "Not quite fast enough.";
                break;
                
            case 16:
                this.message = "Think quick(er).";
                break;
        }
        
        var instrument = Synth.createInstrument('organ');
        
        setTimeout(function() { instrument.play('F', 4, 3); }, 0.00 * 1000);
        
    };
    
    this.resetTimeouts = function()
    {
        this.timeouts = 4;
    };
}
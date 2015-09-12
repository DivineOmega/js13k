
function Fail()
{
    this.convergame = null;
    
    this.message = null;
    
    this.timer = 0;
    
    this.updateFunction = function(time)
    {
        if (this.convergame.isControlPressed("enter"))
        {
            this.convergame.changeScene(mainMenu);
        }
    };
    
    this.renderFunction = function()
    {
        var font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#CC3300');
        this.convergame.drawText(960, 150, white, 128, font, "center", "Final score: "+minigameSwitcher.score, true, 0, 2, "#2c3e50");
        this.convergame.drawText(960, 500, white, 64, font, "center", this.message, true, 0, 2, "#2c3e50");
        this.convergame.drawText(960, 500 + 150, white, 64, font, "center", "Don't press enter to return to the Main Menu...", true, 0, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        
        var random = this.convergame.random(1,11);
        
        switch (random)
        {
            case 1:
                this.message = "Failed!";
                break;
                
            case 2:
                this.message = "Nope.";
                break;
                
            case 3:
                this.message = "Not what we were after.";
                break;
                
            case 4:
                this.message = "Nuh uh.";
                break;
                
            case 5:
                this.message = "Epic fail.";
                break;
                
            case 6:
                this.message = "Better luck next time.";
                break;
                
            case 7:
                this.message = "Have you considering playing better?";
                break;
                
            case 8:
                this.message = "Try harder.";
                break;
                
            case 9:
                this.message = "Suck less. :/";
                break;
                
            case 10:
                this.message = "A for effort.";
                break;
                
            case 11:
                this.message = "Good, but not the one.";
                break;
        }
        
        var instrument = Synth.createInstrument('organ');
        
        setTimeout(function() { instrument.play('G', 4, 2); }, 0.00 * 1000);
        setTimeout(function() { instrument.play('D', 4, 2); }, 0.25 * 1000);
        setTimeout(function() { instrument.play('G', 3, 2); }, 1.00 * 1000);
        setTimeout(function() { instrument.play('D', 3, 2); }, 1.25 * 1000);
        
    };
}
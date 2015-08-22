
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
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#CC3300');
        this.convergame.drawText(width / 2, 150, colWhite, 128, textFont, "center", "Final score: "+minigameSwitcher.score, true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, height / 2, colWhite, 64, textFont, "center", this.message, true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, height / 2 + 150, colWhite, 64, textFont, "center", "Press Enter to return to the Main Menu...", true, 2, 2, "#2c3e50");
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
    };
}
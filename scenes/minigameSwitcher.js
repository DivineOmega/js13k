
function MinigameSwitcher()
{
    this.convergame = null;
    
    this.score = 0;
    
    this.getReadyMessage = null;
    this.nextMinigame = null;
    
    this.startMinigameTimer = 0;
    
    this.updateFunction = function(time)
    {
        this.startMinigameTimer += time;
        
        if (this.startMinigameTimer>=4)
        {
            this.startMinigameTimer = 0;
            
            this.convergame.changeScene(this.nextMinigame);
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#FFBF00');

        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", "Score: "+this.score, true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 500, colWhite, 32, textFont, "center", this.nextMinigame.controls, true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 400, colWhite, 64, textFont, "center", this.getReadyMessage, true, 2, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.startMinigameTimer = 0;
        
        var random = this.convergame.random(1,11);
        
        switch (random)
        {
            case 1:
                this.getReadyMessage = "Don't get ready...";
                break;
                
            case 2:
                this.getReadyMessage = "Be unprepared...";
                break;
                
            case 3:
                this.getReadyMessage = "Get distracted...";
                break;
                
            case 4:
                this.getReadyMessage = "Fail to pay attention...";
                break;
                
            case 5:
                this.getReadyMessage = "Ready, set, stop.";
                break;
                
            case 6:
                this.getReadyMessage = "Ydaer Teg!";
                break;
                
            case 7:
                this.getReadyMessage = "Just ignore this next minigame.";
                break;
                
            case 8:
                this.getReadyMessage = "Transverse the reverse.";
                break;
                
            case 9:
                this.getReadyMessage = "Incoming confusion (or not).";
                break;
                
            case 10:
                this.getReadyMessage = "Do what we say, backwards.";
                break;
                
            case 11:
                this.getReadyMessage = "Incoming reversed minigame...";
                break;
        }
        
        var availableMinigames = [ minigameUpOrDown, minigameButton ];
        
        random = this.convergame.random(0, availableMinigames.length-1);
            
        this.nextMinigame = availableMinigames[random];
    };
    
    this.resetScore = function()
    {
        this.score = 0;
    };
}
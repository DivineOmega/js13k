
function MinigameSwitcher()
{
    this.convergame = null;
    
    this.score = 0;
    this.timeMultiplier = 1;
    this.gamesPlayedCount = 0;
    
    this.getReadyMessage = null;
    this.nextMinigame = null;
    
    this.startMinigameTimer = 0;
    
    this.gameBag = [];
    
    this.updateFunction = function(time)
    {
        this.startMinigameTimer += time;
        
        if (this.startMinigameTimer>=this.getGameTime(4))
        {
            this.startMinigameTimer = 0;
            this.gamesPlayedCount++;
            
            if (this.gamesPlayedCount%5 === 0 && this.gamesPlayedCount !== 0)
            {
                this.timeMultiplier = this.timeMultiplier - 0.1;
            }
            
            //console.log('Games played: '+this.gamesPlayedCount+', Time multiplier: '+this.timeMultiplier);
            
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
        
        var availableMinigames = [ minigameUpOrDown, minigameButton, minigameLeftOrRight, minigameDoNothing, minigameTrafficLights, minigameMorality ];

        if (this.gameBag.length===0) this.gameBag = availableMinigames;
        
        random = this.convergame.random(0, this.gameBag.length-1);
            
        this.nextMinigame = this.gameBag[random];
        
        this.gameBag.splice(random, 1);
    };
    
    this.resetScore = function()
    {
        this.score = 0;
    };
    
    this.resetTimeMultiplier = function()
    {
        this.timeMultiplier = 1;
    };
    
    this.resetGamesPlayedCount = function()
    {
        this.gamesPlayedCount = -1;  
    };
    
    this.getGameTime = function(standardGameTime)
    {
        return standardGameTime * this.timeMultiplier;
    };
}
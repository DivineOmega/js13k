
function MinigameSwitcher()
{
    this.convergame = null;
    
    this.score = 0;
    this.timeMultiplier = 1;
    this.timeMultiplierDecay = 0.1;
    
    this.gamesPlayedCount = 0;
    
    this.gameTime = 4;
    
    this.getReadyMessage = null;
    this.nextMinigame = null;
    
    this.startMinigameTimer = 0;
    
    this.gameBag = [];
    
    this.updateFunction = function(time)
    {
        this.startMinigameTimer += time;
        
        if (this.startMinigameTimer>=this.gameTime)
        {
            this.startMinigameTimer = 0;
            this.gamesPlayedCount++;
            
            if (this.gamesPlayedCount%5 === 0 && this.gamesPlayedCount !== 0)
            {
                this.timeMultiplier = this.timeMultiplier - this.timeMultiplierDecay;
            }
            
            this.convergame.changeScene(this.nextMinigame);
        }
    };
    
    this.renderFunction = function()
    {
        var font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#f39c12');

        this.convergame.drawText(960, 150, white, 64, font, "center", "Score: "+this.score, true, 0, 2, "#e67e22");
        this.convergame.drawText(960, 400, white, 48, font, "center", this.getReadyMessage, true, 0, 2, "#e67e22");
        this.convergame.drawText(960, 500, white, 64, font, "center", this.nextMinigame.controls, true, 0, 2, "#e67e22");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.startMinigameTimer = 0;
        
        this.gameTime = this.getGameTime(4);
        
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
        
        var availableMinigames = [ minigameSpelling, minigameCol, minigameUpOrDown, minigameButton, minigameLeftOrRight, minigameDoNothing, minigameTrafficLights , minigameMorality, minigameAnimals];

        if (this.gameBag.length===0) this.gameBag = availableMinigames;
        
        random = this.convergame.random(0, this.gameBag.length-1);
            
        this.nextMinigame = this.gameBag[random];
        
        this.gameBag.splice(random, 1);
        
        var instrument = Synth.createInstrument('piano');
        
        setTimeout(function() { instrument.play('C', 5, 1); }, 0.00 * 1000);
        setTimeout(function() { instrument.play('C', 5, 1); }, (this.gameTime*0.33) * 1000);
        setTimeout(function() { instrument.play('C', 5, 1); }, (this.gameTime*0.66) * 1000);
        setTimeout(function() { instrument.play('E', 5, 1); }, this.gameTime * 1000);
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

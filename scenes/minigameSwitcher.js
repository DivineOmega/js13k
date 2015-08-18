
function MinigameSwitcher()
{
    this.convergame = null;
    
    this.score = 0;
    
    this.getReadyMessage = null;
    
    this.startMinigameTimer = 0;
    
    this.updateFunction = function(time)
    {
        var random;
        
        if (this.getReadyMessage===null)
        {
            random = this.convergame.random(1,4);
            
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
            }
        }
        
        this.startMinigameTimer += time;
        
        if (this.startMinigameTimer>=3)
        {
            this.startMinigameTimer = 0;
            
            random = this.convergame.random(1,4);
            
            var nextMiniGame = null;
            
            switch (random)
            {
                case 1:
                    nextMiniGame = miniGameTrafficLights;
                    break;
                    
                case 2:
                    nextMiniGame = miniGameLeftOrRight;
                    break;
                    
                case 3:
                    nextMiniGame = miniGameUpOrDown;
                    break;
                    
                case 4:
                    nextMiniGame = miniGameColours;
                    break;
            }
            
            this.convergame.changeScene(nextMinigame);
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#27ae60');

        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", "Score: "+this.score, true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 400, colWhite, 64, textFont, "center", this.getReadyMessage, true, 2, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.startMinigameTimer = 0;
    };
    
    this.resetScore = function()
    {
        this.score = 0;
    };
}

function MinigameSpelling()
{
    this.convergame = null;
    
    this.controls = 'Press left or right to select a choice.';
    
    this.instruction = null;
    this.correctControl = null;
    
    this.correctChoice = null;
    this.choice1 = null;
    this.choice2 = null;
    
    this.leftChoice = null;
    this.rightChoice = null;
    
    this.timer = 0;
    this.gameTime = 5;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        
        if (this.convergame.isControlPressed(this.correctControl))
        {
            minigameSwitcher.score++;
            this.convergame.changeScene(success);
        }
        else if (this.convergame.isControlPressed("up") || this.convergame.isControlPressed("down") || 
            this.convergame.isControlPressed("left") || this.convergame.isControlPressed("right"))
        {
            this.convergame.changeScene(fail);
        }
        
        if (this.timer>=this.gameTime)
        {
            this.convergame.changeScene(timeout);
        }
    };
    
    this.renderFunction = function()
    { 
        var textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#808080');
        
        this.convergame.drawText(960, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 0, 2, "#2c3e50");
        this.convergame.drawText(960, 250, colWhite, 64, textFont, "center", this.instruction, true, 0, 2, "#2c3e50");
        
        this.convergame.drawText((1920*0.15), 550, colWhite, 40, textFont, "left", this.leftChoice, true, 0, 2, "#2c3e50");
        this.convergame.drawText(1920-(1920*0.15), 550, colWhite, 40, textFont, "right", this.rightChoice, true, 0, 2, "#2c3e50");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(5);
        
        this.instruction = "Select the correct spelling.";
        
        var random = this.convergame.random(1,15);
        
        switch (random)
        {
            case 1:
                this.correctChoice = 2;
                this.choice1 = "amateur";
                this.choice2 = "amerture";
                break;
            
            case 2:
                this.correctChoice = 2;
                this.choice1 = "believe";
                this.choice2 = "beleive";
                break;
                
            case 3:
                this.correctChoice = 2;
                this.choice1 = "calendar";
                this.choice2 = "calender";
                break;
                
            case 4:
                this.correctChoice = 2;
                this.choice1 = "discipline";
                this.choice2 = "disipline";
                break;
                
            case 5:
                this.correctChoice = 2;
                this.choice1 = "equipment";
                this.choice2 = "equiptment";
                break;
                
            case 6:
                this.correctChoice = 2;
                this.choice1 = "foreign";
                this.choice2 = "foriegn";
                break;
                
            case 7:
                this.correctChoice = 2;
                this.choice1 = "grateful";
                this.choice2 = "greatful";
                break;
                
            case 8:
                this.correctChoice = 2;
                this.choice1 = "harass";
                this.choice2 = "harrass";
                break;
                
            case 9:
                this.correctChoice = 2;
                this.choice1 = "independent";
                this.choice2 = "independant";
                break;
                
            case 10:
                this.correctChoice = 2;
                this.choice1 = "questionnaire";
                this.choice2 = "questionaire";
                break;
                
            case 11:
                this.correctChoice = 2;
                this.choice1 = "recommend";
                this.choice2 = "recomend";
                break;
                
            case 12:
                this.correctChoice = 2;
                this.choice1 = "separate";
                this.choice2 = "seperate";
                break;
                
            case 13:
                this.correctChoice = 2;
                this.choice1 = "twelfth";
                this.choice2 = "twelth";
                break;
            
            case 14:
                this.correctChoice = 2;
                this.choice1 = "until";
                this.choice2 = "untill";
                break;
                
            case 15:
                this.correctChoice = 2;
                this.choice1 = "vacuum";
                this.choice2 = "vacume";
                break;
        }
        
        
        // Randomise the display of the choices
        
        random = this.convergame.random(1,2);
        
        if (random===1)
        {
            this.leftChoice = this.choice1;
            this.rightChoice = this.choice2;
            
            if (this.correctChoice===1)
            {
                this.correctControl = "left";
            }
            else if (this.correctChoice===2)
            {
                this.correctControl = "right";
            }
        }
        else if (random===2)
        {
            this.leftChoice = this.choice2;
            this.rightChoice = this.choice1;
            
            if (this.correctChoice===1)
            {
                this.correctControl = "right";
            }
            else if (this.correctChoice===2)
            {
                this.correctControl = "left";
            }
        }
    };
}
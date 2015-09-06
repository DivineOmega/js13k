
function MinigameCol()
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
        var width = this.convergame.getCanvasWidth(),
            height = this.convergame.getCanvasHeight(),
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#333333');
        
        this.convergame.drawFilledRect(0, 0, width / 2, height, '#009900', '#009900');
        this.convergame.drawFilledRect(width / 2, 0, width / 2, height, '#990000', '#990000');
        
        this.convergame.drawText( width / 4 , height / 2, colWhite, 40, textFont, "left", this.leftChoice, true, 2, 2, "#2c3e50");
        this.convergame.drawText((width / 2) + (width / 4), height / 2, colWhite, 40, textFont, "right", this.rightChoice, true, 2, 2, "#2c3e50");
        
        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 250, colWhite, 64, textFont, "center", this.instruction, true, 2, 2, "#2c3e50");
    };

    this.getCol = function(id) {
        switch (id)
        {  
            case 1:
                this.hex = '#2ecc71';
                this.label = 'Green';
            break;
            case 2:
                this.hex = '#3498db';
                this.label = 'Blue';
            break;
            case 3:
                this.hex = '#9b59b6';
                this.label = 'Purple';
            break;
            case 4:
                this.hex = '#f1c40f';
                this.label = 'Yellow';
            break;
            case 5:
                this.hex = '#e67e22';
                this.label = 'Orange';
            break;
            case 6:
                this.hex = '#e74c3c';
                this.label = 'Red';
            break;
        }
        var hexLabel = [this.hex, this.label];
        return hexLabel;
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        
        //Todo: Move this into own function
        var colourID1, colourID2, correctCol, incorrectCol;
        colourID1 =  this.convergame.random(1,6);
        colourID2 =  this.convergame.random(1,6);

        //Todo: These need renaming as Choice 1 and 2 and decide which one is the correct one later on
        correctCol = this.getCol(colourID1);
        incorrectCol = this.getCol(colourID2);
        
        while (correctCol === incorrectCol) {
            colourID2 =  this.convergame.random(1,6);
            incorrectCol = this.getCol(colourID2);
        }

        this.instruction = 'Select the ' + incorrectCol[1].toLowerCase() + ' colour.';
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
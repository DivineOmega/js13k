
function MinigameCol()
{
    this.convergame = null;
    
    this.controls = 'Press left or right to select a choice.';
    this.instruction = null;
    this.correctControl = null;
    
    this.correctChoice = null;
    this.col1 = null;
    this.col2 = null;
    

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
        var width = 1920,
            height = 1080,
            font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#333');
        
        this.convergame.drawFilledRect(0, 0, width / 2, height, this.leftChoice[0], this.leftChoice[0]);
        this.convergame.drawFilledRect(width / 2, 0, width / 2, height, this.rightChoice[0], this.rightChoice[0]);
        
        this.convergame.drawText( width / 4 , height / 2, white, 40, font, "left", this.leftChoice[1].toLowerCase(), true, 0, 2, "#2c3e50");
        this.convergame.drawText((width / 2) + (width / 4), height / 2, white, 40, font, "right", this.rightChoice[1].toLowerCase(), true, 0, 2, "#2c3e50");
        
        this.convergame.drawText(width / 2, 150, white, 32, font, "center", (this.gameTime-this.timer).toFixed(2), true, 0, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 250, white, 64, font, "center", this.instruction, true, 0, 2, "#2c3e50");
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
        this.gameTime = minigameSwitcher.getGameTime(5);
        
        //Todo: Move this into own function
        var colourID1, colourID2;
        colourID1 =  this.convergame.random(1,6);
        colourID2 =  this.convergame.random(1,6);

        if (colourID1 == colourID2) {
            if(colourID2 == 6) {
                colourID2 -= 1;
            } else {
                colourID2 += 1;
            }
        }

        //Todo: These need renaming as Choice 1 and 2 and decide which one is the correct one later on
        this.col1 = this.getCol(colourID1);
        this.col2 = this.getCol(colourID2);
        

        // Randomise the display of the choices
        random = this.convergame.random(1,2);
        
        if (random===1)
        {
            this.leftChoice = this.col1;
            this.rightChoice = this.col2;
            this.correctControl = "left";
        }
        else if (random===2)
        {
            this.leftChoice = this.col2;
            this.rightChoice = this.col1;
            this.correctControl = "right";
        }

        this.instruction = 'Select the ' + this.col2[1].toLowerCase() + ' colour.';
    };
}

function MinigameAnimals()
{
    this.convergame = null;
    
    this.controls = 'Press left or right to select a choice.';
    this.instruction = null;
    this.correctControl = null;
    
    this.correctChoice = null;
    this.ani1 = null;
    this.ani2 = null;
    
    this.ani1Img = new Image();
    this.ani2Img = new Image();

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
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#3498db');
        
        this.convergame.drawText( width / 4 , height / 2, colWhite, 40, textFont, "left", this.leftChoice, true, 2, 2, "#2c3e50");
        this.convergame.drawText((width / 2) + (width / 4), height / 2, colWhite, 40, textFont, "right", this.rightChoice, true, 2, 2, "#2c3e50");

        this.ani1Img.onload = function() {
            this.convergame.drawImage(this.ani1Img, width / 4, height / 2);
        };

        this.ani2Img.onload = function() {
            this.convergame.drawImage(this.ani2Img, (width / 2) + (width / 4), height / 2);
        };
        
        this.convergame.drawText(width / 2, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(width / 2, 250, colWhite, 64, textFont, "center", this.instruction, true, 2, 2, "#2c3e50");
    };

    this.getAni = function(id) {
        switch (id)
        {  
            case 1:
                this.label = 'Duck';
            break;
            case 2:
                this.label = 'Mouse';
            break;
            case 3:
                this.label = 'Owl';
            break;
            case 4:
                this.label = 'Pig';
            break;
            case 5:
                this.label = 'Rabbit';
            break;
        }
        return this.label;
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(5);
        
        //Todo: Move this into own function
        var animalID1, animalID2;
        animalID1 =  this.convergame.random(1,5);
        animalID2 =  this.convergame.random(1,5);

        if (animalID1 == animalID2) {
            if(animalID2 == 6) {
                animalID2 -= 1;
            } else {
                animalID2 += 1;
            }
        }

        //Todo: These need renaming as Choice 1 and 2 and decide which one is the correct one later on
        this.ani1 = this.getAni(animalID1);
        this.ani2 = this.getAni(animalID2);
        

        // Randomise the display of the choices
        random = this.convergame.random(1,2);
        
        if (random===1)
        {
            this.leftChoice = this.ani1;
            this.rightChoice = this.ani2;
            this.correctControl = "left";
        }
        else if (random===2)
        {
            this.leftChoice = this.ani2;
            this.rightChoice = this.ani1;
            this.correctControl = "right";
        }
        this.ani1Img.src = './assets/sprites/animals/'+ this.ani1 +'.svg';
        this.ani2Img.src = './assets/sprites/animals/'+ this.ani2 +'.svg';

        this.instruction = 'Select the ' + this.ani2 + '.';
    };
}
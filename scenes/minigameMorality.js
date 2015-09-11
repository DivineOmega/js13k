
function MinigameMorality()
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
        this.convergame.blankCanvas('#333333');
        
        this.convergame.drawFilledRect(0, 0, 1920*0.50, 1080, '#009900', '#009900');
        this.convergame.drawFilledRect(1920*0.50, 0, 1920*0.50, 1080, '#990000', '#990000');

        this.convergame.drawText(960, 150, colWhite, 32, textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 2, 2, "#2c3e50");
        this.convergame.drawText(960, 250, colWhite, 64, textFont, "center", this.instruction, true, 2, 2, "#2c3e50");
        
        this.convergame.drawText((1920*0.15), 550, colWhite, 40, textFont, "left", this.leftChoice, true, 2, 2, "#2c3e50");
        this.convergame.drawText(1920-(1920*0.15), 550, colWhite, 40, textFont, "right", this.rightChoice, true, 2, 2, "#2c3e50");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(5);
        
        var random = this.convergame.random(1,14);
            
        switch (random)
        {
            case 1:
                this.instruction = "Should you put a child in a cage with a lion?";
                this.correctChoice = 1;
                this.choice1 = "Yup";
                this.choice2 = "Nope";
                break;
                
            case 2:
                this.instruction = "Which of these is the best snack?";
                this.correctChoice = 1;
                this.choice1 = "Human Flesh";
                this.choice2 = "A Big Cake";
                break;
            
            case 3:
                this.instruction = "How should you drive?";
                this.correctChoice = 2;
                this.choice1 = "Calmly";
                this.choice2 = "Agressively";
                break;
                
            case 4:
                this.instruction = "You're a student, you must...";
                this.correctChoice = 1;
                this.choice1 = "Play games";
                this.choice2 = "Study hard";
                break;
                
            case 5:
                this.instruction = "You're in love. What time is it?";
                this.correctChoice = 1;
                this.choice1 = "Affair time";
                this.choice2 = "Romance time";
                break;
                
            case 6:
                this.instruction = "As a doctor, you should...";
                this.correctChoice = 1;
                this.choice1 = "Prescribe poison";
                this.choice2 = "Cure illness";
                break;
                
            case 7:
                this.instruction = "Someone wronged you. What should you do?";
                this.correctChoice = 1;
                this.choice1 = "Fight them";
                this.choice2 = "Talk to them";
                break;
                
            case 8:
                this.instruction = "Should you burn down a building?";
                this.correctChoice = 1;
                this.choice1 = "Great idea";
                this.choice2 = "Probably not";
                break;
                
            case 9:
                this.instruction = "What should you use a fire extinguisher on?";
                this.correctChoice = 1;
                this.choice1 = "People";
                this.choice2 = "Fires";
                break;
                
            case 10:
                this.instruction = "Police officers should stop...";
                this.correctChoice = 1;
                this.choice1 = "Balloon Animals";
                this.choice2 = "Crimes";
                break;
                
            case 11:
                this.instruction = "Toys should be given to...";
                this.correctChoice = 1;
                this.choice1 = "Maniacs";
                this.choice2 = "Children";
                break;
                
            case 12:
                this.instruction = "Who does Santa give presents to?";
                this.correctChoice = 1;
                this.choice1 = "The Naughty";
                this.choice2 = "The Good";
                break;
                
            case 13:
                this.instruction = "How do you calm a crying child?";
                this.correctChoice = 2;
                this.choice1 = "Ice Cream"; 
                this.choice2 = "Eye Cream";
                break;
                
            case 14:
                this.instruction = "Where do children belong?";
                this.correctChoice = 1;
                this.choice1 = "In space";
                this.choice2 = "In school";
                break;
                
            case 15:
                this.instruction = "What is a great treat for children?";
                this.correctChoice = 2;
                this.choice1 = "Ice cream";
                this.choice2 = "Poop";
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
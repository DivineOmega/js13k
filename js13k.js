
var canvas = document.getElementById("game");

function Convergame(canvas) {

  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

  var screenScale, hasGP = false, repGP, axes;

  this.scene = null;
  
  this.controlsMap = {};
  
  this.then = null;
  
  this.sanityCheck = function(){
      
      if (typeof this.scene != 'object') {
          console.log('You must set a scene using the convergame.changeScene method.');
          return false;
      }
      
      return true;
  };

  this.mainGameLoop = function(){
      var now = Date.now();
      var delta = now - this.then;
      var time = delta / 1000;
      
      this.scene.updateFunction(time);
      this.scene.renderFunction();
    
      this.then = now;
      this.controlsPressed = [];
    
      // Request to do this again ASAP
      requestAnimationFrame(this.mainGameLoop.bind(this));
  };
  
  this.startMainGameLoop = function(){
      
      if (!this.sanityCheck()) return;
      
      this.then = Date.now();
      this.mainGameLoop();
  };

  this.getCanvasWidth = function(){
    return canvas.width;
  }
  this.getCanvasHeight = function(){
    return canvas.height;
  }
  this.setCanvasWidth = function(){
    canvas.width = canvas.parentNode.offsetWidth ;
  }
  this.setCanvasHeight = function(){
    canvas.height = canvas.parentNode.offsetHeight;
  }
  
  this.getControlNameFromKeyCode = function(keyCode)
  {
      var control = null;
      
      switch (keyCode)
        {
            case 37:
                control = "left";
                break;
            
            case 38:
                control = "up";
                break;
                
            case 39:
                control = "right";
                break;
            
            case 40:
                control = "down";
                break;
        }
        
        return control;
  };
  
  this.isControlPressed = function(controlName)
  {
      if (typeof this.controlsMap[controlName] == 'undefined')
      {
          return false;
      }
      
      return this.controlsMap[controlName];
  };
  
  this.init = function() {
    this.setCanvasWidth();
    this.setCanvasHeight();
    document.getElementById('body').style.padding = '0';
    document.getElementById('body').style.margin = '0';
    //this.include('/js/webfonts.js');
    //this.include('/js/convergame-touch.js');
    
    window.addEventListener("resize", function(e) 
    {
        this.setCanvasWidth();
        this.setCanvasHeight();
    }.bind(this));
    
    window.addEventListener("keydown", function(e) 
    {
        var control = this.getControlNameFromKeyCode(e.keyCode);
        
        this.controlsMap[control] = true;
        
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }.bind(this));
    
    window.addEventListener("keyup", function(e) 
    {
        var control = this.getControlNameFromKeyCode(e.keyCode);
        
        this.controlsMap[control] = false;
        
    }.bind(this));
    
    this.canvas.ondragstart = function(e) 
    {
        if (e && e.preventDefault) { e.preventDefault(); }
        else if (e && e.stopPropagation) { e.stopPropagation(); }
        return false;
    };
    
    this.canvas.onselectstart = function(e) 
    {
        if (e && e.preventDefault) { e.preventDefault(); }
        else if (e && e.stopPropagation) { e.stopPropagation(); }
        return false;
    };
    
  };
  
  this.fullscreen = function(){
    if(canvas.requestFullScreen) {
      canvas.requestFullScreen();
    } else if(canvas.webkitRequestFullScreen) {
      canvas.webkitRequestFullScreen();
    } else if(canvas.mozRequestFullScreen) {
      canvas.mozRequestFullScreen();
    } else {
      alert('Error: Fullscreen mode not supported by your browser. Please upgrade and try again!');
    }
  }
  this.resize = function() {
    canvas.setAttribute("width",parseInt(canvas.parentNode.offsetWidth, 10));
    canvas.setAttribute("height",parseInt(canvas.parentNode.offsetHeight, 10));
  }
  this.doEvent = function(element, ev, func) {
    /*ToDo: Return avaiable controls */
    /*ToDo: Add Event listeners to functions to different control tests*/
    element.addEventListener(""+ ev +"", func);
  }
  this.setPixelGame = function(active){
    if (active)
    {
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
    }
    else
    {
        this.ctx.webkitImageSmoothingEnabled = true;
        this.ctx.mozImageSmoothingEnabled = true;
        this.ctx.imageSmoothingEnabled = true;
    }
  }
  this.getScreenScale = function(){
    //Multiply image width and height to the screen scale value as suggested: http://stackoverflow.com/a/27732737
    screenScale = Math.min((convergame.getCanvasWidth() / 1920) + (convergame.getCanvasHeight() / 1080)) / 2;
    return screenScale;
  }
  this.random = function(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  }

  this.sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  this.isCollide = function(object1, object2) {
    if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
        object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
      return true;
    } else {
      return false;
    }
  }
  /*Gamepad*/
  function canGamepads() {
        return "getGamepads" in navigator;
    }

    function reportOnGamepad() {
        var gp = navigator.getGamepads()[0];
        var html = "";
            html += "id: "+gp.id+"<br/>";

        for(var i=0;i<gp.buttons.length;i++) {
            html+= "Button "+(i+1)+": ";
            if(gp.buttons[i].pressed) html+= " pressed";
            html+= "<br/>";
        }

        for(var i=0;i<gp.axes.length; i+=2) {
            html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+","+gp.axes[i+1]+"<br/>";
        }

        $("#gamepadDisplay").html(html);
    }


    this.fetchGamepad = function() {

        if(canGamepads()) {

            var prompt = "To begin using your gamepad, connect it and press any button!";
            console.log(prompt);

            window.addEventListener("gamepadconnected", function(e) {
                hasGP = true;
                console.log("Gamepad connected!");
                repGP = window.setInterval(reportOnGamepad,100);
            });

            window.addEventListener("gamepaddisconnected", function(e) {
                console.log("Gamepad disconnected!");
                window.clearInterval(repGP);
            });

            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
                console.log('checkGP');
                if(navigator.getGamepads()[0]) {
                    if(!hasGP) {
                      //$(window).trigger("gamepadconnected");
                      var event = document.createEvent('HTMLEvents');
                      event.initEvent('gamepadconnected', true, false);
                      el.dispatchEvent(event);
                    }
                    window.clearInterval(checkGP);
                }
            }, 500);
        }

    }
    this.getControllerAxis = function() {

        gp = navigator.getGamepads()[0];
         axes = gp.axes[0];
         return axes;

    }
  
    this.changeScene = function(scene) {
        
        this.scene = scene;
        
        this.scene.init(this);
        
    };

  this.include = function(dir) {
    var include = document.createElement('script');
    include.src = ''+ dir +'';
    include.type = 'text/javascript';
    document.body.appendChild(include);
  }

  this.preShake = function() {
    ctx.save();
    var dx = Math.random()*8;
    var dy = Math.random()*8;
    ctx.translate(dx, dy);
  }

  this.postShake = function() {
    ctx.restore();
  }


  /*Virtual Controls*/
  this.vkUp = function() {
    //13
    gp = navigator.getGamepads()[0];
    if(typeof gp != 'undefined') {


      if(gp.buttons[12].pressed == true) {
        return true;
      } else {
        return false;
      }
    }


  }
  this.vkDown = function() {
    //assign to key 14
    gp = navigator.getGamepads()[0];
    if(typeof gp !== 'undefined') {
      gp = navigator.getGamepads()[0];

      if(gp.buttons[13].pressed == true) {
        return true;
      } else {
        return false;
      }
    }
  }
  this.vkLeft = function() {
    //assign to key 15
    gp = navigator.getGamepads()[0];
    if(typeof gp !== 'undefined') {
      gp = navigator.getGamepads()[0];

      if(gp.buttons[14].pressed == true) {
        return true;
      } else {
        return false;
      }
    }

  }
  this.vkRight = function() {
    //assign to key 16
    gp = navigator.getGamepads()[0];
    if(typeof gp !== 'undefined') {
      gp = navigator.getGamepads()[0];

      if(gp.buttons[15].pressed == true) {
        return true;
      } else {
        return false;
      }
    }

  }
  this.vkStart = function() {
    //assign to key

  }
  this.vkBtn1 = function() {
    gp = navigator.getGamepads()[0];
    if(typeof gp !== 'undefined') {
      gp = navigator.getGamepads()[0];

      if(gp.buttons[0].pressed == true) {
        return true;
      } else {
        return false;
      }
    }

    //assign to key
  }
  this.vkBtn2 = function() {
    //assign to key
  }
  this.vkBtn3 = function() {
    //assign to key
  }
  this.vkBtn4 = function() {
    //assign to key
  }
  this.vkBtnL = function() {
    //assign to key
  }
  this.vkBtnR = function() {
    //assign to key
  }
  //$( ".game" ).load( "scenes/splash.html" );
}


function ArtStyleTest()
{
    this.convergame = null;
    

    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#FEFEFE";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = '#000000';
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="bold "+ 32 * this.convergame.getScreenScale()+"px Helvetica";
        this.convergame.ctx.fillText("Don't Read The Manual",64, 48);

        this.convergame.ctx.font="16px Helvetica";
        this.convergame.ctx.fillText("3",width / 4, height / 4);
        this.convergame.ctx.fillText("14",width / 2, height / 2);
        this.convergame.ctx.fillText("21",100, 250);
        this.convergame.ctx.fillText("45", width - 250, 550);

        //Scene area
        this.convergame.ctx.rect(32,64, (width - 64), (height - 128));
        this.convergame.ctx.stroke();
        this.convergame.ctx.fillText("2x",width / 2 + 64, height - 80);
        this.convergame.ctx.fillText("1x",width / 2 + 128, height - 80);
        this.convergame.ctx.fillText("1x",width / 2 + 192, height - 80);
        this.convergame.ctx.fillText("5x",width / 2 + 256, height - 80);
        this.convergame.ctx.rect(width / 2 , height - 128, width / 2 - 32, 64);
        this.convergame.ctx.stroke();
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}

function ControlsTest()
{
    this.convergame = null;

    this.textToDisplay = "";

    this.updateFunction = function(time)
    {
        this.textToDisplay = "";
        
        this.textToDisplay += "Up: " + this.convergame.isControlPressed("up");
        this.textToDisplay += ", ";
        
        this.textToDisplay += "Down: " + this.convergame.isControlPressed("down");
        this.textToDisplay += ", ";
        
        this.textToDisplay += "Left: " + this.convergame.isControlPressed("left");
        this.textToDisplay += ", ";
        
        this.textToDisplay += "Right: " + this.convergame.isControlPressed("right");
        
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = "#FFFFFF";
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font = 32 * convergame.getScreenScale() + "px Sans Serif";
        
        this.convergame.ctx.fillText("Dynamic multi-press control system!",100, 100);
        
        this.convergame.ctx.fillText(this.textToDisplay,100, 200);
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
        this.textWhiteCounter = 0;
        this.sceneChangeCounter = 0;
    };
}
var canvas = document.getElementById("game"), 
introScene = new IntroScene(), 
testScene = new TestScene(),
artStyleTest = new ArtStyleTest(),
controlsTest = new ControlsTest(),
convergame = new Convergame(canvas);
convergame.init();
convergame.changeScene(controlsTest);
convergame.startMainGameLoop();

function IntroScene()
{
    this.convergame = null;

    this.textWhite = true;
    
    this.textWhiteCounter = 0;
    this.sceneChangeCounter = 0;

    this.updateFunction = function(time)
    {
        this.textWhiteCounter += time;
        this.sceneChangeCounter += time;
        
        if (this.textWhiteCounter>=0.5)
        {
            this.textWhite = !this.textWhite;
            this.textWhiteCounter = 0;
        }
        
        if (this.sceneChangeCounter>=5)
        {
            this.convergame.changeScene(testScene);
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = '#FF0000';
        if (this.textWhite) textColour = '#FFFFFF';
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="30px Sans Serif";
        this.convergame.ctx.fillText("Reversed Game for JS13K",(width*0.5)-200, (height*0.5));
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
        this.textWhiteCounter = 0;
        this.sceneChangeCounter = 0;
    };
}

function TestScene()
{
    this.convergame = null;

    this.textBlue = true;
    
    this.textBlueCounter = 0;
    this.sceneChangeCounter = 0;

    this.updateFunction = function(time)
    {
        this.textBlueCounter += time;
        this.sceneChangeCounter += time;
        
        if (this.textBlueCounter>0.25)
        {
            this.textBlue = !this.textBlue;
            this.textBlueCounter = 0;
        }
        
        if (this.sceneChangeCounter > 2.5)
        {
            this.convergame.changeScene(introScene);
        }
    };
    
    this.renderFunction = function()
    {
        var width = this.convergame.getCanvasWidth();
        var height = this.convergame.getCanvasHeight();
        
        this.convergame.ctx.fillStyle = "#000000";
        this.convergame.ctx.fillRect(0, 0, width, height);
        
        var textColour = '#00FF00';
        if (this.textBlue) textColour = '#0000FF';
        
        this.convergame.ctx.fillStyle = textColour;
        this.convergame.ctx.font="30px Sans Serif";
        this.convergame.ctx.fillText("Hello! I'm the test scene!",(width*0.5)-200, (height*0.5));
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
        this.textBlueCounter = 0;
        this.sceneChangeCounter = 0;
    };
}
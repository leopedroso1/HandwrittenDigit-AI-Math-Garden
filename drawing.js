const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 14;

let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;
let isPainting = false;
let canvas;
let context;

function prepareCanvas(){

    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d'); // Get the context of the canvas in order to manipulate or get what is going on

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); 
    
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round'; // Join the points in the canvas making the line smoother.
    

        /*********************  Adding an event listeners - Web Site *********************/

    // Mouse Down
    document.addEventListener('mousedown', (event) => {

//        console.log('Mouse Pressed');
        isPainting = true;

    }); // Arguments (type of event: mousedown >> when mouse clicked / callback)


    // Mouse Movement
    document.addEventListener('mousemove', (event) => {

            previousX = currentX;
            previousY = currentY;

            currentX = event.clientX - canvas.offsetLeft; // we need to calculate the offset in order to get the border of our canvas
            currentY = event.clientY  - canvas.offsetTop;
    
            /* We will use the following step by step methods to draw something in a canvas
        
            beginPath() --> Create new path
            moveTo() --> Set Starting Point
            lineTo() --> Create a Line
            closePath()  --> close the path()
            stroke() --> draw the line on the screen
        
        */

           if (isPainting) {
            context.beginPath();
            context.moveTo(previousX, previousY); // Start point
            context.lineTo(currentX, currentY); // Ending point
            context.closePath();
            context.stroke();

        }

    }); 

    // Mouse Up: Release left button key
    document.addEventListener('mouseup', (event) => {

//        console.log('Mouse Released');
        isPainting = false;
    
    }); 
    
    
    // Canvas Targeting: If we leave the canvas area stop drawing
    canvas.addEventListener('mouseleave', (event) => {

        isPainting = false;
        
    }); 


        /*********************  Adding an event listeners - Mobile + Tablets Site *********************/

    // Touch Events - Down
    canvas.addEventListener('touchstart', (event) => {

  //      console.log('Touch Down');
        isPainting = true;

        // Note: Touches return an array because the user can have multiple touches at same time
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;

    }); 


    canvas.addEventListener('touchend', (event)=> {

        isPainting = false;
    });

    canvas.addEventListener('touchcancel', (event)=> {

        isPainting = false;
        
    });


    canvas.addEventListener('touchmove', (event)=> {

        previousX = currentX;
        previousY = currentY;

        currentX = event.touches[0].clientX - canvas.offsetLeft; // we need to calculate the offset in order to get the border of our canvas
        currentY = event.touches[0].clientY  - canvas.offsetTop;

       if (isPainting) {

            context.beginPath();
            context.moveTo(previousX, previousY); // Start point
            context.lineTo(currentX, currentY); // Ending point
            context.closePath();
            context.stroke();

        }

        
    });

}


function clearCanvas(){

    // Reset the values
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); 

}

let answer
let score = 0;
let backgroundImages = [];

function nextQuestion(){

    // .innerHTML ==> Set the inner content of the variable <h1>inner content</h1>

    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1 // 0-4 random

    const n2 = Math.ceil(Math.random() * 6);
    document.getElementById('n2').innerHTML =  n2 //0-5 random

    answer = n1 + n2;

}

function checkAnswer(){

    const prediction = predictImage();

    if (prediction == answer){

        score ++;

        if (score <= 6) {
            
            backgroundImages.push(`url('images/background${score}.svg')`)
            document.body.style.backgroundImage = backgroundImages // Acess the CSS style from background;

        } else {

            alert('Congratulations! Your math garden is in full bloom! Do you want start again?')

            // Reset variables 
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages // Add blank array by default
        }

    } else {

        if (score != 0) { score --; }
        alert('Whoops! Check your calculations and try writing the number neater next time!');

        // Remove after 1 second
        setTimeout(() => {

            backgroundImages.pop();

        }, 1000); //1s

    }

}
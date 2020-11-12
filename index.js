const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton,{
    //Notify the outside world
    onStart(totalDuration){
        duration = totalDuration;
        console.log('Time started');
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        );
        
    },

    onComplete(){
        console.log('Completed')
    }
});
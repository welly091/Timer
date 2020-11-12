class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.timeRemainingchecker = false;
        this.circlechecker = false;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('change', this.test);
    }
    start = () => {
        if(this.timeRemainingchecker == false && this.onStart){
            this.onStart(this.timeRemaining);
            this.timeRemainingchecker = true;
        }
        if(this.circlechecker == false){
            if(this.timeRemaining >= 0 ){
            this.tick();
            this.timer = setInterval(this.tick, 20);
            }else{
            alert('Please enter a valid number');
            this.timeRemaining = 0; 
            }
        this.circlechecker = true;
        }   
    }
    
    tick = () => {
        if(this.timeRemaining > 0){
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }else{
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }
    }

    pause = () =>{
        clearInterval(this.timer);
        this.circlechecker = false;
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    } 
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
     
    test = () =>{
        this.timeRemainingchecker = false;
    }
}

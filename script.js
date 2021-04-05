let seconds = document.getElementById("seconds");
let tens = document.getElementById("tens");

const startButton = document.getElementsByClassName("start")[0];
const stopButton = document.getElementsByClassName("stop")[0];
const resetButton = document.getElementsByClassName("reset")[0];

const listCounter = [];
seconds.innerHTML = "00";
tens.innerHTML = "00";

startButton.addEventListener("click", () => {   

    let count = setInterval(function() {
        let tensCounter = parseInt(tens.innerHTML);

        tensCounter += 1;

        if(tensCounter <= 9) {
            tens.innerHTML = "0" + tensCounter;
        }

        if(tensCounter > 9) {
            tens.innerHTML = tensCounter;
        }

        if(parseInt(tens.innerHTML) > 99) {
            let secondsCounter = parseInt(seconds.innerHTML);
            secondsCounter += 1;

            if(secondsCounter <= 9) {
                seconds.innerHTML = "0" + secondsCounter;
            }

            if(secondsCounter > 9) {
                seconds.innerHTML = secondsCounter;
            }
            tensCounter = 0;
            tens.innerHTML = tensCounter;
        }




    }, 10);


    stopButton.addEventListener("click", () => {
        clearInterval(count);
    })

    resetButton.addEventListener("click", () => {
        seconds.innerHTML = "00";
        tens.innerHTML = "00";
    })  
})



/*startButton.addEventListener("click", () => {
    let count = setInterval(function() {
        let tensNumber = parseInt(tens.innerHTML);

        tensNumber += 1;

        tens.innerHTML = tensNumber;

        if(parseInt(tens.innerHTML) > 99) {
            let secondsNumber = parseInt(seconds.innerHTML);
            secondsNumber += 1;
            seconds.innerHTML = secondsNumber;
            console.log(seconds.innerHTML);
            tensNumber = 0;
            tens.innerHTML = tensNumber; 
        }
        
    }, 10);

    pauseButton.addEventListener("click", () => {
        clearInterval(count);
    })

    stopButton.addEventListener("click", () => {
        
        const timer = document.createElement("p");
        timer.innerHTML = seconds.innerHTML + ":" + tens.innerHTML;
        list.appendChild(timer);
        console.log(timer);
        clearInterval(count);
    })
})*/
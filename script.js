document.addEventListener("DOMContentLoaded", () => {
    let timeRef = document.querySelector('.timerDisplay');
    let timeCountDown = document.querySelector('.timerCountDown')
    let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    let int = null;
    let clock = document.getElementById('horloge')
    let minuteCountDown=document.querySelector('[name=minute]')
    let secondCountDown=document.querySelector('[name=second]')
    let p=document.querySelector('p')
    let test = []
    let loop=[]
    //---------------------style-------------------------------------

    document.getElementById('chronos').style.visibility="hidden";
    document.getElementById('horloge').style.visibility="visible";
    document.getElementById('alarme').style.visibility="hidden";
    document.getElementById('minuteur').style.visibility="hidden";

    document.getElementById('chronometre').addEventListener('click', () => {
        document.getElementById('chronos').style.visibility="visible";
        document.getElementById('horloge').style.visibility="hidden";
        document.getElementById('alarme').style.visibility="hidden";
        document.getElementById('minuteur').style.visibility="hidden";
    })
    document.getElementById('clock').addEventListener('click', () => {
        document.getElementById('chronos').style.visibility="hidden";
        document.getElementById('horloge').style.visibility="visible";
        document.getElementById('alarme').style.visibility="hidden";
        document.getElementById('minuteur').style.visibility="hidden";
    })
    document.getElementById('alert').addEventListener('click', () => {
        document.getElementById('chronos').style.visibility="hidden";
        document.getElementById('horloge').style.visibility="hidden";
        document.getElementById('alarme').style.visibility="visible";
        document.getElementById('minuteur').style.visibility="hidden";
    })
    document.getElementById('countDown').addEventListener('click', () => {
        document.getElementById('chronos').style.visibility="hidden";
        document.getElementById('horloge').style.visibility="hidden";
        document.getElementById('alarme').style.visibility="hidden";
        document.getElementById('minuteur').style.visibility="visible";
    })

    // //---------------------chronometre-------------------------------

   document.getElementById('loopTimer').addEventListener('click',()=>{
       
    loop.push(timeRef.innerHTML)

   p.innerHTML=loop.join('<br>')

   })

    document.getElementById('startTimer').addEventListener('click', () => {
        if (int != null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    })

    document.getElementById('pauseTimer').addEventListener('click', () => {
        clearInterval(int);
    })

    document.getElementById('resetTimer').addEventListener('click', () => {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        loop=[]
        p.innerHTML=''
        timeRef.innerHTML = '00 : 00 : 00 : 0000';
    })


    function displayTimer() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;

            if (seconds == 60) {
                seconds = 0;
                minutes++;

                if (minutes == 60) {
                    minutes = 0;
                    heures++;

                }
            }
        }
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

        timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    }



    // //---------------------------oclock---------------------------------
    function oclock() {

        const date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        if (hour < 10) { hour = '0' + hour; }
        if (minute < 10) { minute = '0' + minute; }
        if (second < 10) { second = '0' + second; }
        timer = `${hour}:${minute}:${second}`
        clock.innerHTML = timer

        if (`${timer.toString()}` == Object.values(test)[0]) {
            alert('gg')
        }
        setTimeout(oclock, 1000);
    }

    oclock()

    // //---------------------------alarm---------------------------------
    function alarm() {
        let alarmvalue = document.getElementById('timer').value
        return alarmvalue
    }
    document.getElementById('alarm').addEventListener('click', () => {
        let alarmset = alarm() + ':' + '00'
        test.push(alarmset)
    })

    //----------------------countdown---------------------------------   
    document.getElementById('startCountDown').addEventListener('click', () => {
        if (int != null) {
            clearInterval(int);
        }
        int = setInterval(displayCountDown, 10);
    })

    document.getElementById('pauseCountDown').addEventListener('click', () => {
        clearInterval(int);
    })

    document.getElementById('resetCountDown').addEventListener('click', () => {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        timeCountDown.innerHTML = `${'00'}:${'00'}:${'000'}`;
    })

    document.getElementById('setCountdown').addEventListener('click', () => {
    [milliseconds, seconds, minutes, hours]=[0,secondCountDown.value,minuteCountDown.value,0]
            
        })
    function displayCountDown() {
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        timeCountDown.innerHTML = `${m}:${s}:${ms}`;
        milliseconds -= 10
        if (milliseconds <= 0) {
                milliseconds = 999;
                seconds--;
            if (seconds <= 0) {
                    seconds = 59;
                    minutes--;
                if (minutes == 0) {
                    minutes==0;
                }
            }
        }else if(minutes==-1||seconds==-1) {
            clearInterval(int);
            [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
            timeCountDown.innerHTML = `${'00'}:${'00'}:${'000'}`;
            
        }
    }


}
)
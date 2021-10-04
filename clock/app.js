// Using the javascript date object. Milliseconds based on the UNIX clock 1970

let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hours == 0){ 
        hrs = 12;
        period = "AM";
    } else if (hours < 12) {
        hours = hours - 12;
        period = "PM";
    }
    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
    let time = `${hours}:${mins}:${secs} ${period}`;

    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);

    console.log('Current Time', time);
}

clock();

/*
store Date obj to a var called date
can store different values in variables via the methods from the Date obj
Time periods 0 = midnight 
Setting time variable as innerText
setTimeout(clock, 1000); so the function is exectued every second otherwise js is just storing the time 
at which it was called and not updating, This could also be fixed by using an event hook 
i.e. window.onload = ()=> { clock (); } then you can call it first
*/
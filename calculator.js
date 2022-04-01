document.getElementById("output").value = "0";
const insertNum = (num) =>{

    let re= /^0\./;
    let re2= /^0$/;
    let out = document.getElementById("output").value;


    if(re.test(out)){
        document.getElementById("output").value += num;
    }
    else if(re2.test(out)){
        document.getElementById("output").value = num;
    }
    else{
        document.getElementById("output").value += num;
    }
}

const insertSymbol = (sym) =>{
    // checkInput();
    let out = document.getElementById("output").value;

    if(/^0$/.test(out)){
        if(/^\-$/.test(sym)){
            document.getElementById("output").value = sym;
        }
        else{

        }
    }
    else{
        document.getElementById("output").value = document.getElementById("output").value + " " + sym + " ";
    }
}
const solve = () =>{
    let infi = /^([\+|\-])?Infinity$/;
    try{
        let out = eval(document.getElementById("output").value);
        if(infi.test(out)){
            document.getElementById("output").value = "Cannot divide by zero";
        }else{
            document.getElementById("output").value = out;

        }
    }catch {
        document.getElementById("output").value = "Invalid Operation";
    }
}

const refresh = () =>{
    document.getElementById("output").value = "0";
}

const getDate = () =>{
    let daysArray = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthArray = [
        "January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November","December"
    ]
    let d = new Date();
    let date = d.getDate();
    let day = d.getDay();
    let year = d.getFullYear();
    let month = d.getMonth();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let am_pm = (hours >= 12) ? "PM" : "AM";
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let output =
        `${hours} : ${minutes} : ${seconds} ${am_pm} <br>${daysArray[day]}, ${date} ${monthArray[month]}, ${year}`;
    document.getElementById("showDate").innerHTML = output;
}
const insertPoint = (sym) =>{
    let out = document.getElementById("output").value;

    if(out == 0){
        document.getElementById("output").value  = "0.";
    }
    else{
        document.getElementById("output").value += sym;
    }
}

function checkInput(){
    let out = document.getElementById("output").value;
    return /\D+/g.test(out);
}

setInterval(getDate, 1000);

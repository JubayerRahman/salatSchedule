var day = document.getElementById("day");
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");
var hour = document.getElementById("hour");
var type = document.getElementById("type");

var date = new Date();
var currentday = date.getDay();
var currentdate = date.getDate();
var currentmonth = date.getMonth();
var currentyar = date.getFullYear();


var dayName1 = "Saturday"
var dayName2 = "Sunday"
var dayName3 = "Monday"
var dayName4 = "Tuesrday"
var dayName5 = "Wednesday"
var dayName6 = "Thursday"
var dayName7 = "Friday"

if(currentday===0){
    currentday = dayName2;
}
if(currentday===1){
    currentday = dayName3;
}
if(currentday===2){
    currentday = dayName4;
}
if(currentday===3){
    currentday = dayName5;
}
if(currentday===4){
    currentday = dayName6;
}
if(currentday===5){
    currentday = dayName7;
}
if(currentday===6){
    currentday = dayName1;
}

var month1 ="January"
 var month2 ="February"
 var month3 ="March"
 var month4 ="April"
 var month5 ="May"
 var month6 ="June"
 var month7 ="July"
 var month8 ="August"
 var month9 ="September"
 var month10 ="October"
 var month11 ="November"
 var month12 ="December"

 if(currentmonth===0){
    currentmonth = month1
 }
 if(currentmonth===1){
    currentmonth = month2
 }
 if(currentmonth===2){
    currentmonth = month3
 }
 if(currentmonth===3){
    currentmonth = month4
 }
 if(currentmonth===4){
    currentmonth = month5
 }
 if(currentmonth===5){
    currentmonth = month6
 }
 if(currentmonth===6){
    currentmonth = month7
 }
 if(currentmonth===7){
    currentmonth = month8
 }
 if(currentmonth===8){
    currentmonth = month9
 }
 if(currentmonth===9){
    currentmonth = month10
 }
 if(currentmonth===10){
    currentmonth = month11
 }
 if(currentmonth===11){
    currentmonth = month12
 }
 

document.getElementById("day").innerHTML = currentday +","
document.getElementById("date").innerHTML = currentdate +","
document.getElementById("date").innerHTML = currentdate +"-"
document.getElementById("month").innerHTML = currentmonth +","
document.getElementById("year").innerHTML = currentyar

function clock(){
    var date = new Date();
    var currenthours = date.getHours();
var currentminutes = date.getMinutes();
var currentseconds = date.getSeconds();
    if(currenthours>12){
        currenthours = currenthours-12
        document.getElementById("type").innerHTML="PM"
    }
    if(currenthours ===0 ){

        currenthours = 12


    }
    if(currenthours <10 ){

        currenthours = "0" + currenthours


    }
    if( currentminutes<10  ){


        currentminutes = "0" + currentminutes


    }
    if(currentseconds < 10 ){


        currentseconds = "0" + currentseconds

    }
document.getElementById("hour").innerHTML = currenthours +":"
document.getElementById("minute").innerHTML = currentminutes +":"
document.getElementById("sec").innerHTML = currentseconds

setInterval(clock, 1000)
}

clock()

var date = new Date();
var namazTime = date.getHours();
var namazMinute = date.getMinutes();

if(namazTime >= 5 && namazTime<=6.30){
    document.getElementById("statement").innerHTML= "Time to pray your Fajr prayer"
}
if(namazTime >= 11.58 && namazTime<=14.30){
    document.getElementById("statement").innerHTML= "Time to pray your Zuhr prayer"
}
if(namazTime >= 14.57 && namazTime<=17){
    document.getElementById("statement").innerHTML= "Time to pray your Asr prayer"
}
if(namazTime >= 17.17 && namazTime<=17.30){
    document.getElementById("statement").innerHTML= "Time to pray your Maghrib prayer"
}
if(namazTime >= 17.17 && namazTime<=17.30){
    document.getElementById("statement").innerHTML= "Time to pray your Maghrib prayer"
}
if (namazTime >= 18.48 && namazTime <=24){
    document.getElementById("statement").innerHTML= "Time to pray your Ishr prayer"
}
if(namazTime >=1 && namazTime <5){
    document.getElementById("statement").innerHTML= "You can pray Tahajud now "
}

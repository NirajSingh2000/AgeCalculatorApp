const months = [31,28,31,30,31,30,31,31,30,31,30,31];
function ageCalculate(){
let today = new Date();
let inputDate = new Date(document.getElementById("date-input").value);
let birthMonth,birthDate,birthYear;
let birthDetails = {
date:inputDate.getDate(),
month:inputDate.getMonth()+1,
year:inputDate.getFullYear()
}
let currentYear = today.getFullYear();
let currentMonth = today.getMonth()+1;
let currentDate = today.getDate();

leapChecker(currentYear);

if(
birthDetails.year > currentYear ||
( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
(birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
){
alert("Not Born Yet");
displayResult("-","-","-");
return;
}

birthYear = currentYear - birthDetails.year;

if(currentMonth >= birthDetails.month){
birthMonth = currentMonth - birthDetails.month;
}
else{
birthYear--;
birthMonth = 12 + currentMonth - birthDetails.month;
}

if(currentDate >= birthDetails.date){
birthDate = currentDate - birthDetails.date;
}
else{
birthMonth--;
let days = months[currentMonth - 2];
birthDate = days + currentDate - birthDetails.date;
if(birthMonth < 0){
    birthMonth = 11;
    birthYear--;
}
}
displayResult(birthDate,birthMonth,birthYear);
}

function displayResult(bDate,bMonth,bYear){
document.getElementById("years").textContent = bYear;
document.getElementById("months").textContent = bMonth;
document.getElementById("days").textContent = bDate;
}

function leapChecker(year){
if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
months[1] = 29;
}
else{
months[1] = 28;
}
}



function updateTimer() {
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
document.getElementById('timer').textContent = timeString;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Call updateTimer immediately to display the time when the page loads
updateTimer();



var date = new Date(); 
var dd = date.getDate(); 
var mm = date.getMonth() + 1; 
var yyyy = date.getFullYear(); 
var newDate = dd + "-" + mm + "-" +yyyy; 
var p = document.getElementById("myId"); 
p.innerHTML = newDate; 
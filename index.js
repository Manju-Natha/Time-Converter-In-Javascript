let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");


function createAndAppend() {
    let hoursInput = hoursInputEl.value;
    let minutesInput = minutesInputEl.value;
    if (hoursInput === "") {
        errorMsgEl.textContent = "Please Enter a Vaild Number of Hour";
    } else if (minutesInput === "") {
        errorMsgEl.textContent = "Please Enter a Vaild Number of Minute";
    } else {
        errorMsgEl.textContent = "";
        let hourAndSecound = (hoursInput * 3600) + (minutesInput * 60);
        console.log(hourAndSecound);
        timeInSecondsEl.classList.add("timeInSeconds");
        timeInSecondsEl.textContent = hourAndSecound + "s";
    }
}


convertBtnEl.addEventListener("click", createAndAppend);
let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");  

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".time").innerHTML = user_time;

function goToMainPage() {
    // Replace 'main.html' with the actual main page URL
    window.location.href = 'main.html';
}

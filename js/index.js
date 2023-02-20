const togglebtn = document.querySelector(".toggle-btn");
const nav1 = document.querySelector(".nav1");

function myFunction() {
    var x = document.querySelector(".nav1 ul");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



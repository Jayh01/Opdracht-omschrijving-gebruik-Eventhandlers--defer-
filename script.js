let btn = document.querySelector("#mybutton");
btn.addEventListener("click", function () {
    alert("button clicked")
})
let achterGrond = document.querySelector(".blue-background");
let btn2 = document.getElementById("btn-background");

btn2.addEventListener("click", function () {   
    achterGrond.classList.toggle("red-background")

})

// btn2.addEventListener("click", function () {   
//     achterGrond.classList.add("red-background")

// })
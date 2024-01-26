


var squareC = document.querySelector(".square-box")
var fixedBox =document.querySelector(".fixed-box")

squareC.addEventListener("mouseenter", function(){
    fixedBox.style.display = "block"
})
squareC.addEventListener("mouseleave", function(){
    fixedBox.style.display = "none"
})

var square= document.querySelectorAll(".square")
 square.forEach(function(e){
e.addEventListener("mouseenter", function(){
    var imag = e.getAttribute("data-imge")

    fixedBox.style.backgroundImage = `url(${imag})`

})
 })


  var menu= document.querySelector("nav h3")
  var navimg= document.querySelector("nav img")
  var full= document.querySelector(".full-screen")
  var flag = 0
  menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top= 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top="-100%"
        navimg.style.opacity = 1
        flag = 0
    }
    
  })
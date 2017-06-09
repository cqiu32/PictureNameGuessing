//alert("WTF")

var namePool=["Bremerton","Red_Square","Sacramento","San_Diego","San_Francisco","Seattle"]


var current = namePool[Math.floor(Math.random() * namePool.length)];

var gameOver=false




var picture=document.querySelectorAll("img")



var display=document.getElementById("answer");

display.innerHTML=current

if(current==="Bremerton"){
    document.getElementById("brem").setAttribute('wtf','true')
}else if(current==="Red_square"){
    document.getElementById("uw").setAttribute('wtf','true')
}else if(current==="Sacramento"){
    document.getElementById("sac").setAttribute('wtf','true')
}else if(current==="San_Diego"){
    document.getElementById("sd").setAttribute('wtf','true')

}else if(current==="San_Francisco") {
    document.getElementById("sf").setAttribute('wtf','true')
}else if(current==="Seattle") {
    document.getElementById("sea").setAttribute('wtf','true')
}


for(var i=0;i<picture.length;i++){
    picture[i].addEventListener("click",function() {
        if (gameOver === false) {


            var test = this.getAttribute("wtf")
            if (test === "false") {
                this.setAttribute('src', "img/wrong.jfif")
            }


            if (test === "true") {
                display.innerHTML = "you got it!!!"
                gameOver = true
            }
        }
    })
}

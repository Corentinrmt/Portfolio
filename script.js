const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parch = document.querySelector(".parchemin")
const tParch = document.querySelectorAll(".tParch")
const dragon = document.getElementById("dragonGuide")
const inversion = document.querySelector(".inversion")
const bulle = document.getElementById("bulle")
const bulle2 = document.getElementById("bulle2")

const nextPart = document.querySelectorAll(".toPartTwo")
const toPT = nextPart[0]
const toPTh = nextPart[1]

console.log(bulle)
console.log(inversion)


let enVol = true

window.addEventListener("load",function(){

    parch.classList.add("loaded");
    

})

let sombre = false

inversion.addEventListener("click", function(){
    
    if(sombre == false){
        bulle.style.color = "antiquewhite"
        bulle.style.backgroundColor = "darkslategrey"
        bulle2.style.color = "antiquewhite"
        bulle2.style.backgroundColor = "darkslategrey"      
        sombre = true
    }else{
        bulle.style.color = "darkslategrey"
        bulle.style.backgroundColor = "antiquewhite"
        bulle2.style.color = "darkslategrey"
        bulle2.style.backgroundColor = "antiquewhite"
        sombre = false
    }

})

function attente(fonction, temps, fois){

    setTimeout(fonction, temps, fois)

}

function apparitionTitre(){

    h1.classList.add("loadTexte");
}


function apparitionT(fois){
    tParch[fois].classList.add("loadTexte")
}


attente(apparitionTitre, 1000)
for(let i = 0; i<3; i++){
    attente(apparitionT, 2000, i)
}


attente(apparitionT,3000, 3)
attente(apparitionT,4000,4)

//DragonGuide
 function volDragon(){
     console.log(enVol)
     if (enVol == true){
         dragon.classList.toggle("vol")
         setTimeout(volDragon,1500)
     }else{
         dragon.classList.remove("vol")
     }
 }
 
volDragon()

let flying = false
toPT.addEventListener("click", function(){

    if(flying != true){
        flying = true
        dragon.src = "css/images/dragonFly.png"
        setTimeout(function(){dragon.src = "css/images/dragonIdle.png"}, 1500)
        flying = false
    }
})
toPTh.addEventListener("click", function(){

    if(flying != true){
        flying = true
        dragon.src = "css/images/dragonFly.png"
        setTimeout(function(){dragon.src = "css/images/dragonIdle.png"}, 1500)
        flying = false
    }
})
//


//Caroussel
const caroussel = document.querySelector(".imagesC")
const boutons = document.querySelectorAll(".boutonsC")

const boutonG = boutons[0]
const boutonD = boutons[1]

console.log(boutons)
console.log(boutonD)
console.log(caroussel)

let indice = 1

boutonG.addEventListener("click",function(){
    if (indice != 4){
    indice += 1
    }else{
        indice = 1
    }
    if (indice == 1){
        caroussel.src = "css/images/Animation3D/AppartementBlender.png"
    }else{ if (indice == 2){
        caroussel.src = "css/images/Animation3D/FantasyText.png"
    }else{if(indice == 3){
        caroussel.src = "css/images/Animation3D/AppartText.png"
    }else{if(indice == 4){
        caroussel.src = "css/images/Animation3D/LumiereBlender.png"
    }
    }
    }   
    }
})

boutonD.addEventListener("click",function(){
    if (indice != 1){
        indice -= 1
    }else{
        indice = 4
    }
    if (indice == 1){
        caroussel.src = "css/images/Animation3D/AppartementBlender.png"
    }else{ if (indice == 2){
        caroussel.src = "css/images/Animation3D/FantasyText.png"
    }else{if(indice == 3){
        caroussel.src = "css/images/Animation3D/AppartText.png"
    }else{if(indice == 4){
        caroussel.src = "css/images/Animation3D/LumiereBlender.png"
    }
    }
    }   
    }  
})

// 

//Apparition Dragons Amis

const bAmis = document.querySelector(".bAmis")
const maison = document.getElementById("maison")

const amis = "<img class='amis' src='css/images/dragonFriend.png'>"
let HTMLmaison = ""

console.log(maison)

let limitte = 0

bAmis.addEventListener("click", function(){
    if (limitte < 20){
        limitte += 1
        console.log("salut")
        HTMLmaison += amis
        maison.innerHTML = HTMLmaison
    }else{
        console.log("maximum")
    }
    
})


//


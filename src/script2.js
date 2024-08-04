import { rotatearray, checkIf8, countOnes, topzeros, leftzeros, html, htmlclick, binaryStringTo3x3Array, shapes } from "./rotate.js";
import anime from "./anime.es.js ";



const scorecard = score()

let num = 0
let filtered

let shape = binaryStringTo3x3Array(randomfromarray(shapes))


   
function randomfromarray(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

const rotationpossibles = [0, 90, 180, 270]
const randomRotate = randomfromarray(rotationpossibles)
//console.log(randomRotate)

let displayedshape = rotatearray(shape, randomRotate)


const randdiv = document.getElementById(`random`)

function proj(row, ids){
    
    displayedshape[Number(row)].forEach((num) => {

        if (num === 1 && !filledarr.includes(Number(ids))){
            projrarr.push(ids)

            ids += 100 //next box id
           
        }
        else{
            ids+=100 //skip to next box without registering a filled box
        }})
}



function all(){
    shape = binaryStringTo3x3Array(randomfromarray(shapes))
    displayedshape = rotatearray(shape, randomRotate)

    //To remove empty lines from the 3x3 matrix
    leftzeros(displayedshape)
    topzeros(displayedshape)
    //doing it again to remove any additional blank lines
    leftzeros(displayedshape)
    topzeros(displayedshape)
    let randarr = []

    setTimeout(() => {
            randdiv.innerHTML = ``
        displayedshape[0].forEach((number) => {
            if (number === 1) {
                //console.log(`yes`)
                randdiv.innerHTML += `<div class="how"></div>`
            }
            else{
                randdiv.innerHTML += `<div></div>`
            }
        })
        displayedshape[1].forEach((number) => {
            if (number === 1) {
                //console.log(`yes`)
                randdiv.innerHTML += `<div class="how"></div>`
            }
            else{
                randdiv.innerHTML += `<div></div>`
            }
        })
        displayedshape[2].forEach((number) => {
            if (number === 1) {
                //console.log(`yes`)
                randdiv.innerHTML += `<div class="how"></div>`
            }
            else{
                randdiv.innerHTML += `<div></div>`
            }
        })
    }, 200);


    filtered = randarr.filter(num => num !=0)
    let newarr = []
    for (let i = 0; i < filtered.length; i++){
        newarr.push(i)
        //console.log(newarr)
    }


}
const childs = randdiv.childNodes

randdiv.addEventListener(`click`, () => {
    tracking = true
    
    
})

all()



let projection = true

const container = document.getElementById(`cont`)

const sq = container.childElementCount ** 0.5
//console.log(`sq = `, sq)
container.style.gridTemplateColumns = `repeat(${sq}, 40px)`
container.style.gridTemplateRows = `repeat(${sq}, 40px)`
let filledarr = []
let projrarr = []


let tracking = true
setInterval(() => {

if (tracking) {
    childs.forEach((child) => {
        if(child.className === `how`){
            child.style.border = `2px solid blue`
        }
    })
}
else{
    childs.forEach((child) => {
        if(child.className === `how`){
            child.style.border = `1px solid white`
        }
    })
}

}, 10);


container.addEventListener(`mouseover`, (eve) => {
   
    try {
        let unfit = false
        let id = eve.target.id
                let idsx = Number(id)
                let idsy = Number(id) + 1
                let idsz = Number(id) + 2

       
        

        if (tracking){
            proj(0, idsx)
            proj(1, idsy)
            proj(2, idsz)


        if (projrarr.length !== countOnes(displayedshape)){
            projection = false
            projrarr = []
            throw new Error(`hello`)
        }
        else{
            projection = true
        }
    
            if (!unfit){
                document.querySelectorAll(`.boxes`).forEach((box) => {

                    if (!filledarr.includes(Number(box.id))){

                        box.style.background = `none`
                    }
                        
                    
                    
                })



                filledarr.forEach((num) => {
                    if (id === num) {
                        
                        //console.log(`what`)
                        throw new Error(`hello`)
                    }
                })
                projrarr = []
                html(0, idsx, displayedshape, filledarr)
                html(1, idsy, displayedshape, filledarr)
                html(2, idsz, displayedshape, filledarr)
    
            }
        } 
        
        
            }
            catch (error) {
                projection = false
                document.querySelectorAll(`.boxes`).forEach((box) => {
                    
                    if (!filledarr.includes(Number(box.id))){
        
                        box.style.background = `none`
                    }
                
                
            })
            }
 
})
container.addEventListener(`touchstart`, (eve) => {

    try {
        let unfit = false
        let id = eve.target.id
                let idsx = Number(id)
                let idsy = Number(id) + 1
                let idsz = Number(id) + 2

       
        

        if (tracking){
            proj(0, idsx)
            proj(1, idsy)
            proj(2, idsz)


        if (projrarr.length !== countOnes(displayedshape)){
            projection = false
            projrarr = []
            throw new Error(`hello`)
        }
        else{
            projection = true
        }
    
            if (!unfit){
                document.querySelectorAll(`.boxes`).forEach((box) => {

                    if (!filledarr.includes(Number(box.id))){

                        box.style.background = `none`
                    }
                        
                    
                    
                })



                filledarr.forEach((num) => {
                    if (id === num) {
                        
                        //console.log(`what`)
                        throw new Error(`hello`)
                    }
                })
                projrarr = []
                html(0, idsx, displayedshape, filledarr)
                html(1, idsy, displayedshape, filledarr)
                html(2, idsz, displayedshape, filledarr)
    
            }
        } 
        
        
            }
            catch (error) {
                projection = false
                document.querySelectorAll(`.boxes`).forEach((box) => {
                    
                    if (!filledarr.includes(Number(box.id))){
        
                        box.style.background = `none`
                    }
                
                
            })
            }

   
 
})

container.addEventListener(`mouseup`, ev => {
    projrarr = []
    if (tracking && projection){
        
        tracking = false
        const targ = ev.target
        
    
    
    
    
    
        let id = ev.target.id
    
        let idsx = Number(id)
        let idsy = Number(id) + 1
        let idsz = Number(id) + 2
          
        htmlclick(0, idsx, filledarr, displayedshape) //for row 1
        htmlclick(1, idsy, filledarr, displayedshape) //for row 2
        htmlclick(2, idsz, filledarr, displayedshape) //for row 3

            
        all()
    }
    

        let lines = 0
   function iswin(){
    
    let finarrx = new Set()
  
    filledarr.forEach((num) => {
        finarrx.add(String(num).replace(`0`, ``))

    })

    let finisher = []

        finarrx.forEach((num) => {
                finisher.push(Number(String(num).slice(-1)))
            })

                const columns = checkIf8(finisher.sort())
            const columnsToRemove = columns.getbuffer()
            if (columnsToRemove){
                lines ++
                for (let i = 1; i < 9; i++){
                    
                    anime({
                        targets: document.getElementById(`${i}0${columnsToRemove}`),
                        scale: [1.5, 0],
                        duration:500,
                        easing: `easeInOutQuad`,
                        complete: function(){anime({
                            targets: document.getElementById(`${i}0${columnsToRemove}`),
                            scale: [0, 1],
                            duration: 10
                        })}
                    
                    
                    })
                    setTimeout(() => {
                            document.getElementById(`${i}0${columnsToRemove}`).style.background = `none`
                    }, 1500);
                    
                    //
                    filledarr = filledarr.filter(num => num !== Number(`${i}0${columnsToRemove}`))

                     
                 }
                 
                 iswin()

            }
        return lines
   }

    lines = iswin()
   if (lines > 0){
    scorecard.increment(lines)
   }
    
    

const interval = setInterval(() => {
        if (num <= scorecard.getscore()){
        let scoretext = document.getElementById(`score`)
        scoretext.innerText = num
        num ++
    
    
}
else{
    clearInterval(interval)
}
}, 1);
  






   let loss = isloss()
   if (loss){

    document.getElementById(`losepopup`).style.transform = `scale(1)`
    document.getElementById(`endscore`).innerText = `Score: ${scorecard.getscore()}`
    document.getElementById(`retry`).addEventListener(`click`, () =>  location.reload())
   }











            
            
             

})

document.onreadystatechange = function() {

    if (document.readyState !== "complete") {
        
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("#loader").style.display = "none";
            document.querySelector("#cont").style.visibility = "visible";
            document.querySelector("#generate").style.visibility = "visible";
        }, 15);


        
    }
};
document.querySelector("#cont").style.visibility = "hidden";
document.querySelector("#generate").style.visibility = "hidden";
console.log(document.readyState)


let children = Array.from(document.querySelector(`#cont`).children)
let arrayn = []
children.forEach((child) => {
 if (!filledarr.includes(Number(child.id)))
 arrayn.push(Number(child.id))

})
function isloss(){
    let loss = false
    let errors = 0
    tracking = true
    arrayn.forEach((i) => {
        try {
            let unfit = false
            let id = i
                    let idsx = Number(id)
                    let idsy = Number(id) + 1
                    let idsz = Number(id) + 2
    
            
           
            
    
            if (tracking){
                proj(0, idsx)
                proj(1, idsy)
                proj(2, idsz)
    
    
            if (projrarr.length !== countOnes(displayedshape)){
                projection = false
                projrarr = []
                throw new Error(`hello`)
            }
            else{
                projection = true
            }
        
                if (!unfit){
                    document.querySelectorAll(`.boxes`).forEach((box) => {
    
                        if (!filledarr.includes(Number(box.id))){
    
                            box.style.background = `none`
                        }
                            
                        
                        
                    })
    
    
    
                    filledarr.forEach((num) => {
                        if (id === num) {
                            
                            //console.log(`what`)
                            throw new Error(`hello`)
                        }
                    })
                    projrarr = []
                    html(0, idsx, displayedshape, filledarr)
                    html(1, idsy, displayedshape, filledarr)
                    html(2, idsz, displayedshape, filledarr)
        
                }
            } 
            
            
                }
                catch (error) {
                    errors++
                    
                    projection = false
                    document.querySelectorAll(`.boxes`).forEach((box) => {
                        
                        if (!filledarr.includes(Number(box.id))){
            
                            box.style.background = `none`
                        }
                    
                    
                })
                }
    })
    console.log(errors)
   if (errors === 64){
    loss = true
    return loss
   }
}

let loss = isloss()
if (loss){
 setTimeout(() => {
    location.reload()
 }, 100);
    
}
function score(){
    let scores = 0

    function increment(lines){
        scores += (Math.round(lines + 10) ** lines ) 
    }

    function getscore() {
        return scores
    }
    return {increment, getscore}
}




    

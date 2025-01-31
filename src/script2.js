import { rotatearray, checkIf8, countOnes, topzeros, leftzeros, html, htmlclick, binaryStringTo3x3Array, shapes, score, loader } from "./rotate.js";
import anime from "./anime.es.js ";

const nextranddiv = document.querySelector(`.next-random`)

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
let nextdisplayedshape = rotatearray(shape, randomRotate)

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
    
    shape = rotatearray(binaryStringTo3x3Array(randomfromarray(shapes)), randomRotate)
    displayedshape = nextdisplayedshape
    nextdisplayedshape = shape

    //To remove empty lines from the 3x3 matrix
    leftzeros(displayedshape)
    topzeros(displayedshape)
    //doing it again to remove any additional blank lines
    leftzeros(displayedshape)
    topzeros(displayedshape)
    let randarr = []

function drawshape(div, classe, shapetype) {
    setTimeout(() => {
        div.innerHTML = ``
    shapetype[0].forEach((number) => {
        if (number === 1) {
            //console.log(`yes`)
            div.innerHTML += `<div class="${classe}"></div>`
        }
        else{
            div.innerHTML += `<div></div>`
        }
    })
    shapetype[1].forEach((number) => {
        if (number === 1) {
            //console.log(`yes`)
            div.innerHTML += `<div class="${classe}"></div>`
        }
        else{
            div.innerHTML += `<div></div>`
        }
    })
    shapetype[2].forEach((number) => {
        if (number === 1) {
            //console.log(`yes`)
            div.innerHTML += `<div class="${classe}"></div>`
        }
        else{
            div.innerHTML += `<div></div>`
        }
    })
}, 200);
}
drawshape(randdiv, `how`, displayedshape)
drawshape(nextranddiv, `nexthow`, nextdisplayedshape)





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

let element = null
if (screen.width > 500){
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
    }, 0.1);
      
    
    
    
    
    
    
       let loss = isloss()
       if (loss){
    
        document.getElementById(`losepopup`).style.transform = `scale(1)`
        document.getElementById(`endscore`).innerText = `Score: ${scorecard.getscore()}`
        document.getElementById(`retry`).addEventListener(`click`, () =>  document.getElementById(`losepopup`).style.display = `none`)
       }
    
    
    
    
    
    
    
    
    
    
    
                
                
                 
    
    })
}

else{
    
    container.addEventListener(`touchmove`, (eve) => {
        const touch = eve.touches[0];
        element = document.elementFromPoint(touch.clientX, touch.clientY);


        try {
            let unfit = false
            let id = element.id
                    let idsx = Number(id)
                    let idsy = Number(id) + 1
                    let idsz = Number(id) + 2
    
           
        //     randdiv.style.position = `absolute`
        // randdiv.style.left = `${touch.clientX}px`
    
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
    

container.addEventListener(`touchend`, ev => {
    projrarr = []
    if (tracking && projection){

        tracking = false
        const targ = ev.target
        let id = element.id
        console.log(id)
    
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
}, 0.1);


   let loss = isloss()
   if (loss){

    document.getElementById(`losepopup`).style.transform = `scale(1)`
    document.getElementById(`endscore`).innerText = `Score: ${scorecard.getscore()}`
    document.getElementById(`retry`).addEventListener(`click`, () =>  document.getElementById(`losepopup`).style.display = `none`)
   }
})

    document.addEventListener(`touchmove`, (ev) => {
        const touch = ev.touches[0];
        element = document.elementFromPoint(touch.clientX, touch.clientY)

           
            randdiv.style.position = `absolute`
    
            randdiv.style.transform = `translate(${touch.clientX - 150}px, ${touch.clientY - 500}px)`
            
        }  
        
    
          
    
        
    )
    document.addEventListener(`touchend`, () => {randdiv.style.transform = `none`})
    


}



















loader()




let children = Array.from(document.querySelector(`#cont`).children)
let arrayn = []
children.forEach((child) => {
 
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


console.log(screen.width, screen.height)

  
    

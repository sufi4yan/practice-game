export function rotatearray(newarr, degrees){
    
    let arr = [
        [],
        [],
        []
    ]
    let arr2 = [
        [],
        [],
        []
    ]

    if (degrees === 180){
        for (let j = 0; j < 3; j++){
            for (let i = 2; i >= 0; i--){
              arr[j].push(newarr[i][j])
              
            }
        }
        for (let j = 0; j < 3; j++){
            for (let i = 2; i >= 0; i--){
              arr2[j].push(arr[i][j])

              
            }
        }
        return arr2
    }
    else if(degrees === 90){
        for (let j = 0; j < 3; j++){
            for (let i = 2; i >= 0; i--){
              arr[j].push(newarr[i][j])
                
            }
        }
        return arr
}
    else if(degrees === 270){
        let  count = 0
        for (let i = 2; i >= 0; i--){
            for (let j = 0; j < 3; j++){
          arr[count].push(newarr[j][i])
        }
        count++
    }
    return arr
       
    }
    else{
        return newarr
    }
    }
export function checkIf8(arr){

        let buffer = 0
        for (let i = 0; i <= 8; i++){
            let count = 0
            for (let j = 0; j < arr.length; j++){
                if (Number(arr[j]) === Number(i)){
    
    
                    count += 1
    
                    if (count === 8){
                        buffer = i
    
                    }
                    
    
                }
            }
        }
        function getbuffer(){
            return buffer
        }
        return {getbuffer}
       
        
    }








    

export function countOnes(array2D) {
    let count = 0;
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            if (array2D[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
}


export function leftzeros(displayedshape){
    let num = 0
for (let i = 0; i < 3; i++){

   
    if (displayedshape[i][0] === 0){
        num ++
    }
    if (num === 3){
        console.log(`mistake`)
        for (let i = 0; i < 3; i++){
            let buffer = displayedshape[i][0]
        displayedshape[i][0] = displayedshape[i][1]
        displayedshape[i][1] = displayedshape[i][2]
        displayedshape[i][2] = buffer
    }
  
    }
}
}

export function topzeros(displayedshape){
    let num = 0
    for (let i = 0; i < 3; i++){

       
        if (displayedshape[0][i] === 0){
            num ++
        }
        if (num === 3){
            console.log(`mistake`)
            for (let i = 0; i < 3; i++){
                let buffer = displayedshape[0][i]
            displayedshape[0][i] = displayedshape[1][i]
            displayedshape[1][i] = displayedshape[2][i]
            displayedshape[2][i] = buffer
    
        }

        
        }
    }
}

export function html(row, ids, displayedshape, filledarr){
    let color = `black`
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        color = `darkgray`
    }
   displayedshape[Number(row)].forEach((num) => {

       if (num === 1 && !filledarr.includes(Number(ids))){
           document.getElementById(ids).style.backgroundColor = color

           ids += 100
          
       }
       else{
           ids += 100
       }
   
   
})
}
export function htmlclick(row, ids, mode, displayedshape){
    let color = `black`
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        color = `white`
    }
    displayedshape[row].forEach((num) => {
        try {
            if (num === 1){
                document.getElementById(ids).style.backgroundColor = color

                mode.push(ids)
                ids += 100
               
            }
            else{
                ids+=100
            }
        } 
        catch (error) {
            document.getElementById(ids).style.background = `none`
    
        }
        
    })
}
export function binaryStringTo3x3Array(binaryStr) {
    let array = [
        [],
        [],
        []
    ];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row[j] = parseInt(binaryStr[i * 3 + j]);
        }
        array[i] = row;
    }
    return array;
}

export let shapes = [
    "111100000", // array2d
    "111001000", // array2d2
    "110110000", // array2d3
    "111010000", // array2d4
    "101010101", // array2d5
    "111010010", // array2d6
    "110110001", // array2d7
    "011010011", // array2d8
    "011011011", // array2d9
    "111111111", // array2d10
    "111000000", // array2d11
    "110000000", // array2d12
    "100000000",  // array2d13
    "110000000", // array2d12 
    "101010000",
    "101010000",
    "111100000", // array2d
    "111001000", // array2d2
    "110110000", // array2d3
    "111010000", // array2d4
    "111010010", // array2d6

    "011010011", // array2d8
    "111000000", // array2d11
    "110000000", // array2d12
    "100000000",  // array2d13
];
export function score(){
    let scores = 0

    function increment(lines){
        scores += (Math.round(lines + 100) ** lines) 
    }

    function getscore() {
        return scores
    }
    return {increment, getscore}
}
export function loader() {
document.onreadystatechange = function(){
    if (document.readyState !== "complete") {
        
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("#loader").style.display = "none";
            document.querySelector("#cont").style.visibility = "visible";
            document.querySelector("#generate").style.visibility = "visible";
        }, 150);


        
    }
}
    
};
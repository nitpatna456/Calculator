const num = document.querySelectorAll('.num1')
const operators = document.querySelectorAll('.num2')
const button = document.querySelector('.num3')
const input = document.querySelector('#input')
const result = document.querySelector('#result')
const del = document.querySelector('.del')
const reset = document.querySelector('.reset')

num.forEach((n)=>{
    n.addEventListener('click',(e)=>{
        if(e.target.id ==="1"){
            input.innerHTML += `1`
        }
        else if(e.target.id ==="2"){
            input.innerHTML += `2`
        }
        else if(e.target.id ==="3"){
            input.innerHTML += `3`
        }
        else if(e.target.id ==="4"){
            input.innerHTML += `4`
        }
        else if(e.target.id ==="5"){
            input.innerHTML += `5`
        }
        else if(e.target.id ==="6"){
            input.innerHTML += `6`
        }
        else if(e.target.id ==="7"){
            input.innerHTML += `7`
        }
        else if(e.target.id ==="8"){
            input.innerHTML += `8`
        }
        else if(e.target.id ==="9"){
            input.innerHTML += `9`
        }
        else if(e.target.id ==="0"){
            input.innerHTML += `0`
        }
        else if(e.target.id ==="dot"){
            input.innerHTML += `.`
        }
    })
})
del.addEventListener("click", ()=>{
    input.innerHTML = input.innerHTML.slice(0,-1)
})
reset.addEventListener("click", ()=>{
    input.innerHTML = ""
    result.innerHTML =""
})
operators.forEach((n)=>{
    n.addEventListener("click",()=>{
       if(n.id==="plus"){
        input.innerHTML += "+"
       }else if(n.id==="minus"){
        input.innerHTML += "-"
       }else if(n.id==="mul"){
        input.innerHTML += "*"
       }else if(n.id==="division"){
        input.innerHTML += "/"
       }
    })
})
button.addEventListener("click",()=>{
    if(result.innerHTML !== ""){
        input.innerHTML = result.innerHTML
        result.innerHTML = ""
    }else{
    let ans = eval(input.innerHTML)
    result.innerHTML = ans
    }
})
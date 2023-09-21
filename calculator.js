 const display = document.querySelector(".display")
 let oldNum = display.textContent
 let operator = ''
 let startAffresh = false
 const button = document.querySelector(".button")
 console.log(display.textContent,oldNum,'global')
//  const answers = document.querySelector("#ans")
//  const add = document.querySelector("#add")
//  const subtract = document.querySelector("#subtract")
//  const multiply = document.querySelector("#multiply")
//  const divide = document.querySelector("#divide")
 function numbers(x){
    let displayed = display.textContent
    if(displayed === "0" || startAffresh === true ){
        display.textContent = x
    }
    else{
        display.textContent += x
    }
 } 
 function decimal(){
   if (display.textContent.includes('.')){
      display.textContent += ''
   }else{
      display.textContent += '.'
   }
    
 }
 function clr(){
    display.textContent = 0
    oldNum = 0
    operator = ''
 }
function calculate(y){
   equate()
   oldNum = display.textContent
   if(operator === '')
     {display.textContent = 0}
     else{
      display.textContent = answer
     }
   console.log(operator, oldNum)
      if(y === "+"
         ){
          operator = 'add'
      }
      if(y === "-"
         ){
          operator = 'subtract'
      }
      if(y === "*"
         ){
          operator = 'multiply'
      }
      if(y === "/"
         ){
          operator = 'divide'
      }      
     
}
function reset(){
  operator = ''
  console.log("reset")
}
function equate(){
    startAffresh = false  
   if(operator === 'add'){
      newNum = display.textContent
      answer = parseFloat(oldNum) + parseFloat(newNum)
      display.textContent = answer
   }
   else if(operator === 'subtract'){
      newNum = display.textContent
      answer = parseFloat(oldNum) - parseFloat(newNum)
      display.textContent = answer
   }
   else if(operator === 'multiply'){
      newNum = display.textContent
      answer = parseFloat(oldNum) * parseFloat(newNum)
      display.textContent = answer
   }
   else if(operator === 'divide'){
      newNum = display.textContent
      answer = parseFloat(oldNum) / parseFloat(newNum)
      display.textContent = answer
   }
   else if(operator === 'equals' ){
      display.textContent = answer
   }
   else {
      return
   }
   reset()
   console.log("equate")
}
 function del(){
   if(display.textContent != 0){
      display.textContent = display.textContent.slice(0, -1)
      
   }
   else{
      display.textContent = 0
   }
  }  
 function equation(){
equate()
    operator = 'equals'
    console.log("equals")
  }

   
addEventListener("keydown", (e) =>{
   if (isNaN(Number(e.key))){ console.log("nan")}
    else {numbers(Number(e.key))}
 if( e.code === "Backspace" ){
   del()
}else if(e.code === "NumpadAdd"){
   calculate('+')
}
else if(e.code === "NumpadSubtract"){
   calculate('-')
}
else if(e.code === "NumpadMultiply"){
   calculate('*')
}
else if(e.code === "NumpadDivide"){
   calculate('/')
}
else if(e.code === "Enter"){
   clr()
}
else if(e.code === "Equal"){
   equation()
}else{
   console.log(e.key,Number(e.key),e.code,e)
}
   

})
 const listSteps = document.querySelectorAll('.steps')
 const buttonPrev = document.querySelector('.btnPrev')
 const buttonNext = document.querySelector('.btnNext')
 const separator = document.querySelectorAll('.separator')
 let counterStep = 0
 let counterSpan = 0

 function setAttribut(){
if(counterStep===0){
    buttonPrev.setAttribute("disabled", "")
}else if(counterStep===3){
    buttonNext.setAttribute("disabled", "")
}else{
    buttonNext.removeAttribute('disabled')
    buttonPrev.removeAttribute('disabled')
}
 }
 function handleClickNext(){
     
     if(counterStep <= 3){
        counterStep += 1
        listSteps[counterStep].classList.add('active')
        separator[counterSpan].classList.add('active')
        counterSpan += 1
        setAttribut()
     }
 }

 function handleClickPrev(){
     if(counterStep>=1){
        counterSpan -= 1
        listSteps[counterStep].classList.remove('active')
        separator[counterSpan].classList.remove('active')
        counterStep -= 1
    setAttribut()         
}
 }
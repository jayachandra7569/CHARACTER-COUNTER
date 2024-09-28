const textareaEl=document.getElementById("comment");

const totalCountEl =document.getElementById("Total-Count");

const remainingEl =document.getElementById("Remaining");

textareaEl.addEventListener("keyup",()=>{

    updateCounter()
})

function updateCounter(){
  
    totalCountEl.innerText=textareaEl.value.length

    remainingEl.innerText=textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}
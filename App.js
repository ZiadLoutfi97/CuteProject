
let text=document.querySelector(".sec-text");
const textLoad= () => {
    setTimeout(() =>{
        text.textContent="Ziad";
    },0);
    setTimeout(() =>{
        text.textContent="Maroun";
    },4000);
    setTimeout(() =>{
        text.textContent="Salem";
    },8000);
    setTimeout(() =>{
        text.textContent="loutfi";
    },12000);
}

textLoad();
setInterval(textLoad,16000);  

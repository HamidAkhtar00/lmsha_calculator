let display = document.querySelector('h5');
let display_total = document.querySelector('h2');
let eql = document.querySelector('.equal'); 
let operand_btns = document.querySelectorAll(".item");
let cal = 0;
operand_btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        display.innerText += btn.innerText;
    });
});
// ------------------result-------------
eql.addEventListener('click',(e)=>{
    cal = eval(display.innerText);
    display_total.innerText = cal;
});

let clear = document.querySelector('.clear').addEventListener('click',()=>{
    display.innerText="0";
    display_total.innerText="0";
});
let rem= document.querySelector('.rmv').addEventListener('click',()=>{
    display.innerText=display.innerText.toString().slice(0,-1);
    console.log('remove the display item');
});

function display(val){

    document.getElementById('result').value += val

    return val

}

function solve(){

    let x = document.getElementById('result').value
    console.log(x,"x");
    let y = eval(x);//5+2
    console.log(y,"y");

    document.getElementById('result').value = y //7

    return y //7

}
function clearScreen(){

    document.getElementById('result').value = ''

}

function keyboardInput(){
    const keyboardInput = document.querySelector('.screen');
    keyboardInput.addEventListener('keydown', e =>{
        console.log(e); 
        e.preventDefault()
           if(e.key == "0"){keyboardInput.value += e.key;}
   if(e.key == "1"){keyboardInput.value += e.key;}
   if(e.key == "2"){keyboardInput.value += e.key;}
   if(e.key == "3"){keyboardInput.value += e.key;}
   if(e.key == "4"){keyboardInput.value += e.key;}
   if(e.key == "5"){keyboardInput.value += e.key;}
   if(e.key == "6"){keyboardInput.value += e.key;}
   if(e.key == "7"){keyboardInput.value += e.key;}
   if(e.key == "8"){keyboardInput.value += e.key;}
   if(e.key == "9"){keyboardInput.value += e.key;}
   if(e.key == "+"){keyboardInput.value += e.key;}
   if(e.key == "-"){keyboardInput.value += e.key;}
   if(e.key == "*"){keyboardInput.value += e.key;}
   if(e.key == "/"){keyboardInput.value += e.key;}
   if(e.key == "%"){keyboardInput.value += e.key;}
   if(e.key == "="){keyboardInput.value += e.key;}
//    if(e.key == "Backspace"){keyboardInput.value += keyboardInput.value.slice(0,-1)}
else{
    alert('Not a Calculator key ')
}
    })
};

// const keyboard = document.querySelector('.keyboard');

// keyboard.addEventListener('keydown', e =>{
//     console.log(e);
//     if(e.keyCode === 54 || e.keyCode === 90){
//         alert('Sorry not use' +e.key)
//         e.preventDefault()
//     }
// })


// const keyboardInput = document.getElementById('keyboard-input');


// // document.addEventListener('keypress', (e) => {
// //     console.log(e);
// // })

// document.addEventListener('keydown', (e) => {
//     // console.log(e);
//    // keyboardInput.value += e.key;
// //    console.log(e)
//    if(e.key == "0"){keyboardInput.value += e.key;}
//    if(e.key == "1"){keyboardInput.value += e.key;}
//    if(e.key == "2"){keyboardInput.value += e.key;}
//    if(e.key == "3"){keyboardInput.value += e.key;}
//    if(e.key == "4"){keyboardInput.value += e.key;}
//    if(e.key == "5"){keyboardInput.value += e.key;}
//    if(e.key == "6"){keyboardInput.value += e.key;}
//    if(e.key == "7"){keyboardInput.value += e.key;}
//    if(e.key == "8"){keyboardInput.value += e.key;}
//    if(e.key == "9"){keyboardInput.value += e.key;}
//    if(e.key == "+"){keyboardInput.value += e.key;}
//    if(e.key == "-"){keyboardInput.value += e.key;}
//    if(e.key == "*"){keyboardInput.value += e.key;}
//    if(e.key == "/"){keyboardInput.value += e.key;}
//    if(e.key == "%"){keyboardInput.value += e.key;}
//    if(e.key == "="){keyboardInput.value += e.key;}
// //    if(e.key == "Backspace"){keyboardInput.value += keyboardInput.value.slice(0,-1)}

// })
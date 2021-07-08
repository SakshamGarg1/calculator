let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (a) => {
        buttonText = a.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {            
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '←'){
            let number=screen.value;
            let len=number.length-1;
            let newnumber=number.substring(0,len);
            screen.value=newnumber;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

  //function backspace(){
  //  var len=document.getElementById('display');
  //  var inner=len.innerHTML;
  //  len="";
  //  inner=inner.split("");
  //  inner=inner.splice(inner.length-1,1)
  //  inner=inner.join("");
  //  len.value=inner;
  //  }
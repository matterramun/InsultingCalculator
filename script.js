const insultsList = [
  "I created an algorithm to calculate your moms weight. Unfortunately I got a stackoverflow error.",
  "The bar was the cement, and you brought a shovel.",
  "I expected nothing, but I'm still disappointed.",
  "You are the reason we have warning labels.",
  "I see you are still regularly eating Tide pods.",
  "Aww, bless your heart.",
  "Did you have to break out the iron to get your brain that smooth?",
  "You are a sad strange little person, and you have my pity.",
  "Well, I'll tell you something that should be of vital interest to you. That you are a NITWIT!",
  "You are about one bit short of a byte.",
  "Every year on your birthday your parents go to the zoo and throw stones at the stork.",
  "You do math like you got lobotomized by a scented marker after shoving it up your nose too deep.",
  "Your math skills are rivaled by that of my bathroom sink.",
  "I would rather face 5 battalions of reinforced panzers than have to watch you do math.",
  "The only thing weaker than your math skills is your hairline",
  "You're the kind of person to bring out a guitar at a party and play a traumatizing acoustic rendition of Wonderwall",
  "Jellyfish have survived for 600 million years without a brain. At least there's some hope for you.",
  "Incredible... when you move your head it sounds like maracas."
]

const sum = function(...arg) {
    return arg.reduce((total, args) => total + args, 0)
  };
  

const subtract = function(...arg) {
  let tractResult = arg[0]
  arg.forEach((element,index) => {
    if(index < 1) return; 
    tractResult -= element;
  });
  return tractResult;
};

const multiply = function(...numbers) {
    var total = 1;
    numbers.forEach(element => { 
        total *= element;
    });
    return total;
  };

const divide = function(...numbers) {
    var total = numbers[0] / numbers[1]
    numbers.forEach((element,index) => {
        if(index < 2) return; 
        total /= element;
    });
    return total;
  };

const operate = (operator, ...numbers) => {
    let result;
    if (operator == 1) {
        result = sum(...numbers);
    } else if (operator == 2) {
        result = subtract(...numbers);
    } else if (operator == 3) {
        result = divide(...numbers);
    } else if (operator == 4) {
        result = multiply(...numbers);
    }
    return result;
};

const updateText = (...objects) => {
    const display = document.querySelector('#display');
    if (operatorVar == 0){
      display.innerText = `${num0Var}`
    } else if (num1Var == 0){
      display.innerText = `${num0Var} ${operatorVisual}`
    } else {
      display.innerText = `${num0Var} ${operatorVisual} ${num1Var}`
    };
}

const manageValues = (e) => {
  if (e.target.dataset.operator == "equals"){
    num0Var = operate(operatorVar, num0Var, num1Var);
    operatorVar = 0;
    num1Var = 0;
    updateText();
    insult();
    return
  } else if (e.target.dataset.operator == "clear"){
    operatorVar = 0;
    num0Var = 0;
    num1Var = 0;
  } else if (e.target.dataset.operator > 0){
    operatorVar = e.target.dataset.operator;
    console.log("Set operator to ", e.target.dataset.operator);
    operatorVisual = e.target.innerText;
  } else if (operatorVar == 0) {
    num0Var = parseInt(num0Var + e.target.innerText)
    console.log(num0Var)
  } else {
    num1Var = parseInt(num1Var + e.target.innerText)
    console.log(num1Var)
  };
  updateText(num0Var,operatorVisual,num1Var);
}

const insult = () => {

}

let operatorVisual;
let operatorVar = 0;
let num0Var = 0;
let num1Var = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', manageValues));
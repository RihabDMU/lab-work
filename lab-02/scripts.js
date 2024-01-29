function greetMe(Hello) {
    console.log("Hello!!" + Hello);
}

function changeText(text) {
    // myTrigger.textContent = text;
}

function changeText2(event) {
    console.log(event);
    let a = event.currentTarget.clientX;
    myTrigger.text = a;
}

// myTrigger.addEventListener('click', greetMe("Hiiii"));
// myTrigger.addEventListener('click', ()=>changeText("NEW TEXT"));


myTrigger.addEventListener('click', changeText2);
console.log('I'+"'"+'m Working. Im JS. Im Beautiful. Im worth it.');
/* 
const a = 123;
a = 4; 
 TypeError: Assignment to constant variable.
 */

 let a = 123;
 // Array
 const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
 console.log(daysOfWeek[0]);

const myInfo = {
    name : "pyong",
    age : 27,
    gender : "Male",
    isHandsome : true,
    Like : ["Weight", "PC"]
}

console.log(myInfo.gender);

myInfo.age = 25;

console.log(myInfo.age);
/*
myInfo = {
    chage : true
}
*/
console.log(myInfo)

console.log(console)

// function
function sayHello(name, age) {
    console.log('Hello %s %d\n', name, age)
    console.log('Hello ' + name + ', ' + age)
    console.log(`Hi ${name}, ${age}`)

    return `Hi ${name}, ${age}`
}

sayHello('pyong', 25);

console.log('TEST::', sayHello('Big3', 600))

const calculator = {
    plus: function(a, b) {
        return a + b
    },
    pow: function(n, p) {
       // 제곱
       return n ** p
    }
}
const plus = calculator.plus(5, 5)
console.log(plus)
console.log(calculator.pow(2, 10))

// DOM
console.log(document)

const title = document.getElementById("title")
console.log(title)

//console.error("FUCK")

document.getElementById("title").innerText = "Change H1"
console.dir(title)
console.dir(document)



const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

title.addEventListener("resize", handleClick)

if("10" === 10) {
    console.log("Hi")
} else if("10" === "10") {
    console.log("Hello")
} else {
    console.log("Ho!")
}
/*
const age = prompt("How old are you?")
console.log(age)
*/

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseover", handleClick);
}

// init();

function handleOffline() {
    console.log("off");
}


function handleOnline() {
    console.log("on");
}
// 접속 연결에 관한 이벤트
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

const CLICKED_CLASS = "clicked";

function getClickedColor() {
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }*/
    title.classList.toggle(CLICKED_CLASS);
    console.log(title.classList);
}

window.addEventListener("click", getClickedColor)
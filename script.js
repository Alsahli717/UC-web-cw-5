alert("Welcome to my website enter your name and i will calculate your grade")
let x = prompt("Please enter your grade: ")
console.log('%c' +x  , 'background: #222; color: #bada55');

//javascript isn't java
if( x >= 90){
    alert("you got A grade")
} else if( x >= 80){
    alert("you got B grade")
} else if(x >= 70){
    alert("you got C grade")
} else if(x >= 60){
    alert("you got a D grade")
} else{
    alert("you failed the class")
}
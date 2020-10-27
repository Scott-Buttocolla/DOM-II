// // Your code goes here
// const links = document.querySelector('.nav')
// links.addEventListener('click', event => {
//     event.target.style.Color = "red"
    // document.body.style.backgroundColor = "blue"
// })

// const test = document.querySelector(".container .home");
  
// This handler will be executed only once when the cursor
// moves over the unordered list
// test.addEventListener("mouseenter",event => {
//     event.target.style.color = "purple"
// })    
  // highlight the mouseenter target
  //event.target.style.color = "purple"

  const linkColor = document.querySelectorAll('.nav a ');
  linkColor.forEach((element) => {
      element.addEventListener('click',function(event){
          element.style.color = "hotpink"
          element.style.backgroundColor = "black";
          element.style.fontSize ="2.5rem"
      })
  })
//adds mouse over to header links
const shadow = document.querySelectorAll('.nav a')
shadow.forEach((element)=> {
    element.addEventListener('mouseover', function(){
        //element.addEventListener('boxShadow', function(){
            element.style.boxShadow = "5px 10px 10px red"
        //})
    })
})
// adds click styling to funbus
const funBus =document.querySelector('.logo-heading')
    console.log(funBus)
    funBus.addEventListener('click', function(){
        funBus.style.transform = "scale(1.5)";
        funBus.style.boxShadow ="3px 5px 5px 6px blue"
    })

const letterInfo = document.createElement("p");
letterInfo.textContent = "Try using the letters A, B, C, and G"
document.querySelector(".logo-heading").appendChild(letterInfo);

const clickInfo = document.createElement("p");
clickInfo.textContent = "Try clicking and hovering over different items"
document.querySelector(".home h2").appendChild(clickInfo);


const bodyBack = document.querySelector('body')
bodyBack.style.backgroundColor = "lightgreen"


// Below effects for Bus Image
const busImg = document.querySelector('.intro img')

busImg.addEventListener("mouseenter", function(){
    busImg.style.transform ="scale(1.5)";
    busImg.style.transition = "transform 1s"
})
busImg.addEventListener('mouseleave', function(){
    busImg.style.transform = "scale(1)";
})

//title elements
const titlesH2 = document.querySelectorAll('h2')
titlesH2.forEach((element) => {
    element.addEventListener("mouseover", function(event){
        event.target.style.color = "yellow";
        setTimeout(function(){
            event.target.style.color = "";
        }, 1000)
    }, false)
})
// adds effect to bottom image
const bottomImg = document.querySelector('.content-destination img')
bottomImg.addEventListener("mouseenter", function(){
    bottomImg.style.transform ="scale(0.1)";
    bottomImg.style.transition = "transform 1s"
})
bottomImg.addEventListener('mouseleave', function(){
    bottomImg.style.transform = "scale(1)";
})

// using scroll. This will alert that the user has reached the bottom
window.addEventListener('scroll', function(event){
    const scrollable =document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(scrolled === scrollable){
        alert('You reached the bottom')
    }
})
// added mouseenter for the destination titles
const destTitles = document.querySelectorAll('.destination h4')
console.log(destTitles)
destTitles.forEach((element) => {
    element.addEventListener('mouseenter', function(event){
        event.target.style.fontSize = "36px"
        event.target.style.textShadow = "2px 2px 3px white"
    })
})
// increase text size off bottom text bodies
const wheelText = document.querySelectorAll('.destination p')
wheelText.forEach((element) => {
    element.addEventListener('wheel', function(event){
        event.target.style.fontSize = "24px";
        setTimeout(function(){
            event.target.style = "";
        },5000)
    },false)
})
//selects all p tag selectors and changes the text, can't get mouseup to work.
const mouseColor = document.querySelectorAll('.home p')
    mouseColor.forEach((element)=>{
        element.addEventListener('mousedown', function(event){
            event.target.style.color = "yellow";
            event.target.style.fontSize = "2rem";
            event.target.style.backgroundImage = 'linear-gradient( green, blue, white, purple, pink, red';
            // event.target.textContent = "RELEASE THE BUS!";
    })
})
mouseColor.forEach((element) => {
    element.addEventListener('mouseup', function(event){
        event.target.style.fontSize ="2.2rem";
        event.target.style.color = "black";
        //event.target.textContent = '';
        
    })
})


// adds new message when double clicked
const bttmBtn =document.querySelectorAll('.btn')
    bttmBtn.forEach((element) =>{
    element.addEventListener('dblclick', function(event){
        event.target.innerHTML = 'Thank you!'; 
        event.target.style.backgroundColor ="blue";
        event.target.style.color = "yellow";  
    })
})

document.addEventListener("keydown", function(event) {
    if(event.key === "a") {
        document.body.style.backgroundColor = "yellow";
    }
})
document.addEventListener('keydown', function(event){
    if(event.key === "b"){
        document.body.style.backgroundColor = 'purple' //"linear-gradient( purple, red, blue, yellow, green"
    }
})

// works to go back to a but doesn't effect b for some reason. b locks the background
document.addEventListener('keydown', function(event){
    if(event.key === "c"){
        document.body.style.backgroundColor = "lightgreen"
    }
})

document.addEventListener('keydown', function(event){
    if(event.key === "g"){
        document.body.style.backgroundImage = "linear-gradient( purple, red, blue, yellow, green"
    }
})


// stop space bar from scolling with keydown
document.addEventListener('keydown', function(event){
    event.preventDefault();
    if (event.keycode === 32){}
})

// adds styling to header as wheel is used
const navHeader = document.querySelector('.main-navigation');
window.addEventListener('wheel', function(event){
    navHeader.style.backgroundColor = 'lightblue';
})

//adds alert message when page is loaded
window.addEventListener("load", function(event){
    alert("The page has been loaded")
})


// no clue why this does what it does. Blows up the footer text to huge porportions
// window.addEventListener('wheel', function(e){
//     console.log(`the wheel moved at X:${e.clientX} and Y:${e.clientY}`)
//         const footer = document.querySelector('.footer p')
//         console.log(footer)
//         footer.style.fontSize = `${e.clientY}px`
// })


// const linkClick = document.querySelectorAll('.btn');
// console.log(linkClick)
// linkClick.forEach((element) => {
//     element.addEventListener('click', function(event){
//         linkClick.innerHTML =`Click count : ${event.detail}`;
//     })
// })
// const linkClick = document.querySelector('.btn');
// linkClick.addEventListener('click',(event)=>{
//     linkClick.innerHTML = `Click count : ${event.detail}`;
// })
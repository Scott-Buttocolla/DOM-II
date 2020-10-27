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

const wheelText = document.querySelectorAll('.destination p')
wheelText.forEach((element) => {
    element.addEventListener('wheel', function(event){
        event.target.style.fontSize = "36px";
        setTimeout(function(){
            event.target.style = "";
        },5000)
    },false)
})

const mouseColor = document.querySelectorAll('.home p')
    mouseColor.forEach((element)=>{
        element.addEventListener('mousedown', function(event){
            event.target.style.color = "yellow";
            event.target.style.fontSize = "5rem";
            event.target.style.backgroundColor = 'black';
            event.target.innerHTML = "RELEASE THE BUS!";
    })
})
mouseColor.forEach((element) => {
    element.addEventListener('mouseup', function(event){
        element.innerHTML = 'p'
        event.target.style.color = "blue";
        debugger;
        event.target.innerText = 'YOU BROKE ME, RELOAD THE PAGE';
        
    })
})


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
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
      })
  })
//   linkColor.addEventListener('click', event =>{
//     document.querySelectorAll('.nav-link').forEach(e => e.style.backgroundColor ='teal');
//       document.querySelectorAll('.nav-link').forEach(e => e.style.color ='yellow');
//   })
const bodyBack = document.querySelector('body')
bodyBack.style.backgroundColor = "lightgreen"
//   const headerStyle = document.querySelector('.main-navigation')

// adds zoom feature to title image
//   headerStyle.addEventListener('mouseenter', function(){
//       console.log('We have our Mouse' + Date.now())
//   })
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
const titlesH2 = document.querySelectorAll('.container h2')
titlesH2.forEach((element)=> {
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
console.log(wheelText)
wheelText.forEach((element) => {
    element.addEventListener('wheel', function(event){
        event.target.style.fontSize = "36px";
        setTimeout(function(){
            event.target.style = "";
        },5000)
    },false)
})

const mouseColor = document.querySelectorAll('.container p')
    mouseColor.forEach((element)=>{
        element.addEventListener('mousedown', function(event){
            event.target.style.color = "yellow"
            event.target.style.fontSize = "5rem"
            event.target.style.backgroundColor = 'black'
            event.target.innerHTML = "RELEASE THE BUS!"
    })
})
mouseColor.forEach((element) => {
    element.addEventListener('mouseup', function(event){
        event.target.style.color = "yellow"
        event.target.innerHTML = 'YOU BROKE ME, RELOAD THE PAGE'
    })
})
const bttmBtn =document.querySelectorAll('.btn')
console.log(bttmBtn)
    bttmBtn.forEach((element) =>{
    element.addEventListener('dblclick', function(event){
        event.target.innerHTML = 'Thank you!'  
        event.target.style.backgroundColor ="blue"
        event.target.style.color = "yellow"  
    })
})

document.addEventListener("keydown", function(event) {
    if(event.key === "a") {
        document.body.style.backgroundColor = "yellow"
    }
})

// const bttmButtons = document.querySelector('.btn')
// console.log(bttmButtons)
// bttmButtons.addEventListener('focusin', (event) =>
// event.target.style.backgroundColor ="green")
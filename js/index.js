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

  const linkColor = document.querySelector('.nav-link ');
  
  linkColor.addEventListener('click', event =>{
    document.querySelectorAll('.nav-link').forEach(e => e.style.backgroundColor ='teal');
      document.querySelectorAll('.nav-link').forEach(e => e.style.color ='yellow');
  })

  const headerStyle = document.querySelector('.main-navigation')

// headerStyle.style.transform = "backgroundColor (green)";

  headerStyle.addEventListener('mouseenter', function(){
      console.log('We have our Mouse' + Date.now())
  })
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
console.log(titlesH2)
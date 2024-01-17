//movement on which animation will happen
const logoDiv = document.querySelector('.logoHomeDmy')
const logoImg = document.querySelector('.logoImg')
const navDiv = document.querySelector('.mainNav')

//animation event
logoDiv.addEventListener('mousemove', (e)=> {
    console.log("hit is here")
    let xAxis = (window.innerWidth / 2 - e.pageX)
    let yAxis = (window.innerWidth / 24 - e.pageY)
    logoImg.style.transform = `perspective(100px) rotateY(${-(xAxis)}deg) rotateX(${yAxis}deg)`
});

logoDiv.addEventListener('mouseenter', (e)=> {
    logoImg.style.transition = '.1s ease'
});

navDiv.addEventListener('mouseleave', (e)=>{
    logoImg.style.transition = '.2s ease'
    logoImg.style.transform = `rotateX(0deg) rotateY(0deg)`
});


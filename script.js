const form =document.querySelector('form');
const emailfield = document.getElementById("email-field");
const emaillabel = document.getElementById("email-label");
const emailerror = document.getElementById("email-error");
const namelabel = document.getElementById("name-label");
const namefield = document.getElementById("name-field");
const nameerror = document.getElementById("name-error");
const textlabel = document.getElementById("text-label");
const textfield = document.getElementById("text-field");

function validateEmail() {


  emaillabel.style.top = "-39px";
 

  if (!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
   
    emailerror.innerHTML = "Please enter a valid email";
    emailfield.style.borderColor = "red";
    emaillabel.style.color = "black";
    textlabel.innerHTML="iam Waiting";
    return false;
  }  
    emailerror.innerHTML = "";
    emailfield.style.borderColor = "green";
    emaillabel.style.color = "white";
    textlabel.innerHTML="WELCOME";
    
    return true;
   
  }

 


function validateName() {
  
  namelabel.style.top = "-39px";
  if (!namefield.value.match(/^[A-Za-z '-]+$/)) {
    nameerror.innerHTML = "Please enter a valid name";
    namefield.style.borderColor = "red";
    namelabel.style.color = "black";
    return false;
  } 
    nameerror.innerHTML = "";
    namefield.style.borderColor = "green";
    namelabel.style.color = "white";
    return true;
  }



  function sendEmail() {
    const bodyMessage = `NAME: ${namefield.value}<br> EMAIL: ${emailfield.value}<br> SUBJECT: ${textfield.value}`;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "imthiyasanchal@gmail.com",
      Password: "D00042192FE7BF1C509DE6BE1D5635CEE951",
      To: 'imthiyasanchal@gmail.com',
      From: "imthiyasanchal@gmail.com",
      Subject: textfield.value,
      Body: bodyMessage
    }).then(
     message => alert(message)
        
      
      )};
    
  
  

 
    
  
form.addEventListener("submit", (e) =>{
  e.preventDefault();
  if (validateEmail() && validateName()) {
 sendEmail();
 
  alert('thankz for your message! _imthiyas_');
 setTimeout(() => {
    window.location.reload();
}, 2000);
}})


 











    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " hai";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }
    const typedTextElement = document.querySelector('.typedText').value ='codeAlchemy cons'
    
  
    let isFloatingUp = false;

    function floatText() {

        const currentPosition = parseFloat(getComputedStyle(typedTextElement).top);
        const floatingDistance = 10; // Adjust this value for desired float height

        if (isFloatingUp) {
            typedTextElement.style.top = `${currentPosition - floatingDistance}px`;
        } else {
            typedTextElement.style.top = `${currentPosition + floatingDistance}px`;
        }

        isFloatingUp = !isFloatingUp;
    }

    setInterval(floatText, 1000);


   var typingEffect = new Typed(".typedText",{
      strings : ["“CodeAlchemy”"],
      loop : true,
      typeSpeed : 150, 
      backSpeed : 0,
      backDelay : 20
   })
   

const textElement = document.querySelector('.typedskill');
textElement.classList.add('show'); 


   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })


  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

 
  sr.reveal('.project-box',{interval: 100})

 
  sr.reveal('.top-header',{})


  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  



  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

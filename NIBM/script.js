const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");
const coursesubmit = document.querySelector(".course-submit");

const input= document.querySelector(".input1");
const input2= document.querySelector(".input2");

const enqinput = document.querySelector(".enq-input");
const enqinput1 = document.querySelector(".enq-input1");
const enqinput2 = document.querySelector(".enq-input2");
const enqsubmit = document.querySelector(".enq-submit");

const loginninput = document.querySelector(".loginn-input");

const loginninput1 = document.querySelector(".loginn-input1");

const loginnsubmit= document.querySelector(".loginn-submit");

const loginn = document.querySelector(".loginn");

const navinput = document.querySelector(".nav-input");
const navsub= document.querySelector(".nav-sub");








hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

coursesubmit.addEventListener("click", () => {
  if(input.value.length > 0){
    alert("submitted");
    input.value = "";
    input2.value = "";

    
  }
  else{
    alert("enter your deatils");
  }
  
});



enqsubmit.addEventListener("click", () => {
  if(enqinput.value.length > 0 && enqinput1.value.length > 0 && enqinput2.value.length > 0){
    alert("Our team will contact you soon");

    
    enqinput1.value = "";
    enqinput2.value = ""; 
    enqinput.value = "";
  }
  else{
    alert("Please enter your details");
  }
  
});


loginnsubmit.addEventListener("click", () => {  
  if(loginninput.value.length > 0 && loginninput1.value.length > 0){
    alert("Login Successful");

    loginn.style.display = "none";
    loginn.parentElement.innerHTML = "Login Successful" +' ' + loginninput.value;

    loginninput.value = "";
    loginninput1.value = "";
  


  }
  else{
    alert("Invalid Input Fill Login Details");
  }
  

});


navsub.addEventListener("click", () => {
  if(navinput.value.length > 0){
    alert("Thanks for Subscribing to our newsletter"); 
  }
  else{
    alert("enter your Email");
  }
  
});





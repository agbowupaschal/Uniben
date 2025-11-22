let realCaptcha = "";

function generateCaptcha(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
  realCaptcha = "";
  
  for(let i=0; i<6; i++){
    realCaptcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captcha").innerText = realCaptcha;
}


function checkCaptcha(){
  const userInput = document.getElementById("captchaInput").value;
  const message = document.getElementById("message");

  if(userInput === realCaptcha){
    message.innerText = "";
    message.style.color = "";
  } else {
    message.innerText = "Captcha incorrect";
    message.style.color = "black";
    generateCaptcha();
  }
  if(but.onclick) {
  dear.textContent ="Dear user your admission has been fortified";
}
else{
  dear.textContent =" ";
}
}

generateCaptcha();




const dear = document.getElementById("dear");
const but = document.getElementById("clickme");


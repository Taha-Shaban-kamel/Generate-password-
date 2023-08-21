const passfiled = document.getElementById("passFiled");
function getVal(){
  const length = document.getElementById("length").value;
  return length ;
}
const generatePass = function(length){

  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let pass = "";

  for(let i=0 ;i< length;i++){
    pass += characters[Math.floor(Math.random()*characters.length)];
  }
  passfiled.innerHTML =pass;
}



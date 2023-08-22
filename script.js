const passfiled = document.getElementById("passFiled");
function getVal(){
  const length = document.getElementById("length").value;
  return length ;
}
const generatePass = function(length){
  if(length<5)
  alert("the password length have to be greater than or equal 5");
  else
  {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let pass = "";

  for(let i=0 ;i< length;i++){
    pass += characters[Math.floor(Math.random()*characters.length)];
  }
  passfiled.innerHTML =pass;
}
}



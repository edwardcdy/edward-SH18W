document.getElementById("subscribe").onclick = valEmail;

/* regex taken from https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript */
function valEmail(){
  var email = document.getElementById('email').value
  var error = document.getElementById('error');

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!re.test(email)){
    error.style.display = 'block';
    
    setTimeout(function(){
      error.style.display = 'none';
    }, 2000);
  }
  
}
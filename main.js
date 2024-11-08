function myFunction(){
 
  let x = document.getElementById("username").value;  
  let x1 = document.getElementById("email").value;  
   let x2 = document.getElementById("password").value; 
    let x3 = document.getElementById("password2").value;

    let text;

    if (x1 =="" || x==" " || x2 =="" || x3  =="") {
      text = "Input is not valid";
      document.getElementById("error").style.color = "red";
      document.getElementById("error1").style.color = "red";
      document.getElementById("error2").style.color = "red";
      document.getElementById("error3").style.color = "red";
     
    } else {
      text = "Input is OK";
      document.getElementById("error").style.color = "green";
      document.getElementById("error1").style.color = "green";
      document.getElementById("error2").style.color = "green";
      document.getElementById("error3").style.color = "green";
    }
    document.getElementById("error").innerHTML = text;
    document.getElementById("error1").innerHTML = text;
    document.getElementById("error2").innerHTML = text;
    document.getElementById("error3").innerHTML = text;


    document.getElementById("error").style.fontSize= "20px";
    document.getElementById("error1").style.fontSize= "20px";
    document.getElementById("error2").style.fontSize= "20px";
    document.getElementById("error3").style.fontSize= "20px";
  
  };
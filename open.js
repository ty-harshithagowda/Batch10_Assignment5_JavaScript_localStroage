document.getElementById("button").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})
document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})
document.getElementById("button1").addEventListener("click",function(){
    document.querySelector(".popup1").style.display="flex";
})
document.getElementById("close1").addEventListener("click",function(){
    document.querySelector(".popup1").style.display="none";
})

function validate() {
      
    if( document.myForm.Email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.Email.focus() ;
       return false;
    }
    if( document.myForm.Pwd.value == "" ) {
       alert( "Please provide your password!" );
       document.myForm.Pwd.focus() ;
       return false;
    }
    return( true );
}

function validate1() {
      
    if( document.myForm1.Name.value == "" ) {
       alert( "Please provide your Name!" );
       document.myForm1.Name.focus() ;
       return false;
    }
    if( document.myForm1.Emailid.value == "" ) {
        alert( "Please provide your Emailid!" );
        document.myForm1.Emailid.focus() ;
        return false;
     }
     if( document.myForm1.gender.value == "" ) {
        alert( "Please select your gender!" );
        document.myForm1.gender.focus() ;
        return false;
     }
     if( document.myForm1.Pwd.value == "" ) {
        alert( "Please provide your Pwd!" );
        document.myForm1.Pwd.focus() ;
        return false;
     }
     if( document.myForm1.CPwd.value == "" ) {
        alert( "Please provide your CPwd!" );
        document.myForm1.CPwd.focus() ;
        return false;
     }
     if( document.myForm1.CPwd.value != document.myForm1.Pwd.value ) {
        alert( "password is not matching" );
        document.myForm1.CPwd.focus() ;
        return false;
     }
    return( true );
}
var Name = document.getElementById("Name");
var Emailid = document.getElementById("Emailid");
var gender = document.getElementById("gender");
var Pwd = document.getElementById("Pwd");

var save = document.getElementById("save");

save.onclick = function(){
    localStorage.setItem("name",Name.value);
    localStorage.setItem("Emailid",Emailid.value);
    localStorage.setItem("Pwd",Pwd.value);
    localStorage.setItem("gender", $("gender").prop("checked"));
    

}
var Email =document.getElementById("Email");
var Pwd1 =document.getElementById("Pwd1");
var login=document.getElementById("login");

login.onclick= function(){
    var Emailid = localStorage.getItem('Emailid');
    var Pwd = localStorage.getItem('Pwd');
    if(Email.value !== Emailid || Pwd1.value !== Pwd) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}
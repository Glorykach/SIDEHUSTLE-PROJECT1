var passConfirm = function(){
    if (document.getElementById("PasswordId").value==
    document.getElementById("ConfirmPasswordId").value) {
    document.getElementById("message").style .color="Green";
    document.getElementById("PasswordId").style.border="1px solid green";
    document.getElementById("ConfirmPasswordId").style.border="1px solid green";
    document.getElementById("message").innerHTML ="*Passwords match!";
    
} else {
    document.getElementById("message").style .color = "Red";
    document.getElementById("PasswordId").style.border="1px solid red";
    document.getElementById("ConfirmPasswordId").style.border="1px solid red";
    document.getElementById("message").innerHTML ="*Passwords do not match";
    
}
}
function Focus2(){
    document.getElementById("EmailId").style.border="1px solid blue";
    document.getElementById("EmailId").style. boxShadow = "0px 0px 5px grey";
}
function Focus3(){
    document.getElementById("PasswordId").style.border="1px solid blue";
    document.getElementById("PasswordId").style. boxShadow = "0px 0px 5px grey";
}
function Focus1(){
    document.getElementById("FirstNameId").style.border="1px solid blue";
    document.getElementById("FirstNameId").style. boxShadow = "0px 0px 5px grey";
}
function Focus4(){
    document.getElementById("LastNameId").style.border="1px solid blue";
    document.getElementById("LastNameId").style. boxShadow = "0px 0px 5px grey";
}
function Focus5(){
    document.getElementById("PhoneNumber").style.border="1px solid blue";
    document.getElementById("PhoneNumber").style. boxShadow = "0px 0px 5px grey";
}
function Focus6(){
    document.getElementById("ConfirmPasswordId").style.border="1px solid blue";
    document.getElementById("ConfirmPasswordId").style. boxShadow = "0px 0px 5px grey";
}


function NotFocus1(){
    document.getElementById("FirstNameId").style.border="1px solid rgba(199, 196, 196, 0.521)";
    document.getElementById("FirstNameId").style. boxShadow = "0px 0px 0px black";   
}
function NotFocus2(){
    document.getElementById("EmailId").style.border="1px solid rgba(199, 196, 196, 0.521)";
    document.getElementById("EmailId").style. boxShadow = "0px 0px 0px black";   
}
function NotFocus3(){
    document.getElementById("PasswordId").style.border="1px solid rgba(199, 196, 196, 0.521)";
    document.getElementById("PasswordId").style. boxShadow = "0px 0px 0px black";   
}
function NotFocus4(){
    document.getElementById("LastNameId").style.border="1px solid rgba(199, 196, 196, 0.521)";
    document.getElementById("LastNameId").style. boxShadow = "0px 0px 0px black";   
}
function NotFocus5(){
    document.getElementById("PhoneNumber").style.border="1px solid rgba(199, 196, 196, 0.521)";
    document.getElementById("PhoneNumber").style. boxShadow = "0px 0px 0px black";   
}
function NotFocus6(){
    document.getElementById("ConfirmPasswordId").style.border="1px solid rgba(199, 196, 196, 0.521)";
    document.getElementById("ConfirmPasswordId").style. boxShadow = "0px 0px 0px black";   
}


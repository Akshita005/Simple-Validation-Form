function clearErrors(){
    errors=document.getElementsByClassName('formerror'); //get all the errors
    for(let item of errors)
        item.innerHTML=""; //set all errors to blank
}

function seterror(id, error){
    //sets error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    /*document.forms- brings all the forms from document
    document.forms[myform][fname] --> give me that form whose name is myform and tagname if fname and give their value */
    var returnval=true;
    clearErrors();
    //perform validation and if validation fails set value of returnval to false

    var name=document.forms['myForm']["fname"].value;

    if(name.length<5){
        seterror('name','*Length of name is too short');
        returnval=false;
    }
    
    var email=document.forms['myForm']['femail'].value;
    if(email.length>25){
        seterror('email','*Length of name is too long');
        returnval=false;
    }

    var phone=document.forms['myForm']['fphone'].value;
    if(phone.length <10){
        seterror('phone','*Phone number should be of 10 digit number');
        returnval=false;
    }    

    var passw=document.forms['myForm']['fpass'].value;
    
    if(passw.length<6){
        seterror('pass','*Enter a valid password');
        returnval=false;
    }

    var cpassword=document.forms['myForm']['fcpass'].value;
    if(passw !== cpassword){
        seterror('cpass','*Confirm password should match the password');
        returnval=false;
    }  

    return returnval;
}


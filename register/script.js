function validateForm() {

    let phone = document.forms["myForm"]["phone"].value;
    let email = document.forms["myForm"]["email"].value;
    phone = phone.substring(1);
    phone = parseInt(phone)
    if (Number.isInteger(phone)){

        if (email.includes('@')){
            alert('Registration complete')
        } 
        else{
            alert('Email incomplete')
            return false;
        }
    } 
    else{
        alert("Phone number must be number");
        return false;
    }
}
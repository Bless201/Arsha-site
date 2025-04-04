
let add = document.getElementById("register");
add.addEventListener("click", () => {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
       setTimeout( () => {
        success()}, 3000 )

    function success() {
    let div1 = document.getElementById("wait");
    div1.style.display = "none";

    let div2 = document.getElementById("success");
    div2.style.display = "block";
    }
})

let div = document.getElementById("button");
div.addEventListener("click", () => {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
})

  
//              //action triggeered due to click on the button
// let btn = document.getElementById("register"); //having access to the button
// btn.addEventListener("click", () => {
//     alert("clicked a button");
// });


       
            //Helper Functions
//validate function
function validateField(value, errorElementId, validationFx, errorMessage){
    const errorElement = document.getElementById(errorElementId)
   
    if(!validationFx){
        errorElement.textContent = errorMessage;
        return false;
    }else{
        errorElement.textContent = "";
        return true;
        
    }
}  

// not empty function
function isNotEmpty(value) {
    return value.trim() !== "";
}

// Make sure email id valid
function isValidEmail(value){
    const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    return emailPattern.test(value);
}

// // phone valid function
// function isValidPhone(value){
//     const phonePattern = /^[0-9]{10-15}$/;
//     return phonePattern.test(value);
// 

//pwd
function isValidPassword(value){
    return value.length >=6
}

//confirm password
function isValidConfirmPassword(value){
    isValidPassword === isValidConfirmPassword
    return isValidPassword()
}

//name function
function isValidName(value){
    return value.trim().length >=3
}

function validateForm() {
    //getting input values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const confirmPassword = document.getElementById("confirmPassword").value.trim()

    let isValid = true

    //clear previous error
    document.getElementById("nameError").textContent = ""
    document.getElementById("emailError").textContent = ""
    document.getElementById("passwordError").textContent = ""
    document.getElementById("confirmError").textContent = ""

    // validate each FIELD using the helper function 
    isValid = 
        validateField(name, 'nameError', isNotEmpty, "Name is required") && 
        validateField(name, 'nameError', isValidName, "Enter valid name") &&
        isValid;

    isValid = 
        validateField(email, 'emailError', isNotEmpty, "Email is required") &&
        validateField(email,'emailError', isValidEmail, "Enter valid email" ) &&
        isValid;

    isValid = 
        validateField(password, 'passwordError', isNotEmpty, "Password is required") &&
        validateField(password,'passwordError', isValidPassword, "Enter valid password" ) &&
        isValid;

    isValid = 
        validateField(confirmPassword, 'confirmError', isNotEmpty, "Password is required") &&
        validateField(confirmPassword,'confirmError', isValidConfirmPassword, "Enter valid password" ) &&
        isValid

    if (isValid){
        //prepare and save values to local storage
        let inputValues = {
            password, confirmPassword, name, email
        };

        //save to local storage
        localStorage.setItem("UserData", JSON.stringify(inputValues));

        let div = document.getElementById("register");
        div.addEventListener("click", () => {
            let overlay = document.getElementById("overlay");
            overlay.style.display = "block";
                setTimeout( () => {
                validateForm()}, 3000 )
        })
    }
}











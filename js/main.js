// Clean up function
function cleanUp(){
  // Clear error messages
  document.getElementById('fnameError').innerHTML = ''
  document.getElementById('lnameError').innerHTML = ''
  document.getElementById('emailError').innerHTML = ''
  document.getElementById('mobileError').innerHTML = ''
  document.getElementById('passwordError').innerHTML = ''
  document.getElementById('confirmPasswordError').innerHTML = ''
}
// Clean up input fields
function cleanUpInput(){
  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('email').value = ''
  document.getElementById('mobileNo').value = ''
  document.getElementById('password').value = ''
  document.getElementById('confirmPassword').value = ''
}

function signup() {
  // Get input values
  const firstName = document.getElementById('firstName').value;
  const lastName  = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const mobileNo = document.getElementById('mobileNo').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Regular expressions for validation
  const nameValidation = new RegExp('^[a-zA-Z]{3,}$');
  const emailValidation = new RegExp('^.+@.+\..+$');
  const mobileValidation = new RegExp('^[0-9]{10}$')
  const passwordValidation = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&.])[a-zA-Z0-9!@#$%&.]{8,}$')

  // Clean up any previous error messages
  cleanUp();

  const errorValidation = !(nameValidation.test(firstName) && nameValidation.test(lastName) && emailValidation.test(email) && mobileValidation.test(mobileNo) && passwordValidation.test(password)&&(password === confirmPassword))
  // Validate input
  if(errorValidation){
  if(!nameValidation.test(firstName)){
    document.getElementById('fnameError').innerHTML = '*Please enter valid Firstname'
  }
  if(!nameValidation.test(lastName)){
    document.getElementById('lnameError').innerHTML = '*please enter valid LastName'
  }
  if(!emailValidation.test(email)){
    document.getElementById('emailError').innerHTML = '*please enter valid email'
  }
  if(!mobileValidation.test(mobileNo)){
    console.log(mobileNo)
    document.getElementById('mobileError').innerHTML = '*please enter valid mobileno'
  }

  if(!(passwordValidation.test(password) && passwordValidation.test(confirmPassword))){
    document.getElementById('passwordError').innerHTML = '*please enter valid password'
  }
  if(!(password === confirmPassword)){
    console.log(password, confirmPassword);
    document.getElementById('confirmPasswordError').innerHTML = 'passwords did`t match please enter again'
  }
  const content ="Hey! form Validation is failed please check and resubmit the form"
  alert(content)
}else{
  // Clean up any previous error messages
  cleanUpInput();
  
  const content ="Hey! " + firstName + " you have sucessfully completed form Validation"
  alert(content)
}
}

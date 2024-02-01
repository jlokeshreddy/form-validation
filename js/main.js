
// Clean up function
function cleanUp(){
  // Clear error messages
  document.getElementById('fnameError').innerHTML = ''
  document.getElementById('lnameError').innerHTML = ''
  document.getElementById('emailError').innerHTML = ''
  document.getElementById('mobileError').innerHTML = ''
  document.getElementById('passwordError').innerHTML = ''
  document.getElementById('confirmPasswordError').innerHTML = ''
  document.getElementById('emessage').innerHTML = ''
  document.getElementById('successMessage').innerHTML = ''
}
// Clean up input fields
function cleanUpInput(){
  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('email').value = ''
  document.getElementById('mobileNo').value = ''
  document.getElementById('password').value = ''
  document.getElementById('confirmPassword').value = ''
  document.getElementById('emessage').innerHTML = ''
  document.getElementById('successMessage').innerHTML = ''
  const submitBtn = document.getElementById('changeButton');
  submitBtn.disabled = true;
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
  document.getElementById('emessage').innerHTML = content
  alert(content)
}else{
  // Clean up any previous error messages
  cleanUpInput();
  
  const content ="Hey! " + firstName + " you have sucessfully completed form Validation"
  document.getElementById('successMessage').innerHTML = content
  alert(content)
}
}


document.addEventListener('DOMContentLoaded', function(event) {

  let firstNameInput = document.getElementById('firstName');
  let lastNameInput = document.getElementById('lastName');
  let emailInput = document.getElementById('email');
  let mobileNoInput = document.getElementById('mobileNo');
  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('confirmPassword');
  const submitBtn = document.getElementById('changeButton');
  
  submitBtn.disabled = true;

  function checkFields() {
      let firstNameValue = firstNameInput.value;
      let lastNameValue = lastNameInput.value;
      let emailValue = emailInput.value;
      let mobileNoValue = mobileNoInput.value;
      let passwordValue = passwordInput.value;
      let confirmPasswordValue = confirmPasswordInput.value;

      if (
          firstNameValue !== '' &&
          lastNameValue !== '' &&
          emailValue !== '' &&
          mobileNoValue !== '' &&
          passwordValue !== '' &&
          confirmPasswordValue !== ''
      ) {
          submitBtn.disabled = false;
      } else {
          submitBtn.disabled = true;
      }
  }

  firstNameInput.addEventListener('input', checkFields);
  lastNameInput.addEventListener('input', checkFields);
  emailInput.addEventListener('input', checkFields);
  mobileNoInput.addEventListener('input', checkFields);
  passwordInput.addEventListener('input', checkFields);
  confirmPasswordInput.addEventListener('input', checkFields);

})

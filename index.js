function validateName(event) {
  var nameInput = document.getElementById('name');
  var name = nameInput.value.trim(); // Trim leading and trailing spaces
  var nameSpan = document.getElementById('name-span');
  var alphaNumericRegex = /^[a-zA-Z0-9]+$/;

  // Check if the pressed key is space and prevent its insertion
  if (event.key === ' ' || event.keyCode === 32) {
      event.preventDefault(); // Prevent space from being inserted
      // Remove the space from the input value
      nameInput.value = name.replace(/\s/g, '');
      return false;
  }

  if (!name) {
      nameSpan.innerHTML = "<p>Name is required</p>";
      nameInput.style.border = '2px solid red';
      return false;
  } else if (name.length > 10) {
      name = name.slice(0, 10); // Truncate name to 10 characters
      nameSpan.innerHTML = "<p>Name should not exceed 10 characters</p>";
      nameInput.value = name; // Update input value with truncated name
      nameInput.style.border = '2px solid red';
      return false;
  } else if (!alphaNumericRegex.test(name)) {
      nameSpan.innerHTML = "<p>Name should only contain alphanumeric characters</p>";
      nameInput.style.border = '2px solid red';
      return false;
  } else {
      nameSpan.innerHTML = '';
      nameInput.style.border = '2px solid green';
      return true;
  }
}





function validateEmail() {
  var emailInput = document.getElementById('email');
  emailInput.value = emailInput.value.toLowerCase();
  var email = emailInput.value;
  var emailSpan = document.getElementById('email-span');
  
  var emailRegex = /^[a-zA-Z]\w*([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.){1}(com|in|org)))$/;
  
  var dotComCount = (email.match(/\.com/g) || []).length;
  var dotInCount = (email.match(/\.in/g) || []).length;

  if (!email) {
    emailSpan.innerHTML = "<p>Email is required.</p>";
     emailInput.style.border = '2px solid red';
  } else if (email.length > 30) {
    emailSpan.innerHTML = "<p>Email should be maximum 30 characters.</p>";
     emailInput.style.border = '2px solid red';
  } else if (!emailRegex.test(email)) {
    emailSpan.innerHTML = "<p>Please enter a valid email address.</p>";
     emailInput.style.border = '2px solid red';
  } else if (dotComCount + dotInCount > 2) {
    emailSpan.innerHTML = "<p>Email can contain '.com' and '.in' combined not more than two times.</p>";
     emailInput.style.border = '2px solid red';
  } else {
    emailSpan.innerHTML = '';
    emailInput.style.border = '2px solid green';
    return true;
  }
}

function validatePass() {
  var passInput = document.getElementById('password');
  var pass = passInput.value;
  var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/;
  var passSpan = document.getElementById('pass-span')

  if (!pass) {
    passSpan.innerHTML = "<p>Please enter a password.</p>";
    passInput.style.border = '2px solid red';
  } else if (pass.length > 16) { 
    pass = pass.slice(0, 16); // Truncate password to 16 characters
    passInput.value = pass; // Update input value
  
  }else if (!passRegex.test(pass)) {
    passSpan.innerHTML = "<p>Please enter a valid password. It must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>";
    passInput.style.border = '2px solid red';
  } else {
    passSpan.innerHTML = "";
    passInput.style.border = '2px solid green';
    return true;
  }
  console.log(pass.length);
}

function validatePasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword2 = document.getElementById("password2");
  var confirmPassword = document.getElementById("password2").value;
  var span = document.getElementById("confirm-pass-span");

  if(!confirmPassword){
    span.innerHTML = "";
      confirmPassword2.style.border = '2px solid red';
  }
  else if (password !== confirmPassword) {
      span.innerHTML = "Passwords do not match";
      confirmPassword2.style.border = '2px solid red';
  } else {
      span.innerHTML = "";
      confirmPassword2.style.border = '2px solid green';
      return true;
  }
}

function PasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.getElementById("toggleBtn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  }
}

function PasswordVisibility2() {
  var passwordInput = document.getElementById("password2");
  var toggleButton = document.getElementById("toggleBtn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  }
}
function validateDescription() {
  var alphaInput = document.getElementById('alpha');

  var description = alphaInput.value.trim(); // Trim leading and trailing spaces
  var alphaSpan = document.getElementById('alpha-span');
  var words = description.split(/\s+/); // Split description into words

  // Count the number of unique words
  var uniqueWords = new Set(words);
  var uniqueWordCount = uniqueWords.size;

  if (!description) {
      alphaSpan.innerHTML = "<p>Description is required</p>";
      alphaInput.style.border = '2px solid red';
      return false;
  } else if (words.length > 50) {
      alphaSpan.innerHTML = "<p>Description should not exceed 50 words</p>";
      alphaInput.style.border = '2px solid red';
      return false;
  } else if (uniqueWordCount < words.length) {
      alphaSpan.innerHTML = "<p>Description should not contain repeated words</p>";
      alphaInput.style.border = '2px solid red';
      return false;
  } else {
      alphaSpan.innerHTML = '';
      alphaInput.style.border = '2px solid green';
      return true;
  }
}

function validatePhone() {
  var phoneInput = document.getElementById('phone');
  var phone = phoneInput.value;
  var phoneSpan = document.getElementById('phone-span');
  var countryCode = document.getElementById('country_code').value;
  var requiredLength = getRequiredLength(countryCode);

  if (!phone) {
    phoneSpan.innerHTML = "<p>Please enter a phone number.</p>";
    phoneInput.style.border = '2px solid red';
  } else if (phone.length > requiredLength) { 
    phone = phone.slice(0, requiredLength); // Truncate phone number to required length
    phone.value = phone; // Update input value
    phoneSpan.innerHTML = "<p>Phone number should be " + requiredLength + " digits.</p>";
    phoneInput.style.border = '2px solid red';
  } else if (phone.length < requiredLength) {
    phoneSpan.innerHTML = "<p>Phone number should be " + requiredLength + " digits.</p>";
    phoneInput.style.border = '2px solid red';
  } else {
    phoneSpan.innerHTML = '';
    phoneInput.style.border = '2px solid green';
    return true;
  }
}

function getRequiredLength(countryCode) {
  switch (countryCode) {
    case "+1": // USA, Canada
      return 10;
    case "+44": // UK
      return 10;
    case "+61": // Australia
      return 9;
    case "+49": // Germany
      return 10;
    case "+33": // France
      return 9;
    case "+86": // China
      return 11;
    case "+91": // India
      return 10;
    case "+55": // Brazil
      return 10;
    case "+81": // Japan
      return 10;
    default:
      return 10; // Default length
  }
}

function validateAddress() {
  var addressInput = document.getElementById('address');
  var address = addressInput.value.trim(); // Trim leading and trailing spaces
  var addressSpan = document.getElementById('address-span');

  if (!address) {
      addressSpan.innerHTML = "<p>Address is required</p>";
      addressInput.style.border = '2px solid red';
      return false;
  } else if (address.length > 20) {
      addressSpan.innerHTML = "<p>Address should not exceed 20 characters</p>";
      addressInput.style.border = '2px solid red';
      return false;
  } else {
      addressSpan.innerHTML = '';
      addressInput.style.border = '2px solid green';
      return true;
  }
}


function validateAgreement() {
  var agreementCheckbox = document.getElementById('agreement');

  var agreementSpan = document.getElementById('agreement-span');

  if (agreementCheckbox.checked) {
      agreementSpan.innerHTML = '';
      return true;
  } else {
      agreementSpan.innerHTML = "<p>You must agree to the terms and conditions</p>";
    
  }
}



function submit() {
  var event = {}; // Dummy event object
  var nameValid = validateName(event);
  console.log("🚀 ~ submit ~ nameValid:", nameValid)
  var emailValid = validateEmail();
  console.log("🚀 ~ submit ~ emailValid:", emailValid)
  var passValid = validatePass();
  console.log("🚀 ~ submit ~ passValid:", passValid)
  var passMatchValid = validatePasswordMatch();
  console.log("🚀 ~ submit ~ passMatchValid:", passMatchValid)
  var descriptionValid = validateDescription();
  console.log("🚀 ~ submit ~ descriptionValid:", descriptionValid)
  var phoneValid = validatePhone();
  console.log("🚀 ~ submit ~ phoneValid:", phoneValid)
  var addressValid = validateAddress();
  console.log("🚀 ~ submit ~ addressValid:", addressValid)
  var agreementValid = validateAgreement();
  console.log("🚀 ~ submit ~ agreementValid:", agreementValid)

  // If all validations pass, proceed to login page
  if (!nameValid || !emailValid || !passValid || !passMatchValid || !descriptionValid || !phoneValid || !addressValid || !agreementValid) {
    
    alert("Please correct all errors before proceeding to login.");
  } else {
    window.location.href = 'login.html';
    // If any validation fails, do not proceed to login page
  }
}






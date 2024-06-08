document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;
  
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Clear previous error messages
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('phoneError').innerText = '';
  document.getElementById('passwordError').innerText = '';
  document.getElementById('confirmPasswordError').innerText = '';

  // Name validation
  if (name.length < 5) {
    document.getElementById('nameError').innerText = 'Name must be at least 5 characters long.';
    isValid = false;
  }

  // Email validation
  if (!email.includes('@')) {
    document.getElementById('emailError').innerText = 'Enter a valid email address.';
    isValid = false;
  }

  // Phone number validation
  if (phone === '123456789' || !/^\d{10}$/.test(phone)) {
    document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number.';
    isValid = false;
  }

  // Password validation
  if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
    document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and not be "password" or the same as the name.';
    isValid = false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
    isValid = false;
  }

  // If the form is valid, submit it (you can replace this with an actual form submission)
  if (isValid) {
    alert('Form submitted successfully!');
  }
}

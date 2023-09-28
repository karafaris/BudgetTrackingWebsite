async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim(); // Get the email value
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email, // Use the email variable
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      console.log('Success');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

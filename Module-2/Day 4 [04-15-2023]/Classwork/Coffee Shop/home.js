// #1 Prompt based login
// on initial load of the app, there should be a button at the top right of the nav bar that says login
// when the user clicks the login button, a prompt should appear asking for their name
// the user should then type their full name into the prompt (first name last name separated by a space)
// once the user has typed their name into the prompt, the prompt should close and the user should be logged in
// the login button should be gone and should now be replaced with the users avatar string (e.g. "JS" for "John Smith")
const loginButton = document.getElementById("login");
const joinUsButton = document.getElementById("joinus");
function loginRequest() {
  fullName = prompt("Please type your full name");
  firstInitial = fullName[0];
  lastInitial = fullName[fullName.indexOf(" ") + 1];
  console.log(firstInitial + lastInitial);
  loginButton.innerText = firstInitial + lastInitial;
  console.log(joinUsButton);
  joinUsButton.remove();
}

users = {
  username: "fk611@gmail.com",
  password: "hello123",
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (emailValue === "" || passwordValue === "") {
      alert("Please fill in both email and password fields.");
    } else {
      if (emailValue === users.username && passwordValue === users.password) {
        alert("Logged in");
      } else {
        alert("Wrong credentials!");
      }
    }
  });
});

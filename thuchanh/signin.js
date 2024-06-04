const inputUsername = document.querySelector(".input-signin-username");
const inputPassword = document.querySelector(".input-signin-password");
const btnSignUp = document.querySelector(".signin_signInButton");

btnSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputUsername.value === "" ||
        inputPassword.value === ""
    ) {
        alert("Vui lòng không để trống");
    } else {
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if (user.username === inputUsername.value && user.username === inputPassword.value) {
            alert("Đăng nhập thành công");
            window.location.href="./index.html";
        } else {
            alert("Đăng nhập thất bại");
        }
    }
})
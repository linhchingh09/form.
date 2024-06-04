const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup_signInButton");


btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputUsernameRegister.value === "" ||
        inputPasswordRegister.value === ""
    ) {
        alert("Vui lòng không để trống");
    } else {
        const user = {
            username : inputUsernameRegister.value,
            password : inputPasswordRegister.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(inputUsernameRegister.value, json);
        alert("Đăng ký thành công");
        window.location.href="signin.html";
    }
})

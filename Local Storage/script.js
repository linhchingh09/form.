function reset(){
    document.getElementById("name").value = "";
    document.getElementById("password").value = ""
}


function validateInput() {
    let formElements = document.querySelector(".form");
    let inputElements = formElements.querySelectorAll(".input");
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === "") {
            inputElements[i].parentElement.querySelector(".error-message").innerText = `Please enter your ${inputElements[i].id}`;
        } else {
            inputElements[i].parentElement.querySelector(".error-message").innerText = "";
        }
    }
}

function addNew() {
    validateInput()
    let formElements = document.querySelector(".form");
    let errorElements = formElements.querySelectorAll(".error-message");
    let arrErrorElement = []
    for (let i = 0; i < errorElements.length; i++) {
        arrErrorElement.push(errorElements[i].innerText);
    }
    let check = arrErrorElement.every(value => value === "");
    if (check) {
        let username = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let userInfo = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
        userInfo.push({
            name: username,
            password: password
        })
        localStorage.setItem("Users",JSON.stringify(userInfo))
        renderUser()
        reset()
    }
}

function renderUser() {
    let userInfo = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
    let user = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Password</th>
    <th>Action</th>
</tr>`
userInfo.map((value,index) =>{
    user += `<tr>
    <td>${index + 1}</td>
    <td>${value.name}</td>
    <td>${value.password}</td>
    <td>
       <button onclick="edit(${index}")>Edit</button>
       <button onclick="delete(${index}")>Delete</button>
    </td>
</tr>`
})

document.getElementById("tableContent").innerHTML = user;
}

function edit(index){
    let userInfo = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
    document.getElementById("name").value = userInfo[index].name;
    document.getElementById("password").value = userInfo[index].password;
    document.getElementById("index").value = index;

    document.getElementById("save").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
}

function change(){
    let userInfo = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
    let index = document.getElementById("index").value;
    userInfo[index]={
        username: document.getElementById("name").value,
        password: document.getElementById("password").value
    }
    localStorage.setItem("Users", JSON.stringify(userInfo))
    document.getElementById("save").style.display = "inline-block";
    document.getElementById("update").style.display = "none";
    reset()
    renderUser()
}

function deleteStudent(index){
    let userInfo = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : []
    if (confirm("are you sure ?")){
        userInfo.splice(index, 1)
    }
    localStorage.setItem("Users", JSON.stringify(userInfo))
    renderUser()
}


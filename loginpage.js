const userForm = document.getElementById("user-forum");
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const isAdmin = document.getElementById("isAdmin");


// retrive all the submitted data,returns an array
function getAllUsers() {
    const users = localStorage.getItem('users');
    if (users) {
        return JSON.parse(users);
    }
    return [];
}

userForm.addEventListener('submit', function (e){
    e.preventDefault();

    let isValid = true;


    // username validation 

    if(userNameInput.value.length < 3){
        showError(userNameInput, "Username must be at least 3 characters long.");
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailRegex.test(emailInput.value))

    if(!emailRegex.test(emailInput.value)) {
        showError(emailInput,  "Please enter a valid email.")
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    if(!passwordRegex.test(passwordInput.value)) {
        showError(passwordInput,   "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.")
        isValid = false;
    }
    /* ---------------------------------------------------------------------- */

    ///checkBox-Admin-There's a problem with this-check why the message is showing only for a second)
    /* ---------------------------------------------------------------------- */
    if (isValid) {

        let isAdminChecked = document.getElementById("isAdmin").checked;
        if (isAdminChecked) {
            document.getElementById("demo1").innerHTML = "User Is Admin";
        } else {
            document.getElementById("demo1").innerHTML = "User Isn't Admin";
        }
    }
          // ... user creation and LocalStorage logic ...

    if (isValid) {
        const newUser = {
            username: userNameInput.value,
            email: emailInput.value,
            password: passwordInput.value 
        };

        const users = getAllUsers();
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));
        alert('Form submitted successfully');
        window.location.href = 'loginPage.html'; 

    }
//check if the checkbox is checked
    // let isAdmin = isAdminCheckbox.checked; 
//     let isAdmin1 = document.getElementById("isAdmin").checked;
//     if (isAdmin1 == true){
// document.getElementById("demo1").innerHTML ="User Is Admin";
//     } else{
//         document.getElementById(`demo1`).innerHTML= "";
//     }
    

    // if (isAdmin) {
    //     console.log("User is an admin.");
    // } else {
    //     console.log("User is not an admin.");
    // }

   

});


// show error message and highlight the input
function showError(input, message){
const errorDiv = document.getElementById(input.id + "Error");
errorDiv.textContent = message;
input.classList.add('error')
}
const myinputsArray = [userNameInput, emailInput, passwordInput]
document.querySelectorAll('input').forEach(input =>{
input.addEventListener('input', ()=>{
    input.classList.remove('error');
    document.getElementById(input.id + 'Error').textContent = '';
})
})


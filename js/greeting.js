//token
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

//set const
//loginForm
const loginForm = document.querySelector("#loginForm");
const loginDiv = loginForm.querySelector("#loginDiv");
const loginInput = loginForm.querySelector("#loginForm input");
//contents
const contentDiv = document.querySelector("#contentDiv");
const greeting = contentDiv.querySelector("#greeting");
//localStorage
const localUsername = localStorage.getItem(USERNAME_KEY);

// login Event
loginForm.addEventListener("submit", onLoginSubmit);
loginForm.addEventListener("reset", printLoginForm);

console.log(localUsername);

if (localUsername === null) {
    printLoginForm();
} else {
    printContent();
}

function onLoginSubmit(e) {
    e.preventDefault();
    const checkRes = checkLoginInput();

    if (checkRes) {
        setLocalstorage();
        printContent();
    }
}

// contents 보이기
function printContent() {
    contentDiv.classList.remove(HIDDEN_CLASS);
    loginDiv.classList.add(HIDDEN_CLASS);
    setGreeting();
}

function setGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
}

//login form 보이기
function printLoginForm() {
    contentDiv.classList.add(HIDDEN_CLASS);
    loginDiv.classList.remove(HIDDEN_CLASS);

    resetLocalstorage();
    resetGreeting();
}

function resetLocalstorage() {
    localStorage.removeItem(USERNAME_KEY);
}

function setLocalstorage() {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
}

function resetGreeting() {
    greeting.innerText = "";
}

function checkLoginInput() {
    let res = true;

    if (!loginInput.value.trim()) {
        alert("아이디를 입력해주세요");
        res = false;
    }

    return res;
}


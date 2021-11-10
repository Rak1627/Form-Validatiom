// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const password = document.getElementById('password');
// const Cpassword = document.getElementById('Cpassword');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     validate();
//     isEmail();
// })

// const validate = () => {
//     const usernameVal = username.value.trim();
//     const emailVal = email.value.trim();
//     const phoneVal = phone.value.trim();
//     const passwordVal = password.value.trim();
//     const CpasswordVal = Cpassword.value.trim();

//     //! Validate username
//     if (usernameVal === "") {
//         setErrorMsg(username, 'username cannot be blank');
//     } else if (usernameVal.length <= 2) {
//         setErrorMsg(username, 'username min 3 char');
//     } else {
//         setSuccessMsg(username)
//     }



//     //! Validate email
//     if (emailVal === "") {
//         setErrorMsg(email, 'email cannot be blank');
//     } else if (!isEmail(emailVal)) {
//         setErrorMsg(email, 'Not a Valid Email');
//     } else {
//         setSuccessMsg(email)
//     }
// }

// function setErrorMsg(input, errormsgs) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error';
//     small.textContent = errormsgs;
// }

// function setSuccessMsg(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success'
// }
// //! More Email Valid
// const isEmail = (emailVal) => {
//     let atSymbol = emailVal.indexOf('@');
//     if (atSymbol < 1) return false;
//     let dot = emailVal.lastIndexOf('.');
//     if (dot <= atSymbol + 5) return false;
//     if (dot === emailVal.length - 1) return false;
//     return true;

// }


const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const Cpassword = document.getElementById('Cpassword')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    trimVal();
    successmsg();
    errormsg();
    configrate();
});

const trimVal = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const CpasswordVal = Cpassword.value.trim();


    if (usernameVal === ""){
        errormsg(username, 'username cannot be blank at this time');
    }else if (usernameVal.length <= 2){
        errormsg(username, 'minimun at least 3 or more character in your line or feild');
    }else {
        successmsg(username);
    }

    if (emailVal === ""){
        errormsg(email, 'Email cannot be bank at this time');
    }else if (!configrate(emailVal)){
        errormsg(email, 'this Email cannot be exsits');
    }else {
        successmsg(email);
    }

    if (phoneVal === ""){
        errormsg(phone, 'Phone Number cannot be bank at this time');
    }else if (phoneVal.length != 11){
        errormsg(phone, 'Number Validity only 11 character');
    }else {
        successmsg(phone);
    }

    if (passwordVal === ""){
        errormsg(password, 'password cannot be bank at this time');
    }else if (passwordVal.length > 6){
        errormsg(password, 'password only 6 character');
    }else {
        successmsg(password);
    }
    if (CpasswordVal === ""){
        errormsg(Cpassword, 'password cannot be bank at this time');
    }else if (passwordVal !== CpasswordVal){
        errormsg(Cpassword, 'Confirm Password not Match');
    }else {
        successmsg(Cpassword);
    }

   
}

const errormsg = (input, errormsgs) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.textContent = errormsgs;
}
const successmsg = (input) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}



const configrate = (emailVal) => {
    let symbol = emailVal.indexOf('@');
    if (symbol < 1) return false;
    let dot = emailVal.lastIndexOf('.');
    if (dot <= symbol + 2) return false;
    return true;
}
class Account{
    constructor(login,password){
        this.login = login;
        this.password = password;
    }
}
let i;
const btn = document.querySelector('.btn');
const btnLogin = document.querySelector('.btn-in');
const dataAccounts = [];
const loginValue = document.querySelector('.login').value;
const passwordValue = document.querySelector('.password').value;
const loginValueIn = document.querySelector('.login-in').value;
const passwordValueIn = document.querySelector('.password-in').value;
console.log(dataAccounts)
btn.addEventListener('click',()=>{
    const loginValue = document.querySelector('.login').value;
    const passwordValue = document.querySelector('.password').value;
    const newProfile = new Account(loginValue,passwordValue)
    if(newProfile.password !== '' && newProfile.login !== '' ){
        dataAccounts.push(newProfile)
    }
    for(i=0; dataAccounts.length === 5 && i < 1; i++){
        console.log(dataAccounts)
    }
})
btnLogin.addEventListener('click',()=>{
    for(i = 0; i < dataAccounts.length; i++){
        if(dataAccounts[i].Account === loginValueIn){
            console.log('Hui')
        }
        console.log(dataAccounts[i].newProfile.password)
    }
    console.log(loginValueIn)
})
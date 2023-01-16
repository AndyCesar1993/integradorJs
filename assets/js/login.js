const renderError = document.querySelector(".render-error");
const formLogin = document.querySelector(".login-form");
const inputUsername = document.getElementById("user-name");
const inputPassword = document.getElementById("password");

class Person{
    constructor(id,name,username,email,password,avatar){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
}

const person = [
    new Person(1,"Cosme Fulanito","admin","admin@admin.com","admin","././assets/img/avatar.png"),
    new Person(2,"Cesar","cesar","cesar@cesar.com","cesar","././assets/img/avatar.png"),

];

const searchUser = (username)=>{
    user = person.find((user)=>user.username === username);
}
const renderHtmlError = (msj) =>{
    renderError.textContent=msj;
}

const emptiCamp=(input)=>{
    return input.value === ""
}

const passwordOk=(input)=>{
    return input.value === user.password
}
const usernameOk=(input)=>{
    return input.value === user.username
}



const validation=(e)=>{
    e.preventDefault()
    searchUser(inputUsername.value)
    saveLocalStorage(user)
    if(emptiCamp(inputUsername)){
        renderHtmlError("Se debe ingreasr un nombre de usuario!");
    }if (emptiCamp(inputPassword)){
        renderHtmlError("Se debe ingresar una contraseña!");
    }if(!passwordOk(inputPassword)&&(!emptiCamp(inputUsername))&&(!emptiCamp(inputPassword))){
        renderHtmlError("El nombre de usario y/o la contraseña son incorrectos!");
    }if(!usernameOk(inputUsername)&&(!emptiCamp(inputUsername))&&(!emptiCamp(inputPassword))){
        renderHtmlError("El nombre de usario y/o la contraseña son incorrectos!");
    }if((usernameOk(inputUsername))&&(passwordOk(inputPassword))){
        window.location.href= "././index.html";
    }
    formLogin.reset()
}

formLogin.addEventListener("submit",validation);
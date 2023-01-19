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

let newUser= JSON.parse(localStorage.getItem("newUser"))||[];

const saveLocalStorageNewUser =(newUser)=>{
    localStorage.setItem("newUser",JSON.stringify(newUser));
}

/* const person = [
    new Person(1,"Cosme Fulanito","admin","admin@admin.com","admin","././assets/img/avatar.png"),
    new Person(2,"Cesar","cesar","cesar@cesar.com","cesar","././assets/img/avatar.png"),
] */



const searchUser = (username)=>{
    user = newUser.find((user)=>user.username === username);
    if(!user){
        renderHtmlError("El nombre de usario no existe!");
        return
    }if (user.password !== inputPassword.value){
        renderHtmlError("La contraseña es incorrecta!");
        return
    }else{
        saveLocalStorage(user);
        window.location.href= "././index.html";
        return
    }     
}

const renderHtmlError = (msj) =>{
    renderError.textContent=msj;
}

const emptiCamp=(input)=>{
    return input.value === ""
}


const validation=(e)=>{
    e.preventDefault()
    if(emptiCamp(inputUsername)){
        renderHtmlError("Se debe ingreasr un nombre de usuario!");
        return
    }if (emptiCamp(inputPassword)){
        renderHtmlError("Se debe ingresar una contraseña!");
        return
    }else {
        searchUser(inputUsername.value);
        formLogin.reset();
    }
    
}

const initLogin=()=>{
    formLogin.addEventListener("submit",validation); 
}

initLogin();
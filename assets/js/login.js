const renderError = document.querySelector(".render-error");
const inputUsername = document.getElementById("user-name");
const inputPassword = document.getElementById("password");
const formLogin = document.querySelector(".login-form");



/*User Login*/

let user= JSON.parse(localStorage.getItem("user"))||[];

const saveLocalStorage =(user)=>{
    localStorage.setItem("user",JSON.stringify(user));
}

/*New User Register*/

let newUser= JSON.parse(localStorage.getItem("newUser"))||[];

const saveLocalStorageNewUser =(newUser)=>{
    localStorage.setItem("newUser",JSON.stringify(newUser));
}

/*Search User*/

const searchUser = (username)=>{
    user = newUser.find((user)=>user.username === username.toLowerCase());
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




/*Renderizar error*/


const renderHtmlError = (msj) =>{
    renderError.textContent=msj;
}


/*Campo vacio*/

const emptiCamp=(input)=>{
    return input.value === ""
}



/*Validar entrada*/


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


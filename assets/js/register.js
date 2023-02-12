const ulAvatar = document.querySelector(".avatars-check");
const avatarsImg = [... document.querySelectorAll(".avatar-img")];
const registerForm = document.querySelector(".register-form");
const registerError = document.querySelector(".register-error");
const avatarCheck = [... document.querySelectorAll(".avatars-check input")];
const inputRegisterName = document.getElementById("name");
const inputRegisterUserName = document.getElementById("user-name");
const inputRegisterEmail = document.getElementById("email");
const inputRegisterPassword = document.getElementById("password");
const inputRegisterPasswordAgain = document.getElementById("password-again");

/*User*/

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


/*New User Register*/

let newUser= JSON.parse(localStorage.getItem("newUser"))||[];

const saveLocalStorageNewUser =(newUser)=>{
    localStorage.setItem("newUser",JSON.stringify(newUser));
}


/*renderizar error*/
const renderRegisterlError = (msj) =>{
    registerError.textContent=msj;
}

/*Select avatar*/
const selectAvatarButton=(e)=>{
    if(e.target.classList.contains("button-avatar")){
        e.preventDefault()
        ulAvatar.style.display="flex";
        return
    }if((e.target.classList.contains("avatar-img"))&&(!e.target.classList.contains("selected"))){
        const avatarSelecPrev= avatarsImg.find((avatar)=>avatar.classList.contains("selected"))
        if(avatarSelecPrev != undefined){
            avatarSelecPrev.classList.remove("selected")
        }
        e.target.classList.add("selected")
        return
    }
}

/*Return Avatar Img*/

const inputAvatar = avatar =>{
    switch(avatar){
    case "bart":
        return "./assets/img/avatars/bart.png";
    case "abraham":
        return "./assets/img/avatars/abraham.png";
    case "cosme":
        return "./assets/img/avatars/cosme.png";
    case "edna":
        return "./assets/img/avatars/Edna.png";
    case "homero":
        return "./assets/img/avatars/homero.png";
    case "lisa":
        return "./assets/img/avatars/lisa.png";
    case "marge":
        return "./assets/img/avatars/marge.png";
    case "milhouse":
        return "./assets/img/avatars/milhouse.png";
    case "monti":
        return "./assets/img/avatars/monty.png";
    }
}
const avatarchecked =() =>{
    const avatarInputCheck = avatarCheck.find((avatar)=>avatar.checked);
    if(!avatarInputCheck){
        renderRegisterlError("se debe seleccionar un avatar!");
        return
    }else{
        renderRegisterlError("");
        return inputAvatar(avatarInputCheck.id);
    }
}


/*numero de id*/

const numberId =()=>{
    let id = Number(newUser.length + 1)
    return id
}


/*input validation*/

const emailRequest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
//const passwordRequest = /^(?=.*[a-z])(?=.*[0-9]){9}$/;
const passwordRequest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

const isEmpty = (value) => value === "";

const isBetween = (length, min, max) => length > min && length < max;

const emailValid = (email) => emailRequest.test(email);

const passwordValid = (password) => passwordRequest.test(password);

const checkName=()=>{
    let name = inputRegisterName.value.trim();
    if(isEmpty(name)){
        renderRegisterlError("Ingrese un Nombre!");
        return
    }if(!isBetween(name.length, 3 , 20)){
        renderRegisterlError("El nombre debe tener entre 3 y 20 caracteres!");
        return
    }else{
        renderRegisterlError("");
        return name   
    } 
}

const checkUserName=()=>{
    let userName=inputRegisterUserName.value.trim();
    chekExistUser = newUser.find((user)=>user.username === userName.toLowerCase());

    if(isEmpty(userName)){
        renderRegisterlError("ingrese un Usuario!");
        return
    }if(chekExistUser){
        renderRegisterlError("El nombre de usario ya existe!");
        return
    }if(!isBetween(userName.length, 3 , 20)){
        renderRegisterlError("El nombre de usuario debe tener entre 3 y 20 caracteres!");
    }else{
        renderRegisterlError("");
        return userName.toLowerCase()
    }
}

const checkEmail =()=>{
    let email = inputRegisterEmail.value.trim();
    if(isEmpty(email)){
        renderRegisterlError("ingrese un Email!");
        return
    }if(!emailValid(email)){
        renderRegisterlError("El Email es invalido!");
    }else{
        renderRegisterlError("");
        return email
    }
}
const checkPassword =()=>{
    let password = inputRegisterPassword.value.trim();
    if(isEmpty(password)){
        renderRegisterlError("ingrese una Contraseña!");
        return
    }if(!passwordValid(password)){
        renderRegisterlError("La contraseña debe ser alfanumerica,contener al menos un simbolo y una Mayuscula!");
    }else{
        renderRegisterlError("");
        return password
    }
}

const checkPasswordAgain = () =>{
    let password = inputRegisterPasswordAgain.value.trim();
    if(isEmpty(password)){
        renderRegisterlError("ingrese una Contraseña!");
        return
    }if(inputRegisterPassword.value.trim()!== inputRegisterPasswordAgain.value.trim()){
        renderRegisterlError("Las contraseñas no coinciden!");
    }else{
        renderRegisterlError("");
        return password
    }
}


/*register*/
const register=(e)=>{
    e.preventDefault()
    if(!checkName()){
        return
    }if(!checkUserName()){
        return
    }if(!checkEmail()){
        return
    }if(!checkPassword()){
        return
    }if(!avatarchecked()){
        return
    }if(!checkPasswordAgain()){
        return
    }else{
        newUser=[...newUser, new Person(numberId(),checkName(),checkUserName(),checkEmail(),checkPassword(),avatarchecked())];
        saveLocalStorageNewUser(newUser);
        registerForm.reset();
        alert("El usuario fue creado correctamente")
        window.location.href= "././login.html";
    }
    
}

const initRegister=()=>{
    window.addEventListener("click",selectAvatarButton);
    registerForm.addEventListener("submit",register)
}

initRegister();
const navMenu = document.querySelector("header nav");
const backgroundFilter = document.querySelector(".background");
const shop = document.querySelector(".shop");
const productCardDescription = document.querySelector (".product_card_description");
const loginHtml = document.querySelector(".login-container");

let user=JSON.parse(localStorage.getItem("user"))|| [];

const saveLocalStorage =(user)=>{
    localStorage.setItem("user",JSON.stringify(user));
}

/*open and close Nav menu*/
const menuToggle = (e) => {
    if (e.target.classList.contains("open-menu")) {
        navMenu.classList.add("flex-on");
        backgroundFilter.classList.add("flex-on");
        shop.classList.remove("flex-on");        
    }if (e.target.classList.contains("nav-icon")){
        navMenu.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("background")){
        navMenu.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }
};
/*open and close Shop*/
const openShop = (e)=>{
    if(e.target.classList.contains("shop-icon")){
        shop.classList.add("flex-on");
        backgroundFilter.classList.add("flex-on");
        navMenu.classList.remove("flex-on"); 
    }if (e.target.classList.contains("button-buy")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("background")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }
}
/*open and close product card description*/
const openMoreProduct=(e)=>{
    if(e.target.classList.contains("product_card_more")){
        productCardDescription.classList.add("flex-on");
    }if(e.target.classList.contains("product_card_description_close")){
        productCardDescription.classList.remove("flex-on");
    }
}

/*Login on Login off*/

const renderLogin=user=>{
    if(user.name){
    loginHtml.innerHTML=`<img class="avatar-img" src="${user.avatar}" alt="avatar">
    <p class="avatar-name">${user.name}</p>`
    }else if(!user.name){
        loginHtml.innerHTML=`<a href="./login.html"><i class="bi bi-person-circle login-icon"></i></a>`
    }
}

const closeSession=e=>{
    if(e.target.classList.contains("avatar-img")){
        alert("¿Desea cerrar sesion?");
        user=[];
        saveLocalStorage(user);
        renderLogin(user)
    }
}


const init=()=>{
    window.addEventListener("click",menuToggle);
    window.addEventListener("click",openShop);
    window.addEventListener("click",openMoreProduct);
    window.addEventListener("click",closeSession);
    renderLogin(user)
}
init();
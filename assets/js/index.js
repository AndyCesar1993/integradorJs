const navMenu = document.querySelector("header nav");
const backgroundFilter = document.querySelector(".background");
const shop = document.querySelector(".shop");
const shopCount = document.querySelector(".cart-numb");
const totalPrice = document.querySelector(".total-price");
const shopBuy = document.querySelector(".shop-buy");
const loginHtml = document.querySelector(".login-container");
const productContainer=document.querySelector(".poduct_container");
const shopContainer=document.querySelector(".shop-container");
const productSearchForm=document.querySelector(".search-products");
const productSearchName=document.getElementById("search-products_name");
const productSearchType=document.getElementById("search-products_tipo");
const productSearchWheels=document.getElementById("search-products_rodado");
const productSearchFrame=document.getElementById("search-products_cuadro");
const errorProduct=document.querySelector(".error-product");



/*User Login*/

let user= JSON.parse(localStorage.getItem("user"))||[];
const saveLocalStorage =(user)=>{
    localStorage.setItem("user",JSON.stringify(user));
}

/*open and close Nav menu*/
const menuToggle = (e) => {
    if (e.target.classList.contains("open-menu") && !navMenu.classList.contains("flex-on")) {
        navMenu.classList.add("flex-on");
        backgroundFilter.classList.add("flex-on");
        shop.classList.remove("flex-on");      
        return  
    }if (e.target.classList.contains("open-menu") && navMenu.classList.contains("flex-on")){
        navMenu.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("nav-icon")){
        navMenu.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("background")&& navMenu.classList.contains("flex-on")){
        navMenu.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }
};

/*open and close Shop*/


const openShop = (e)=>{
    if(e.target.classList.contains("shop-icon") && !shop.classList.contains("flex-on")){
        shop.classList.add("flex-on");
        backgroundFilter.classList.add("flex-on");
        navMenu.classList.remove("flex-on");
        return
    }if (e.target.classList.contains("shop-icon") && shop.classList.contains("flex-on")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("button-buy")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("background")&&shop.classList.contains("flex-on")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }
}


/*Login on Login off*/

const renderLogin=user=>{
    if(user.name){
    loginHtml.innerHTML=`<img class="avatar-img" src="${user.avatar}" alt="avatar">
    <p class="avatar-name">${user.name}</p>`
    }else if(!user.name){
        loginHtml.innerHTML=`<i class="bi bi-person-circle login-icon"></i>`
    }
}

const redirecLogin= e =>{
    if(e.target.classList.contains("login-icon")){
        window.location.href= "./login.html";
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

/*Format number decimal*/

const formatNumb = (numb)=>{

    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}


const init=()=>{
    renderLogin(user)
    renderToHtml(bikers);
    window.addEventListener("click",allProducts)
    window.addEventListener("click",redirecLogin);
    window.addEventListener("click",menuToggle);
    window.addEventListener("click",openShop);
    window.addEventListener("click",closeSession);
    productSearchForm.addEventListener("submit",searchProducts);
    window.addEventListener("click",openMoreProduct);
    window.addEventListener("click",productsVerMas);
    window.addEventListener("click",addToShop);
    window.addEventListener("click",countProduct);
    window.addEventListener("click",removeToShop);
    window.addEventListener("click",zoomImgCard);
}

init()

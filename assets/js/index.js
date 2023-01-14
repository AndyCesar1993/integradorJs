const navMenu = document.querySelector("header nav");
const backgroundFilter = document.querySelector(".background");
const shop = document.querySelector(".shop");

/*open and close Nav menu*/
const menuToggle = (e) => {
    if (e.target.classList.contains("open-menu")) {
        navMenu.classList.add("flex-on");
        backgroundFilter.classList.add("flex-on");        
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
    }if (e.target.classList.contains("button-buy")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }if (e.target.classList.contains("background")){
        shop.classList.remove("flex-on");
        backgroundFilter.classList.remove("flex-on");
    }
}



const init=()=>{
    window.addEventListener("click",menuToggle);
    window.addEventListener("click",openShop);
}
init();
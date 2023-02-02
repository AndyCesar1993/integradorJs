const buttonVerMas = document.querySelector(".products-vermas");

/*Productos*/

/*open and close product card description*/
const openMoreProduct=(e)=>{
  let parentElement="";
  let productCardDescription = "";
  if(e.target.classList.contains("product_card_more")){
    parentElement=e.target.parentNode.parentNode;
    productCardDescription = parentElement.querySelector(".product_card_description");
    productCardDescription.classList.add("flex-on");
    return
  }if(e.target.classList.contains("product_card_description_close")){
    productCardDescription = e.target.parentNode.parentNode.querySelector(".product_card_description");
    productCardDescription.classList.remove("flex-on");
  }
}

class productBikers{
    constructor(id,name,img,type,wheels,brand,frame,size,brake,vel,color,des,price,amount){
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.wheels = wheels;
    this.brand = brand;
    this.frame = frame;
    this.size = size;
    this.brake = brake;
    this.vel = vel;
    this.color = color;
    this.des = des;
    this.price = price;
    this.amount = price;
    }

}

const bikers =[
    new productBikers(1,"Raleigh 700C Classic Nexus","./assets/img/productos/raleight 700c.png","Urbana",28,"raleigh","Aluminio","S","V-brake",3,"Negro",
    "Bicicleta de paseo estilo vintage, liviana de aluminio con componentes modernos, al tener ruedas finas se convierte en una bicicleta ideal para paseos urbanos.",150000),
    
    new productBikers(16,"Trek Urbana Verve R700","./assets/img/productos/Trek Urbana Verve R700.jpg","Urbana",27.5,"Trek","Aluminio","S","Disco 160mm Mecanico",21,"Blanco",
    "Bicicleta de paseo, liviana de aluminio con componentes shimano, es una bicicleta ideal para paseos urbanos, uso diario y entrenamiento deportivo.",335000),
    
    new productBikers(17,"Olmo Primavera 265","./assets/img/productos/Olmo Primavera 265.jpg","Urbana",26,"Olmo","Acero","S","V-brake","No","Azul",
    "Bicicleta de paseo vintage, al tener cuadro de aluminio y ruedas fina se convierte en una bicicleta muy comoda y liviana para paseos urbanos y uso diario.",99000),
    
    new productBikers(18,"Aurora Mondo","./assets/img/productos/Aurora Mondo.jpg","Urbana",28,"Aurora","Aluminio","M","V-brake",6,"Negro",
    "Bicicleta de paseo, es una bicicleta muy comoda para paseos urbanos y uso diario, con una estetica muy atractiva.",85000),
    
    new productBikers(2,"Fire Bird Speed 2X9","./assets/img/productos/FIRE BIRD SPEED 2X9.jpeg","ruta",28,"fire bird","Aluminio","S","Herradura C-star",18,"Negro y Naranja",
    "Bicicleta de ruta moderna, muy liviana con cuadro de aluminio, perfecta para iniciar en el mundo de la competición.",160000),
    
    new productBikers(3,"Raleigh Strada 1.0","./assets/img/productos/RALEIGH STRADA 1.0.jpg","ruta",28,"raleigh","Aluminio","S","Herradura C-star",16,"Rojo",
    "Bicicleta de ruta moderna, muy liviana con cuadro de aluminio, perfecta para el mundo de la competición..",320000),
    
    new productBikers(4,"Poligon Stratos S7","./assets/img/productos/POLYGON STRATTOS S7.jpg","ruta",28,"poligon","Carbono","M","Disco 180mm Hidraulico",22,"Rojo y Negro",
    "Bicicleta de ruta moderna, extra liviana con cuadro de carbono, perfecta para competir de manera profesional",1150000),
    
    new productBikers(5,"Fire Bird HE- 2021 Dama","./assets/img/productos/FIRE BIRD HE- 2021 DAMA.jpeg","MTB",26,"fire bird","Aluminio","S","V-Brake",21,"Negro y Rosa",
    "Bicicleta MTB de dama, posee cuadro de aluminio, lo que la hace ideal para uso diario y deportivo.",90000),
    
    
    new productBikers(6,"Zenith Atacama","./assets/img/productos/ZENITH ATACAMA.jpg","MTB",26,"zenith","Aluminio","L","Disco 160mm Mecanico",8,"Negro y Rojo",
    "Bicicleta MTB rodado 26, es muy liviana al tener cuadro de aluminio, posee componentes Shimano lo que la convierte en una bicicleta ideal tanto para uso deportivo urbano como para uso rural o de montaña.",130000),
    
    new productBikers(7,"Battle 27,5","./assets/img/productos/Battle 27,5.jpg","MTB",27.5,"Battle","Aluminio","L","Disco 160mm Mecanico",24,"Azul",
    "Bicicleta MTB rodado 27,5 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",119000),
    
    new productBikers(8,"Fire Bird Vanguard","./assets/img/productos/Fire Bird Vanguard.jpg","MTB",27.5,"Fire Bird","Aluminio","S","Disco 160mm Mecanico",21,"Rojo",
    "Bicicleta MTB rodado 27,5 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",130000),
    
    new productBikers(9,"Raleigh Mojave 2.0","./assets/img/productos/Raleigh Mojave 2.0.jpg","MTB",27.5,"Raleigh","Aluminio","S","Disco 160mm Mecanico",21,"Negro y Rosa",
    "Bicicleta MTB rodado 27,5 de dama , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",133000),
    
    new productBikers(10,"KTM Myroon SE3","./assets/img/productos/KTM MYROON SE3.jpg","MTB",29,"Ktm","Carbono","M","Disco 180mm Hidraulico",21,"Naranja",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad y competencias deportivas.",133000),
    
    new productBikers(11,"Raleigh Mojave 7.0","./assets/img/productos/Raleigh Mojave 7.0.jpg","MTB",29,"Raleigh","Aluminio","M","Disco 180mm Hidraulico",12,"Rojo",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad y competencias deportivas.",405000),
    
    new productBikers(12,"Vairo XR 4.0","./assets/img/productos/Vairo XR 4.0.jpg","MTB",29,"Vairo","Aluminio","L","Disco 180mm",21,"Gris",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",130000),
    
    new productBikers(13,"Raleigh Mojave 2.0 R29","./assets/img/productos/Raleigh Mojave 2.0 R29.jpg","MTB",29,"Raleigh","Aluminio","M","Disco 180mm Mecanico",21,"Negro y Rojo",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",140000),
    
    new productBikers(14,"Venzo Frida Diva","./assets/img/productos/Venzo Frida Diva.jpg","MTB",29,"venzo","Aluminio","M","Disco 180mm Hidraulico",24,"Negro y Rosa",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",160000),
    
    new productBikers(15,"Raleigh Mojave 4.0","./assets/img/productos/Raleigh Mojave 4.0.jpg","MTB",29,"Raleigh","Aluminio","S","Disco 180mm Hidraulico",24,"Negro y Rojo",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad y competencias deportivas.",230000),
    
    new productBikers(19,"Shifter Doble Suspensiónn","./assets/img/productos/Shifter Doble Suspensiónn.jpg","MTB",26,"Shifter","Acero","M","Disco 160mm Mecanico",21,"Negro y Rojo",
    "Bicicleta de descenso, al tener doble suspencion y freno a disco, es ideal para comenzar en el mundo del montañismo.",60000),
]




/* Render Products*/


const renderProductCard = ({id,img,name,wheels,frame,size,brake,vel,color,des,price}) =>{
    return `<div class="product_card">
    <div class="product_card_info">
        <img src="${img}" alt="img producto">
        <h2 class="product_card_name">${name}</h2>
        <input class="btn btn-outline-secondary product_card_more" type="button" value="Más">
        <h2 class="product_card_price">$${price}</h2>
        <button class="btn btn-outline-dark add-to-cart" data-id="${id}">Agregar al carrito</button>
    </div>

    <div class="product_card_description">
        <div class="product_card_description_close align-self-end"><button type="button" class="btn-close" disabled aria-label="Close"></button></div>
        <h3>Rodado:<span>${wheels}</span></h3>
        <h3>Cuadro:<span>${frame}</span></h3>
        <h3>Talle:<span>${size}</span></h3>
        <h3>Frenos:<span>${brake}</span></h3>
        <h3>Velocidades:<span>${vel}</span></h3>
        <h3>Color:<span>${color}</span></h3>
        <h3>Descripcion:</h3>
        <p>${des}</p>
    </div>
</div>`
}

/*Render error Product*/

const renderErrorProduct = (msj) =>{
    errorProduct.textContent=msj;
}

/*Render in HTML*/



    let rendersCards = [];
    let maxLengthRender = 5;

const renderCardsHtml =(arrays)=>{
  if(arrays.length<=maxLengthRender){
    buttonVerMas.style.display="none"
  }else buttonVerMas.style.display="flex"
  productContainer.innerHTML = arrays.slice(0,maxLengthRender).map((card)=>renderProductCard(card)).join("");
}

const renderToHtml= (cards) =>{
  rendersCards = cards
  maxLengthRender = 5;
  renderCardsHtml(cards)
}

const productsVerMas = (e)=>{
  if(e.target.classList.contains("products-vermas")){
    if(rendersCards.length > maxLengthRender && rendersCards.length >= maxLengthRender + 5){
      maxLengthRender = maxLengthRender + 5;
      renderCardsHtml(rendersCards)
      return
    }if(rendersCards.length < maxLengthRender + 5){
      maxLengthRender = rendersCards.length;
      renderCardsHtml(rendersCards)
      return
    }
  }
}


/*Search Products*/


const searchProducts = (e) => {
  e.preventDefault();
  let searchName = productSearchName.value.toLowerCase();
  const productForName = (products, name) => {
    let product = products.toLowerCase();
    return product.includes(name);
  };


  let productFilterName=bikers.filter((product) =>productForName(product.name, searchName));
  let productFilterUrban=bikers.filter((product) => product.type === "Urbana");
  let productFilterMtb= bikers.filter((product) => product.type === "MTB");
  let productFilterRuta=bikers.filter((product) => product.type === "ruta");
  let productFilter29=bikers.filter((product) => product.wheels === 29);
  let productFilter28=bikers.filter((product) => product.wheels === 28);
  let productFilter275=bikers.filter((product) => product.wheels === 27.5);
  let productFilter26=bikers.filter((product) => product.wheels === 26);

  /*Search Filter Name*/

  const filterName = () => {
    if (searchName !== "" && productSearchType.value === "tipo" && productSearchFrame.value === "cuadro" && productSearchWheels.value === "rodado") {
      if(productFilterName.length === 0){
        renderErrorProduct("No se encontro el producto!");
        productContainer.innerHTML = "";
        return;
      }else{
        renderErrorProduct("");
        renderToHtml(productFilterName);
        productSearchForm.reset();
      }
    }else return
  }
  filterName();



  /*Search Filter Type*/


  let productFilterNameUrban=productFilterName.filter((product) => product.type === "Urbana");
  let productFilterNameMtb= productFilterName.filter((product) => product.type === "MTB");
  let productFilterNameRuta=productFilterName.filter((product) => product.type === "ruta");


  const filterType = () => {
    if (searchName === "" && productSearchWheels.value === "rodado" && productSearchFrame.value === "cuadro"){
      if(productSearchType.value === "urbana"){
        renderErrorProduct("");
        renderToHtml(productFilterUrban);
        productSearchForm.reset();
        return
      }if(productSearchType.value === "mtb"){
        renderErrorProduct("");
        renderToHtml(productFilterMtb);
        productSearchForm.reset();
        return
      }if(productSearchType.value === "ruta"){
        renderErrorProduct("");
        renderToHtml(productFilterRuta);
        productSearchForm.reset();
        return
      }
    }if (searchName != "" && productSearchWheels.value === "rodado" && productSearchFrame.value === "cuadro"){
      if(productSearchType.value === "urbana"){
        if (productFilterNameUrban.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterNameUrban);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchType.value === "mtb"){
        if (productFilterNameMtb.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterNameMtb);
          productSearchForm.reset();
          return
        }
      }if(productSearchType.value === "ruta"){
        if (productFilterNameRuta.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterNameRuta);
          productSearchForm.reset();
          return
        }
      }
    }

  }

  filterType();

  /*Search filter Wheels*/

  
let productFilterName29=productFilterName.filter((product) => product.wheels === 29);
let productFilterName28=productFilterName.filter((product) => product.wheels === 28);
let productFilterName275=productFilterName.filter((product) => product.wheels === 27.5);
let productFilterName26=productFilterName.filter((product) => product.wheels === 26);

let productFilterUrbana29 = productFilterUrban.filter((product)=> product.wheels === 29);
let productFilterUrbana28 = productFilterUrban.filter((product)=> product.wheels === 28);
let productFilterUrbana275 = productFilterUrban.filter((product)=> product.wheels === 27.5);
let productFilterUrbana26 = productFilterUrban.filter((product)=> product.wheels === 26);

let productFilterMtb29 = productFilterMtb.filter((product)=> product.wheels === 29);
let productFilterMtb28 = productFilterMtb.filter((product)=> product.wheels === 28);
let productFilterMtb275 = productFilterMtb.filter((product)=> product.wheels === 27.5);
let productFilterMtb26 = productFilterMtb.filter((product)=> product.wheels === 26);

let productFilterRuta29 = productFilterRuta.filter((product)=> product.wheels === 29);
let productFilterRuta28 = productFilterRuta.filter((product)=> product.wheels === 28);
let productFilterRuta275 = productFilterRuta.filter((product)=> product.wheels === 27.5);
let productFilterRuta26 = productFilterRuta.filter((product)=> product.wheels === 26);

let productFilterNameUrbana29 = productFilterNameUrban.filter((product)=>product.wheels === 29); 
let productFilterNameUrbana28 = productFilterNameUrban.filter((product)=>product.wheels === 28); 
let productFilterNameUrbana275 = productFilterNameUrban.filter((product)=>product.wheels === 275); 
let productFilterNameUrbana26 = productFilterNameUrban.filter((product)=>product.wheels === 26); 

let productFilterNameMtb29 = productFilterNameMtb.filter((product)=>product.wheels === 29); 
let productFilterNameMtb28 = productFilterNameMtb.filter((product)=>product.wheels === 28); 
let productFilterNameMtb275 = productFilterNameMtb.filter((product)=>product.wheels === 275); 
let productFilterNameMtb26 = productFilterNameMtb.filter((product)=>product.wheels === 26); 

let productFilterNameRuta29 = productFilterNameRuta.filter((product)=>product.wheels === 29); 
let productFilterNameRuta28 = productFilterNameRuta.filter((product)=>product.wheels === 28); 
let productFilterNameRuta275 = productFilterNameRuta.filter((product)=>product.wheels === 275); 
let productFilterNameRuta26 = productFilterNameRuta.filter((product)=>product.wheels === 26); 

  const filterWheels = () => {
    if (searchName === "" && productSearchType.value === "tipo" && productSearchFrame.value === "cuadro"){
      if(productSearchWheels.value === "29"){
        renderErrorProduct("");
        renderToHtml(productFilter29);
        productSearchForm.reset();
        return
      }if(productSearchWheels.value === "28"){
        renderErrorProduct("");
        renderToHtml(productFilter28);
        productSearchForm.reset();
        return
      }if(productSearchWheels.value === "27.5"){
        renderErrorProduct("");
        renderToHtml(productFilter275);
        productSearchForm.reset();
        return
      }if(productSearchWheels.value === "26"){
        renderErrorProduct("");
        renderToHtml(productFilter26);
        productSearchForm.reset();
        return
      }
    }if (searchName != "" && productSearchType.value === "tipo" && productSearchFrame.value === "cuadro"){
      if(productSearchWheels.value === "29"){
        if (productFilterName29.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterName29);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchWheels.value === "28"){
        if (productFilterName28.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterName28);
          productSearchForm.reset();
          return
        }
      }if(productSearchWheels.value === "27.5"){
        if (productFilterName275.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterName275);
          productSearchForm.reset();
          return
        }
      }if(productSearchWheels.value === "26"){
        if (productFilterName26.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterName26);
          productSearchForm.reset();
          return
        }
      }
    }if (searchName === "" && productSearchType.value != "tipo" && productSearchFrame.value === "cuadro"){
      if(productSearchType.value === "urbana"){
        if(productSearchWheels.value === "29"){
          if(productFilterUrbana29.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrbana29);
            productSearchForm.reset();
            return
          }
        }if(productSearchWheels.value === "28"){
          if(productFilterUrbana28.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrbana28);
            productSearchForm.reset();
            return
          }
        }if(productSearchWheels.value === "27.5"){
          if(productFilterUrbana275.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrbana275);
            productSearchForm.reset();
            return
          }
        }if(productSearchWheels.value === "26"){
          if(productFilterUrbana26.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrbana26);
            productSearchForm.reset();
            return
          }
        }
      
      }if(productSearchType.value === "mtb"){
        if(productSearchWheels.value === "29"){
          if(productFilterMtb29.length === 0 ){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
          renderErrorProduct("");
          renderToHtml(productFilterMtb29);
          productSearchForm.reset();
          return
          }
        }if(productSearchWheels.value === "28"){
            if(productFilterMtb28.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb28);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "27.5"){
            if(productFilterMtb275.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb275);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "26"){
            if(productFilterMtb26.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb26);
            productSearchForm.reset();
            return
            }
        }
      
      }if(productSearchType.value === "ruta"){
        if(productSearchWheels.value === "29"){
          if(productFilterRuta29.length === 0 ){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
          renderErrorProduct("");
          renderToHtml(productFilterRuta29);
          productSearchForm.reset();
          return
          }
        }if(productSearchWheels.value === "28"){
            if(productFilterRuta28.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta28);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "27.5"){
            if(productFilterRuta275.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta275);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "26"){
            if(productFilterRuta26.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta26);
            productSearchForm.reset();
            return
            }
        }
      }
    }if (searchName != "" && productSearchType.value != "tipo" && productSearchFrame.value === "cuadro"){
      if(productSearchType.value === "urbana"){
        if(productSearchWheels.value === "29"){
          if(productFilterNameUrbana29.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrbana29);
            productSearchForm.reset();
            return
          }
        }if(productSearchWheels.value === "28"){
          if(productFilterNameUrbana28.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrbana28);
            productSearchForm.reset();
            return
          }
        }if(productSearchWheels.value === "27.5"){
          if(productFilterNameUrbana275.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrbana275);
            productSearchForm.reset();
            return
          }
        }if(productSearchWheels.value === "26"){
          if(productFilterNameUrbana26.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrbana26);
            productSearchForm.reset();
            return
          }
        }
      
      }if(productSearchType.value === "mtb"){
        if(productSearchWheels.value === "29"){
          if(productFilterNameMtb29.length === 0 ){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
          renderErrorProduct("");
          renderToHtml(productFilterNameMtb29);
          productSearchForm.reset();
          return
          }
        }if(productSearchWheels.value === "28"){
            if(productFilterNameMtb28.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb28);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "27.5"){
            if(productFilterNameMtb275.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb275);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "26"){
            if(productFilterNameMtb26.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb26);
            productSearchForm.reset();
            return
            }
        }
      
      }if(productSearchType.value === "ruta"){
        if(productSearchWheels.value === "29"){
          if(productFilterNameRuta29.length === 0 ){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
          renderErrorProduct("");
          renderToHtml(productFilterNameRuta29);
          productSearchForm.reset();
          return
          }
        }if(productSearchWheels.value === "28"){
            if(productFilterNameRuta28.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta28);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "27.5"){
            if(productFilterNameRuta275.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta275);
            productSearchForm.reset();
            return
            }
        }if(productSearchWheels.value === "26"){
            if(productFilterNameRuta26.length === 0){
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
            }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta26);
            productSearchForm.reset();
            return
            }
        }
      }
    }
  }

  filterWheels()


  /*Filter Frame*/
  
let productFilterAluminio = bikers.filter((product)=>product.frame === "Aluminio");
let productFilterAcero = bikers.filter((product)=>product.frame === "Acero");
let productFilterCarbono = bikers.filter((product)=>product.frame === "Carbono");

let productFilterNameAluminio=productFilterName.filter((product) => product.frame === "Aluminio");
let productFilterNameAcero=productFilterName.filter((product) => product.frame === "Acero");
let productFilterNameCarbono=productFilterName.filter((product) => product.frame === "Carbono");

let productFilterUrbanaAluminio = productFilterUrban.filter((product)=> product.frame === "Aluminio");
let productFilterUrbanaAcero = productFilterUrban.filter((product)=> product.frame === "Acero");
let productFilterUrbanaCarbono = productFilterUrban.filter((product)=> product.frame === "Carbono");

let productFilterMtbAluminio = productFilterMtb.filter((product)=> product.frame === "Aluminio");
let productFilterMtbAcero = productFilterMtb.filter((product)=> product.frame === "Acero");
let productFilterMtbCarbono = productFilterMtb.filter((product)=> product.frame === "Carbono");

let productFilterRutaAluminio = productFilterRuta.filter((product)=> product.frame === "Aluminio");
let productFilterRutaAcero = productFilterRuta.filter((product)=> product.frame === "Acero");
let productFilterRutaCarbono = productFilterRuta.filter((product)=> product.frame === "Carbono");

let productFilter29Aluminio = productFilter29.filter((product)=> product.frame === "Aluminio");
let productFilter29Acero = productFilter29.filter((product)=> product.frame === "Acero");
let productFilter29Carbono = productFilter29.filter((product)=> product.frame === "Carbono");

let productFilter28Aluminio = productFilter28.filter((product)=> product.frame === "Aluminio");
let productFilter28Acero = productFilter28.filter((product)=> product.frame === "Acero");
let productFilter28Carbono = productFilter28.filter((product)=> product.frame === "Carbono");

let productFilter275Aluminio = productFilter275.filter((product)=> product.frame === "Aluminio");
let productFilter275Acero = productFilter275.filter((product)=> product.frame === "Acero");
let productFilter275Carbono = productFilter275.filter((product)=> product.frame === "Carbono");

let productFilter26Aluminio = productFilter26.filter((product)=> product.frame === "Aluminio");
let productFilter26Acero = productFilter26.filter((product)=> product.frame === "Acero");
let productFilter26Carbono = productFilter26.filter((product)=> product.frame === "Carbono");

let productFilterUrban29Aluminio = productFilterUrbana29.filter((product)=> product.frame === "Aluminio");
let productFilterUrban29Acero = productFilterUrbana29.filter((product)=> product.frame === "Acero");
let productFilterUrban29Carbono = productFilterUrbana29.filter((product)=> product.frame === "Carbono");

let productFilterUrban28Aluminio = productFilterUrbana28.filter((product)=> product.frame === "Aluminio");
let productFilterUrban28Acero = productFilterUrbana28.filter((product)=> product.frame === "Acero");
let productFilterUrban28Carbono = productFilterUrbana28.filter((product)=> product.frame === "Carbono");

let productFilterUrban275Aluminio = productFilterUrbana275.filter((product)=> product.frame === "Aluminio");
let productFilterUrban275Acero = productFilterUrbana275.filter((product)=> product.frame === "Acero");
let productFilterUrban275Carbono = productFilterUrbana275.filter((product)=> product.frame === "Carbono");

let productFilterUrban26Aluminio = productFilterUrbana26.filter((product)=> product.frame === "Aluminio");
let productFilterUrban26Acero = productFilterUrbana26.filter((product)=> product.frame === "Acero");
let productFilterUrban26Carbono = productFilterUrbana26.filter((product)=> product.frame === "Carbono");

let productFilterMtb29Aluminio = productFilterMtb29.filter((product)=> product.frame === "Aluminio");
let productFilterMtb29Acero = productFilterMtb29.filter((product)=> product.frame === "Acero");
let productFilterMtb29Carbono = productFilterMtb29.filter((product)=> product.frame === "Carbono");

let productFilterMtb28Aluminio = productFilterMtb28.filter((product)=> product.frame === "Aluminio");
let productFilterMtb28Acero = productFilterMtb28.filter((product)=> product.frame === "Acero");
let productFilterMtb28Carbono = productFilterMtb28.filter((product)=> product.frame === "Carbono");

let productFilterMtb275Aluminio = productFilterMtb275.filter((product)=> product.frame === "Aluminio");
let productFilterMtb275Acero = productFilterMtb275.filter((product)=> product.frame === "Acero");
let productFilterMtb275Carbono = productFilterMtb275.filter((product)=> product.frame === "Carbono");

let productFilterMtb26Aluminio = productFilterMtb26.filter((product)=> product.frame === "Aluminio");
let productFilterMtb26Acero = productFilterMtb26.filter((product)=> product.frame === "Acero");
let productFilterMtb26Carbono = productFilterMtb26.filter((product)=> product.frame === "Carbono");

let productFilterRuta29Aluminio = productFilterRuta29.filter((product)=> product.frame === "Aluminio");
let productFilterRuta29Acero = productFilterRuta29.filter((product)=> product.frame === "Acero");
let productFilterRuta29Carbono = productFilterRuta29.filter((product)=> product.frame === "Carbono");

let productFilterRuta28Aluminio = productFilterRuta28.filter((product)=> product.frame === "Aluminio");
let productFilterRuta28Acero = productFilterRuta28.filter((product)=> product.frame === "Acero");
let productFilterRuta28Carbono = productFilterRuta28.filter((product)=> product.frame === "Carbono");

let productFilterRuta275Aluminio = productFilterRuta275.filter((product)=> product.frame === "Aluminio");
let productFilterRuta275Acero = productFilterRuta275.filter((product)=> product.frame === "Acero");
let productFilterRuta275Carbono = productFilterRuta275.filter((product)=> product.frame === "Carbono");

let productFilterRuta26Aluminio = productFilterRuta26.filter((product)=> product.frame === "Aluminio");
let productFilterRuta26Acero = productFilterRuta26.filter((product)=> product.frame === "Acero");
let productFilterRuta26Carbono = productFilterRuta26.filter((product)=> product.frame === "Carbono");

let productFilteNameUrbanAluminio = productFilterNameUrban.filter((product)=> product.frame === "Aluminio");
let productFilteNameUrbanAcero = productFilterNameUrban.filter((product)=> product.frame === "Acero");
let productFilteNameUrbanCarbono = productFilterNameUrban.filter((product)=> product.frame === "Carbono");

let productFilteNameMtbAluminio = productFilterNameMtb.filter((product)=> product.frame === "Aluminio");
let productFilteNameMtbAcero = productFilterNameMtb.filter((product)=> product.frame === "Acero");
let productFilteNameMtbCarbono = productFilterNameMtb.filter((product)=> product.frame === "Carbono");

let productFilteNameRutaAluminio = productFilterNameRuta.filter((product)=> product.frame === "Aluminio");
let productFilteNameRutaAcero = productFilterNameRuta.filter((product)=> product.frame === "Acero");
let productFilteNameRutaCarbono = productFilterNameRuta.filter((product)=> product.frame === "Carbono");

let productFilterNameUrban29Aluminio = productFilterNameUrbana29.filter((product)=> product.frame === "Aluminio");
let productFilterNameUrban29Acero = productFilterNameUrbana29.filter((product)=> product.frame === "Acero");
let productFilterNameUrban29Carbono = productFilterNameUrbana29.filter((product)=> product.frame === "Carbono");

let productFilterNameUrban28Aluminio = productFilterNameUrbana28.filter((product)=> product.frame === "Aluminio");
let productFilterNameUrban28Acero = productFilterNameUrbana28.filter((product)=> product.frame === "Acero");
let productFilterNameUrban28Carbono = productFilterNameUrbana28.filter((product)=> product.frame === "Carbono");

let productFilterNameUrban275Aluminio = productFilterNameUrbana275.filter((product)=> product.frame === "Aluminio");
let productFilterNameUrban275Acero = productFilterNameUrbana275.filter((product)=> product.frame === "Acero");
let productFilterNameUrban275Carbono = productFilterNameUrbana275.filter((product)=> product.frame === "Carbono");

let productFilterNameUrban26Aluminio = productFilterNameUrbana26.filter((product)=> product.frame === "Aluminio");
let productFilterNameUrban26Acero = productFilterNameUrbana26.filter((product)=> product.frame === "Acero");
let productFilterNameUrban26Carbono = productFilterNameUrbana26.filter((product)=> product.frame === "Carbono");

let productFilterNameMtb29Aluminio = productFilterNameMtb29.filter((product)=> product.frame === "Aluminio");
let productFilterNameMtb29Acero = productFilterNameMtb29.filter((product)=> product.frame === "Acero");
let productFilterNameMtb29Carbono = productFilterNameMtb29.filter((product)=> product.frame === "Carbono");

let productFilterNameMtb28Aluminio = productFilterNameMtb28.filter((product)=> product.frame === "Aluminio");
let productFilterNameMtb28Acero = productFilterNameMtb28.filter((product)=> product.frame === "Acero");
let productFilterNameMtb28Carbono = productFilterNameMtb28.filter((product)=> product.frame === "Carbono");

let productFilterNameMtb275Aluminio = productFilterNameMtb275.filter((product)=> product.frame === "Aluminio");
let productFilterNameMtb275Acero = productFilterNameMtb275.filter((product)=> product.frame === "Acero");
let productFilterNameMtb275Carbono = productFilterNameMtb275.filter((product)=> product.frame === "Carbono");

let productFilterNameMtb26Aluminio = productFilterNameMtb26.filter((product)=> product.frame === "Aluminio");
let productFilterNameMtb26Acero = productFilterNameMtb26.filter((product)=> product.frame === "Acero");
let productFilterNameMtb26Carbono = productFilterNameMtb26.filter((product)=> product.frame === "Carbono");

let productFilterNameRuta29Aluminio = productFilterNameRuta29.filter((product)=> product.frame === "Aluminio");
let productFilterNameRuta29Acero = productFilterNameRuta29.filter((product)=> product.frame === "Acero");
let productFilterNameRuta29Carbono = productFilterNameRuta29.filter((product)=> product.frame === "Carbono");

let productFilterNameRuta28Aluminio = productFilterNameRuta28.filter((product)=> product.frame === "Aluminio");
let productFilterNameRuta28Acero = productFilterNameRuta28.filter((product)=> product.frame === "Acero");
let productFilterNameRuta28Carbono = productFilterNameRuta28.filter((product)=> product.frame === "Carbono");

let productFilterNameRuta275Aluminio = productFilterRuta275.filter((product)=> product.frame === "Aluminio");
let productFilterNameRuta275Acero = productFilterRuta275.filter((product)=> product.frame === "Acero");
let productFilterNameRuta275Carbono = productFilterRuta275.filter((product)=> product.frame === "Carbono");

let productFilterNameRuta26Aluminio = productFilterNameRuta26.filter((product)=> product.frame === "Aluminio");
let productFilterNameRuta26Acero = productFilterNameRuta26.filter((product)=> product.frame === "Acero");
let productFilterNameRuta26Carbono = productFilterNameRuta26.filter((product)=> product.frame === "Carbono");


const filterFrame = ()=>{
  if(searchName === "" && productSearchType.value === "tipo" && productSearchWheels.value === "rodado"){
    if(productSearchFrame.value === "aluminio"){
      renderErrorProduct("");
      renderToHtml(productFilterAluminio);
      productSearchForm.reset();
    }if(productSearchFrame.value === "acero"){
      renderErrorProduct("");
      renderToHtml(productFilterAcero);
      productSearchForm.reset();
    }if(productSearchFrame.value === "carbono"){
      renderErrorProduct("");
      renderToHtml(productFilterCarbono);
      productSearchForm.reset();
    }
  }if(searchName != "" && productSearchType.value === "tipo" && productSearchWheels.value === "rodado"){
    if(productSearchFrame.value === "aluminio"){
      if (productFilterNameAluminio.length === 0) {
        renderErrorProduct("No se encontro ningun producto!");
        productContainer.innerHTML = "";
        return;
      }else{
        renderErrorProduct("");
        renderToHtml(productFilterNameAluminio);
        productSearchForm.reset();
        return
      }
      
    }if(productSearchFrame.value === "acero"){
      if (productFilterNameAcero.length === 0) {
        renderErrorProduct("No se encontro ningun producto!");
        productContainer.innerHTML = "";
        return;
      }else{
        renderErrorProduct("");
        renderToHtml(productFilterNameAcero);
        productSearchForm.reset();
        return
      }
      
    }if(productSearchFrame.value === "carbono"){
      if (productFilterNameCarbono.length === 0) {
        renderErrorProduct("No se encontro ningun producto!");
        productContainer.innerHTML = "";
        return;
      }else{
        renderErrorProduct("");
        renderToHtml(productFilterNameCarbono);
        productSearchForm.reset();
        return
      }
      
    }
  }if(searchName === "" && productSearchType.value != "tipo" && productSearchWheels.value === "rodado"){
    if(productSearchType.value === "urbana"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilterUrbanaAluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterUrbanaAluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilterUrbanaAcero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterUrbanaAcero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilterUrbanaCarbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterUrbanaCarbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchType.value === "mtb"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilterMtbAluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterMtbAluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilterMtbAcero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterMtbAcero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilterMtbCarbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterMtbCarbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchType.value === "ruta"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilterRutaAluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterRutaAluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilterRutaAcero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterRutaAcero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilterRutaCarbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilterRutaCarbono);
          productSearchForm.reset();
          return
        }
        
      }
    }
  }if(searchName != "" && productSearchType.value != "tipo" && productSearchWheels.value === "rodado"){
    if(productSearchType.value === "urbana"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilteNameUrbanAluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameUrbanAluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilteNameUrbanAcero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameUrbanAcero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilteNameUrbanCarbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameUrbanCarbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchType.value === "mtb"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilteNameMtbAluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameMtbAluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilteNameMtbAcero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameMtbAcero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilteNameMtbCarbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameMtbCarbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchType.value === "ruta"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilteNameRutaAluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameRutaAluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilteNameRutaAcero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameRutaAcero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilteNameRutaCarbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilteNameRutaCarbono);
          productSearchForm.reset();
          return
        }
        
      }
    }
  }if(searchName === "" && productSearchType.value === "tipo" && productSearchWheels.value != "rodado"){
    if(productSearchWheels.value === "29"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilter29Aluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter29Aluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilter29Acero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter29Acero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilter29Carbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter29Carbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchWheels.value === "28"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilter28Aluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter28Aluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilter28Acero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter28Acero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilter28Carbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter28Carbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchWheels.value === "27.5"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilter275Aluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter275Aluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilter275Acero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter275Acero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilter275Carbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter275Carbono);
          productSearchForm.reset();
          return
        }
        
      }
    }if(productSearchWheels.value === "26"){
      if(productSearchFrame.value === "aluminio"){
        if (productFilter26Aluminio.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter26Aluminio);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "acero"){
        if (productFilter26Acero.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter26Acero);
          productSearchForm.reset();
          return
        }
        
      }if(productSearchFrame.value === "carbono"){
        if (productFilter26Carbono.length === 0) {
          renderErrorProduct("No se encontro ningun producto!");
          productContainer.innerHTML = "";
          return;
        }else{
          renderErrorProduct("");
          renderToHtml(productFilter26Carbono);
          productSearchForm.reset();
          return
        }
        
      }
    }
  }if(searchName === "" && productSearchType.value != "tipo" && productSearchWheels.value != "rodado"){
    if(productSearchType.value === "urbana"){
      if(productSearchWheels.value === "29"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterUrban29Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban29Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterUrban29Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban29Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterUrban29Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban29Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "28"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterUrban28Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban28Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterUrban28Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban28Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterUrban28Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban28Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "27.5"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterUrban275Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban275Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterUrban275Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban275Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterUrban275Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban275Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "26"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterUrban26Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban26Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterUrban26Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban26Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterUrban26Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterUrban26Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }
    } if(productSearchType.value === "mtb"){
      if(productSearchWheels.value === "29"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterMtb29Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb29Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterMtb29Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb29Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterMtb29Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb29Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "28"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterMtb28Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb28Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterMtb28Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb28Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterMtb28Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb28Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "27.5"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterMtb275Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb275Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterMtb275Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb275Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterMtb275Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb275Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "26"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterMtb26Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb26Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterMtb26Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb26Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterMtb26Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterMtb26Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }
    } if(productSearchType.value === "ruta"){
      if(productSearchWheels.value === "29"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterRuta29Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta29Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterRuta29Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta29Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterRuta29Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta29Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "28"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterRuta28Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta28Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterRuta28Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta28Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterRuta28Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta28Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "27.5"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterRuta275Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta275Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterRuta275Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta275Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterRuta275Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta275Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "26"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterRuta26Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta26Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterRuta26Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta26Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterRuta26Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterRuta26Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }
    }
  
  }if(searchName != "" && productSearchType.value != "tipo" && productSearchWheels.value != "rodado"){
    if(productSearchType.value === "urbana"){
      if(productSearchWheels.value === "29"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameUrban29Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban29Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameUrban29Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban29Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameUrban29Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban29Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "28"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameUrban28Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban28Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameUrban28Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban28Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameUrban28Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban28Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "27.5"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameUrban275Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban275Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameUrban275Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban275Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameUrban275Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban275Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "26"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameUrban26Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban26Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameUrban26Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban26Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameUrban26Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameUrban26Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }
    } if(productSearchType.value === "mtb"){
      if(productSearchWheels.value === "29"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameMtb29Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb29Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameMtb29Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb29Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameMtb29Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb29Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "28"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameMtb28Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb28Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameMtb28Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb28Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameMtb28Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb28Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "27.5"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameMtb275Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb275Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameMtb275Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb275Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameMtb275Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb275Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "26"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameMtb26Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb26Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameMtb26Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb26Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameMtb26Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameMtb26Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }
    } if(productSearchType.value === "ruta"){
      if(productSearchWheels.value === "29"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameRuta29Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta29Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameRuta29Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta29Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameRuta29Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta29Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "28"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameRuta28Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta28Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameRuta28Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta28Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameRuta28Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta28Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "27.5"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameRuta275Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta275Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameRuta275Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta275Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameRuta275Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta275Carbono);
            productSearchForm.reset();
            return
          }
          
        }
      }if(productSearchWheels.value === "26"){
        if(productSearchFrame.value === "aluminio"){
          if (productFilterNameRuta26Aluminio.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta26Aluminio);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "acero"){
          if (productFilterNameRuta26Acero.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta26Acero);
            productSearchForm.reset();
            return
          }
          
        }if(productSearchFrame.value === "carbono"){
          if (productFilterNameRuta26Carbono.length === 0) {
            renderErrorProduct("No se encontro ningun producto!");
            productContainer.innerHTML = "";
            return;
          }else{
            renderErrorProduct("");
            renderToHtml(productFilterNameRuta26Carbono);
            productSearchForm.reset();
            return
          }

        }
      }
    }
  
  }
}

filterFrame()

}


/*Render Products Shop*/

let cardsShop = [];
let priceTotal = 0;

const countProductPrice = (price,countProduct) =>{
  return price*countProduct;
}


const quantityTotalPrice = ()=>{
  shopBuy.classList.add("flex-on")
  const cardAmount=cardsShop.reduce((a,b)=>a + b.amount,0)
  totalPrice.innerHTML = cardAmount
}



const countProduct = e =>{
  let productQuantity="";
  let card="";
  if(e.target.classList.contains("product-subs")||e.target.classList.contains("product-add")){
    card=cardsShop.find((card)=>card.id===Number((e.target.parentNode.parentNode).querySelector(".shop-card-close").dataset.id));
    productQuantity = (e.target.parentNode).querySelector(".product-count");
    let productTotQuantity = productQuantity.textContent;
    if(e.target.classList.contains("product-add")){
      productTotQuantity = Number(productQuantity.textContent) + 1;
    }if(e.target.classList.contains("product-subs") && productTotQuantity > 1){
      productTotQuantity = Number(productQuantity.textContent) - 1;
    }
  card.amount = productTotQuantity * card.price;
  productQuantity.innerHTML=productTotQuantity; 
  quantityTotalPrice()
}
}

const rederShop = ({id,img,name,price,amount}) =>{
  return `<div class="shop-card">
  <button type="button"class="btn-close align-self-end shop-card-close" aria-label="Close" data-id="${id}"></button>
  <img src="${img}" alt="imagen producto">
  <h3 class="card-shop-name">${name}</h3>
  <div class="btn-group btn-group-sm shop-count shop-card-count" role="group" aria-label="Small button group">
      <button type="button" class="btn btn-outline-dark product-subs">-</button>
      <button type="button" class="btn btn-outline-dark"><small class="product-count">1</small></button>
      <button type="button" class="btn btn-outline-dark product-add">+</button>
  </div>
  <h3 class="btn btn-outline-secondary btn-sm shop-card-price">Precio: <small>${price}</small></h3>
</div>`
}

const rederShopToHtml = (array)=>{
  shopContainer.innerHTML= array.map((card)=>rederShop(card)).join("");
}

const addToShop = e=>{
  if(e.target.classList.contains("add-to-cart")){
    cardsShop = [...cardsShop, bikers.find((product)=>product.id === Number(e.target.dataset.id))]
    rederShopToHtml(cardsShop);
    shopCount.classList.add("flex-on")
    shopCount.innerHTML = cardsShop.length;
    quantityTotalPrice()
  }
}

const removeToShop = e=>{
  if(e.target.classList.contains("shop-card-close")){
    cardsShop = cardsShop.filter((card)=>card.id !== Number(e.target.dataset.id));
    rederShopToHtml(cardsShop);
    shopCount.innerHTML = cardsShop.length;
    quantityTotalPrice()
  }if(cardsShop.length < 1){
    shopCount.classList.remove("flex-on");
    shopBuy.classList.remove("flex-on")
  }
}



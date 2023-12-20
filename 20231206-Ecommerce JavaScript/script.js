const itemList = [{nombre:'Geforce RTX 2080',precio:220000,src:"img/item1.png",qty:"1"},
                    {nombre:'Geforce RTX 2090 Ti MSI',precio:250000,src:"img/item2.png",qty:"1"},
                    {nombre:'Geforce RTX 1070 Ti',precio:80000,src:"img/item3.png",qty:"1"},
                    {nombre:'Geforce RTX 4090',precio:990000,src:"img/item4.png",qty:"1"},
                    {nombre:'AMD Radeon 4600',precio:100000,src:"img/item5.png",qty:"1"},
                    {nombre:'AMD Radeon 5600',precio:180000,src:"img/item6.png",qty:"1"},
                    {nombre:'AMD Radeon Instict',precio:990000,src:"img/item7.png",qty:"1"},
                    {nombre:'AMD Radeon 7800 XT',precio:1200000,src:"img/item8.jpg",qty:"1"}];
const itemListDesc = [{desc:'Descripción Geforce RTX 2080',addInfo:'RTX 2080 additional info'},
                {desc:'Descripción Geforce RTX 2090 Ti MSI',addInfo:'RTX 2090 Ti additional info'},
                {desc:'Descripción Geforce RTX 1070 Ti',addInfo:'RTX 1070 Ti additional info'},
                {desc:'Descripción Geforce RTX 4090',addInfo:'RTX 4090 additional info'},
                {desc:'Descripción AMD Radeon 4600',addInfo:'Radeon 4600 additional info'},
                {desc:'Descripción AMD Radeon 5600',addInfo:'Radeon 5600 additional info'},
                {desc:'Descripción AMD Radeon Instict',addInfo:'Radeon Instict additional info'},
                {desc:'Descripción AMD Radeon 7800 XT',addInfo:'Radeon 7800 XT additional info'}];
const btnCartList = document.getElementsByClassName("btn-mini-comprar");
const cardTitleList = document.getElementsByClassName("card-title");
const cardTitleText = document.getElementsByClassName("card-text");
const btnCart = document.getElementById('btn-cart');
const modalItemPrice = document.getElementById('modal-item-price');
const modalItemImg = document.getElementById('modal-item-img');
const modalItemDesc = document.getElementById('modal-item-desc');
const modalItemAddInfo = document.getElementById('modal-item-add-info');
const modalItemAddToCart = document.getElementById('modal-item-add-to-cart');
const modalItemQty = document.getElementById('modal-item-qty');
const modalItemQtyPlus = document.getElementById('modal-item-qty-plus');
const modalItemQtyMinus = document.getElementById('modal-item-qty-minus');

const modalCartList = document.getElementById('modal-cart-list');
const modalCartCheckoutBtn = document.getElementById('modal-cart-checkout-btn');
const modalCartClearBtn = document.getElementById('btn-cart-clear');

const modalTotalCarrito = document.getElementById('total-carrito');

let cartListUnique = [];
let lastFuncReference = null;
let totalCarrito = 0;

addToCart = (itemId,qty) =>{
    if(qty===undefined){qty=1}
    for(x=1;x<=qty;x++){
        let cartLocal = [];
        if(localStorage.getItem('cart') == null){
            cartLocal.push(itemList[itemId]);
        }else{
            cartLocal = JSON.parse(localStorage.getItem('cart'));
            cartLocal.push(itemList[itemId]);
        }
        localStorage.setItem('cart', JSON.stringify(cartLocal));
        btnCart.innerText=`MY CART(${JSON.parse(localStorage.getItem('cart')).length})`;
    }
}

loadModalCart = () =>{
    let cartList = JSON.parse(localStorage.getItem('cart'));
    cartListUnique = [];
    totalCarrito = 0;
    
    modalCartList.innerHTML="";

    let count = 0;
    let flag = false;
 
    for (let j = 0; j < cartList.length; j++) {
        for (let k = 0; k < cartListUnique.length; k++) {
            if (cartList[j]?.nombre == cartListUnique[k]?.nombre) {
                flag = true;
            }
        }
        count++;
        if (count == 1 && flag == false) {
            cartListUnique.push(cartList[j]);
        }
        flag = false;
        count = 0;
    }

    for(let x=0;x<cartListUnique.length;x++){
        for(let y=0;y<cartList.length;y++){
            if(JSON.stringify(cartList[y]) == JSON.stringify(cartListUnique[x])){
                count++;
            }
        }
        cartListUnique[x]['qty'] = count;
        count=0;
    }

    for(let x=0;x<cartListUnique.length;x++){
        totalCarrito+=cartListUnique[x]['precio']*cartListUnique[x]['qty'];
    }
    modalTotalCarrito.innerText = `$${totalCarrito}.00`;

    for(let x=0;x<cartListUnique.length;x++){
        if(x==0){
            modalCartList.innerHTML=`
            <li>
            <img src="${cartListUnique[x]['src']}" alt="${cartListUnique[x]['nombre']}" style="height: 100px;">
            <strong style="margin: 10px;">${cartListUnique[x]['nombre']}</strong>
            <div>Cantidad:</div>
            <button class="circle" onclick="minusItem(${x})">-</button>
            <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-value-item-${x}" disabled value="${cartListUnique[x]['qty']}">
            <button class="circle" onclick="plusItem(${x})">+</button>
            <a class="btn btn-danger fw-bold d-flex justify-content-center" onclick="deleteListItem(${x})">
                <span class="material-symbols-outlined md-18">
                        delete
                </span>
                BORRAR <i class="fa fa-trash-o"></i></a>
            </li>
            <hr>
            `;
        }else{
        modalCartList.innerHTML+=`
        <li>
            <img src="${cartListUnique[x]['src']}" alt="${cartListUnique[x]['nombre']}" style="height: 100px;">
            <strong style="margin: 10px;">${cartListUnique[x]['nombre']}</strong>
            <div>Cantidad:</div>
            <button class="circle" onclick="minusItem(${x})">-</button>
            <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-value-item-${x}" disabled value="${cartListUnique[x]['qty']}">
            <button class="circle" onclick="plusItem(${x})">+</button>
            <a class="btn btn-danger fw-bold d-flex justify-content-center" onclick="deleteListItem(${x})">
                <span class="material-symbols-outlined md-18">
                        delete
                </span>
                BORRAR <i class="fa fa-trash-o"></i></a>
        </li>
        <hr>
        `};
    }

}

deleteListItem = (itemId) => {
    if(cartListUnique.length!=1){
        cartListUnique.splice(itemId, 1);
    }else{
        cartListUnique.splice(-1);
    }
    

    for(let x=0;x<cartListUnique.length;x++){
        if(x==0){
            modalCartList.innerHTML=`
            <li>
            <img src="${cartListUnique[x]['src']}" alt="${cartListUnique[x]['nombre']}" style="height: 100px;">
            <strong style="margin: 10px;">${cartListUnique[x]['nombre']}</strong>
            <div>Cantidad:</div>
            <button class="circle" onclick="minusItem(${x})">-</button>
            <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-value-item-${x}" disabled value="${cartListUnique[x]['qty']}">
            <button class="circle" onclick="plusItem(${x})">+</button>
            <a class="btn btn-danger fw-bold d-flex justify-content-center" onclick="deleteListItem(${x})">
                <span class="material-symbols-outlined md-18">
                        delete
                </span>
                BORRAR <i class="fa fa-trash-o"></i></a>
            </li>
            <hr>
            `;
        }else{
        modalCartList.innerHTML+=`
        <li>
            <img src="${cartListUnique[x]['src']}" alt="${cartListUnique[x]['nombre']}" style="height: 100px;">
            <strong style="margin: 10px;">${cartListUnique[x]['nombre']}</strong>
            <div>Cantidad:</div>
            <button class="circle" onclick="minusItem(${x})">-</button>
            <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-value-item-${x}" disabled value="${cartListUnique[x]['qty']}">
            <button class="circle" onclick="plusItem(${x})">+</button>
            <a class="btn btn-danger fw-bold d-flex justify-content-center" onclick="deleteListItem(${x})">
                <span class="material-symbols-outlined md-18">
                        delete
                </span>
                BORRAR <i class="fa fa-trash-o"></i></a>
        </li>
        <hr>
        `};
    }

    
}

minusItem = (itemId) => {
    if(cartListUnique[itemId]['qty']>1 && document.getElementById(`modal-value-item-${itemId}`).value >1){
        totalCarrito=0;
        cartListUnique[itemId]['qty']--;
        document.getElementById(`modal-value-item-${itemId}`).value--;
        for(let x=0;x<cartListUnique.length;x++){
            totalCarrito+=cartListUnique[x]['precio']*cartListUnique[x]['qty'];
        }
        modalTotalCarrito.innerText = `$${totalCarrito}.00`;
}
}
plusItem = (itemId) => {
    totalCarrito=0;
    cartListUnique[itemId]['qty']++;
    document.getElementById(`modal-value-item-${itemId}`).value++;
    for(let x=0;x<cartListUnique.length;x++){
        totalCarrito+=cartListUnique[x]['precio']*cartListUnique[x]['qty'];
    }
    modalTotalCarrito.innerText = `$${totalCarrito}.00`;
}

setModalInfo = (itemId) =>{
    (document.getElementById('modal-item-name')).innerText = itemList[itemId]['nombre'];
    modalItemPrice.innerText = `$${itemList[itemId]['precio']},00`;
    modalItemImg.src = `${itemList[itemId]['src']}`;
    modalItemDesc.innerText = itemListDesc[itemId]['desc'];
    modalItemAddInfo.innerText = itemListDesc[itemId]['addInfo'];
    if(lastFuncReference!=null){modalItemAddToCart.removeEventListener('click',lastFuncReference);}
    let funcReference = ()=>addToCart(itemId,modalItemQty.value);
    modalItemAddToCart.addEventListener('click',funcReference);
    lastFuncReference = funcReference;
    modalItemQty.value = 1;
}

checkoutCart = () =>{
        loadModalCart();
}

checkoutCartClear = () =>{
    localStorage.clear();
    cartListUnique = [];
    alert('Carrito vaciado.');
    modalTotalCarrito.innerText = `$0.00`;
    btnCart.innerText=`MY CART(0)`;
    loadModalCart();
}

cargarCardItems = () => {
    if(cardTitleList!=null){
    for(let x=0;x<cardTitleList.length;x++){
        cardTitleList[x].innerText = itemList[x]['nombre'];
        cardTitleList[x].addEventListener('click',()=>setModalInfo(x));
    }

    for(let x=0;x<cardTitleList.length;x++){
        cardTitleText[x].innerText = `$${itemList[x]['precio']},00`;
    }

    for(let x=0;x<cardTitleList.length;x++){
        btnCartList[x].addEventListener('click',()=>addToCart(x));
    }
    }

    modalItemQtyPlus.addEventListener('click',()=>{modalItemQty.value++});
    modalItemQtyMinus.addEventListener('click',()=>{if(modalItemQty.value>1){modalItemQty.value--}});
}

cargarBtnCart = () =>{
    btnCart.addEventListener('click',()=>checkoutCart());
    modalCartClearBtn.addEventListener('click',()=>checkoutCartClear());
    if(localStorage.getItem('cart') != null){
        btnCart.innerText=`MY CART(${JSON.parse(localStorage.getItem('cart')).length})`;
    }else{
        btnCart.innerText=`MY CART(0)`;
    }
}

cargarBtnCart();
cargarCardItems();
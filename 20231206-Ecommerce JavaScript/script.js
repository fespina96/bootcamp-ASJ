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

let cartListUnique = [];
let lastFuncReference = null;

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
    
    for(let x=0;x<cartList.length;x++){
        if(x==0){
            cartListUnique.push(cartList[x]);
        }else if(cartListUnique.indexOf(cartList[x]).length>=1){

        }else{
            cartListUnique.push(cartList[x]);
        }
    }

    for(let x=0;x<cartListUnique.length;x++){
        cartListUnique[x]['qty'] = cartList.indexOf(cartListUnique[x]).length;
    }


    for(let x=0;x<cartListUnique.length;x++){
        if(x==0){
            modalCartList.innerHTML=`
            <li>
                <img src="${cartListUnique[x]['src']}" alt="${cartListUnique[x]['nombre']}" style="height: 100px;">
                <strong style="margin: 10px;">${cartListUnique[x]['nombre']}</strong>
                <div>Cantidad:</div>
                <button class="circle">-</button>
                <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-list-qty-${x}" value="${cartListUnique[x]['qty']}">
                <button class="circle">+</button>
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
            <button class="circle">-</button>
            <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-list-qty-${x}" value="${cartListUnique[x]['qty']}">
            <button class="circle">+</button>
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
    cartListUnique.splice(itemId, 1);

    for(let x=0;x<cartListUnique.length;x++){
        if(x==0){
            modalCartList.innerHTML=`
            <li>
                <img src="${cartListUnique[x]['src']}" alt="${cartListUnique[x]['nombre']}" style="height: 100px;">
                <strong style="margin: 10px;">${cartListUnique[x]['nombre']}</strong>
                <div>Cantidad:</div>
                <button class="circle">-</button>
                <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-list-qty-${x}" value="${cartListUnique[x]['qty']}">
                <button class="circle">+</button>
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
            <button class="circle">-</button>
            <input style="width: 80px; text-align: center;" type="number" name="cantidad" id="modal-list-qty-${x}" value="${cartListUnique[x]['qty']}">
            <button class="circle">+</button>
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
    alert('Carrito vaciado.');
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
    if(document.getElementById('btn-cart-clear')!=null){(document.getElementById('btn-cart-clear')).addEventListener('click',()=>checkoutCartClear());}
    if(localStorage.getItem('cart') != null){
        btnCart.innerText=`MY CART(${JSON.parse(localStorage.getItem('cart')).length})`;
    }else{
        btnCart.innerText=`MY CART(0)`;
    }
}

cargarBtnCart();
cargarCardItems();

//убирать или показывать корзина пуста и кнопка заказать
function toggleCartStatus() {    

    const cartWrapper = document.querySelector('.cart-wrapper'); 
    const dataCartEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');    
    
    if (cartWrapper.children.length > 0) {
        
        dataCartEmpty.classList.add('none');  
        orderForm.classList.remove('none');
    } else {       
        dataCartEmpty.classList.remove('none');
        orderForm.classList.add('none');
    }

}


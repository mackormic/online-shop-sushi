

function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const priceTotalEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;
    
    // обходим все блоки с ценами в корзине
    cartItems.forEach(item => {
        
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice = totalPrice + currentPrice;
        // тоже самое 
        // totalPrice += currentPrice
    });

   priceTotalEl.innerText = totalPrice;
    // скрываем/показываем стоимость доставки
   if (totalPrice > 0) {
    cartDelivery.classList.remove('none');
   } else {
    cartDelivery.classList.add('none');
   }
    // указываем стоимость доставки
   if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
    
   } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
    
   }
}


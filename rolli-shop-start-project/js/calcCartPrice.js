

function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');

    const priceTotalEl = document.querySelector('.total-price');

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
}


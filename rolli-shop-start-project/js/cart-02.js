
// div внутри корзины в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

// отслеживаем клик по странице
window.addEventListener('click', function (event) {
    // проверяем кликнули ли мы на кнопку добавить в корзину
    if (event.target.hasAttribute('data-cart')) {

    // находим карточку с товаром внутри которой был совершен клик
    const card = event.target.closest('.card');
        
        // собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText, 
            itemInbox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // проверяем если такой товар в корзине

        const itemInCart = cartWrapper.querySelector(`[data-id = "${productInfo.id}"]`)
        
        if (itemInCart) {
            const counterElement= itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            //если товара нет в корзине
              
        // собранные данные подставим в шаблон для товара в корзине

        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemInbox} / ${productInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>`;

    // отобрази товар в корзине 
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }

        // сбрасываем счетчик
        card.querySelector('[data-counter]').innerText = '1';
    
        // отображение статуса корзины (пустая/полная)
        toggleCartStatus();
        calcCartPrice();
    }
    
});
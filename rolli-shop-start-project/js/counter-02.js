

window.addEventListener('click', function (event) {
// объявляем переменную для счетчика
    let counter;
// прововеряем клик строго по кнопке Плюс или Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // находим сам счетчик
        counter = counterWrapper.querySelector('[data-counter]'); 
    }
       
                
        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerHTML;

    }   

        if (event.target.dataset.action === 'minus') {
            
        if (parseInt(counter.innerHTML) > 1) {
            counter.innerText = --counter.innerHTML;
        }   else if
        // проверка на товар в корзине
        (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            
            // удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // отображение статуса корзины (пустая/полная)
        toggleCartStatus();    
        calcCartPrice();    
        }
    }   

    // проверяем на кли + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // и тут запускаем пересчет общей стоимости товаров
        calcCartPrice();
    }


});
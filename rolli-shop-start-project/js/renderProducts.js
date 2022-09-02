const productsContainer = document.querySelector("#products-container");

getProducts();

async function getProducts() {
  const response = await fetch("./js/products.json");
  console.log(response);

  const productsArray = await response.json();
  console.log(productsArray);
  renderProducts(productsArray);
}

// нестрелочная функция
// function renderProducts(productsArray) {
//     productsArray.forEach(function(element){

//     })
// }

function renderProducts(productsArray) {
  productsArray.forEach((element) => {
    const productsHTML = `<div class="col-md-6">
        <div class="card mb-4" data-id="${element.id}">
            <img class="product-img" data-id = "${element.id}" data-img = "modal" src="./img/roll/${element.imgSrc}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${element.title}</h4>
                <p><small data-items-in-box class="text-muted">${element.itemInbox} шт.</small></p>

                <div class="details-wrapper">

                    <!-- Счетчик -->
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <!-- Счетчик -->
                    

                    <div class="price">
                        <div class="price__weight">${element.weight}г.</div>
                        <div class="price__currency">${element.price} ₽</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

            </div>
        </div>
    </div>`;

    productsContainer.insertAdjacentHTML("beforeend", productsHTML);
  });
}

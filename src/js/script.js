var timerId;

function throttleFunction (func, delay) {
	if (timerId) {
		return
	}

	timerId  =  setTimeout(function () {
		func()
		timerId  =  undefined;
	}, delay)
}

function getProducts(url = 'frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1') {
    var loadingEl = document.querySelector('.products__loading');
    loadingEl.classList.add('products__loading--active');

    fetch(`https://${url}`)
        .then(response => { return response.json(); } )
        .then(data => injectProjects(data))
        .catch(function(error) {
            console.log('There has been a problem fetching the product list: ' + error.message);
        });
}

function injectProjects({ products, nextPage }) {

    var content = '';
    
    if (products) {
        for (product of products) {
            content += `
                <div class="card">
                    <div class="card__image">
                        <img src="http:${product.image}"/>
                    </div>
                    <h2 class="card__name">${product.name}</h2>
                    <p class="card__description">${product.description}</p>
                    <p class="card__oldPrice">De: R$${product.oldPrice.toFixed(2)}</p>
                    <h3 class="card__price">Por: R$${product.price.toFixed(2)}</h3>
                    <p class="card__installments">ou ${product.installments.count}x de R$${product.installments.value.toFixed(2)}</p>
                    <button class="card__button">Comprar</button>
                </div>
            `;
        }
    }

    var loadingEl = document.querySelector('.products__loading');
    loadingEl.classList.remove('products__loading--active');

    var cardContainer = document.querySelector('.products__list');
    cardContainer.innerHTML += content;

    var cardsButton = document.querySelector('.products__button');
    cardsButton.onclick = function() { throttleFunction( function () {
        getProducts(nextPage);
    }, 1000 ) };
};

getProducts();

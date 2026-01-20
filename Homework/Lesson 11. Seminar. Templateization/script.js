const productCards = document.querySelector('.product-cards__margin');

dataProducts.forEach(product => {
    const productBoxEL = document.createElement('div');
    productBoxEL.classList.add('product-box');

    const productImgEL = document.createElement('img');
    productImgEL.src = product.img;
    productImgEL.alt = 'product';

    const productBoxTextEl = document.createElement('div');
    productBoxTextEl.classList.add('product-box-text');

    const productNameEl = document.createElement('h3');
    productNameEl.classList.add('product-box__cards-name');
    productBoxTextEl.textContent = product.name;

    const productDsc = document.createElement('p');
    productDsc.classList.add('product-box__cards-description');
    productDsc.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-box__cards-price');
    productPrice.textContent = product.price;

    productCards.append(productBoxEL);
    productBoxEL.append(productImgEL);
    productBoxEL.append(productBoxTextEl);
    productBoxTextEl.append(productNameEl);
    productBoxTextEl.append(productDsc);
    productBoxTextEl.append(productPrice);
});
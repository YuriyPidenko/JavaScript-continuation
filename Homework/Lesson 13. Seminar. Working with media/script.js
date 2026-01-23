
const productCards = document.querySelector('.product-cards__margin');

products.forEach(product => {
    const productBoxEL = document.createElement('div');
    productBoxEL.classList.add('product-box');

    const cardLink = document.createElement('a')
    cardLink.classList.add('card-link')
    cardLink.href = 'qqq'

    const productImgEL = document.createElement('img');
    productImgEL.classList.add('product-box__img')
    productImgEL.src = product.img;
    productImgEL.alt = 'product';

    const productBoxTextEl = document.createElement('div');
    productBoxTextEl.classList.add('product-box-text');

    const productNameEl = document.createElement('h3');
    productNameEl.classList.add('product-box__cards-name');
    productNameEl.textContent = product.name;

    const productDsc = document.createElement('p');
    productDsc.classList.add('product-box__cards-description');
    productDsc.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-box__cards-price');
    productPrice.textContent = product.price;

    const addBox = document.createElement('div');
    addBox.classList.add('add-box');

    const addEl = document.createElement('a');
    addEl.classList.add('add');
    addEl.href = 'eee'

    const addImg = document.createElement('img');
    addImg.classList.add('add-img');
    addImg.src = 'img/card-add.svg';
    addEl.alt = 'add';

    const addTxt = document.createElement('p');
    addTxt.classList.add('add-txt');
    addTxt.textContent = 'Add to Cart';

    productCards.append(productBoxEL);
    productBoxEL.append(cardLink);
    cardLink.append(productImgEL);
    cardLink.append(productBoxTextEl);
    productBoxTextEl.append(productNameEl);
    productBoxTextEl.append(productDsc);
    productBoxTextEl.append(productPrice);

    productBoxEL.append(addBox);
    addBox.append(addEl);
    addEl.append(addImg);
    addEl.append(addTxt)
});


const cardsEl = document.querySelector('.cards');

dataProducts.forEach(product => {
    const cardBoxEl = document.createElement('div');
    cardBoxEl.classList.add('cards-box');


    const cardsLink = document.createElement('a');
    cardsLink.classList.add('cards-box__link')
    cardsLink.href = '#'

    const imgEL = document.createElement('img');
    imgEL.src = product.img;
    imgEL.alt = 'photo';

    const cardBoxContentEL = document.createElement('div');
    cardBoxContentEL.classList.add('cards-box__content');

    const cardsBoxTitle = document.createElement('h1');
    cardsBoxTitle.classList.add('cards-box__title');
    cardsBoxTitle.textContent = product.name;

    const cardsBoxPrise = document.createElement('p');
    cardsBoxPrise.classList.add('cards-box__dsc');
    cardsBoxPrise.textContent = 'Prise:';

    const spanPrise = document.createElement('span');
    spanPrise.classList.add('card-box__dsc_prise');
    spanPrise.textContent = product.prise;

    const cardsBoxColor = document.createElement('p');
    cardsBoxColor.classList.add('cards-box__dsc');
    cardsBoxColor.textContent = 'Color:';

    const spanColor = document.createElement('span');
    spanColor.classList.add('card-box__dsc_variant');
    spanColor.textContent = product.color;

    const cardsBoxSize = document.createElement('p');
    cardsBoxSize.classList.add('cards-box__dsc');
    cardsBoxSize.textContent = 'Size:';

    const spanSize = document.createElement('span');
    spanSize.classList.add('card-box__dsc_variant');
    spanSize.textContent = product.size;

    const cardBoxQuantity = document.createElement('p')
    cardBoxQuantity.classList.add('cards-box__dsc');
    cardBoxQuantity.textContent = 'Quantity:';

    const inputQuatitu = document.createElement('input');
    inputQuatitu.classList.add('card-box__dsc_quantity')
    inputQuatitu.type = 'number'
    inputQuatitu.min = '1'
    inputQuatitu.placeholder = '3'

    const closeEl = document.createElement('div')
    closeEl.classList.add('card-box__close')

    const closeImgEL = document.createElement('img')
    closeImgEL.src = 'img/close.svg'
    closeImgEL.alt = 'close'

    cardsEl.append(cardBoxEl);
    cardBoxEl.append(cardsLink);
    cardsLink.append(imgEL);
    cardBoxEl.append(cardBoxContentEL);
    cardBoxContentEL.append(cardsBoxTitle);

    cardBoxContentEL.append(cardsBoxPrise);
    cardsBoxPrise.append(spanPrise);

    cardBoxContentEL.append(cardsBoxColor);
    cardsBoxColor.append(spanColor);

    cardBoxContentEL.append(cardsBoxSize);
    cardsBoxSize.append(spanSize)

    cardBoxContentEL.append(cardBoxQuantity);
    cardBoxQuantity.append(inputQuatitu)

    cardBoxEl.append(closeEl)
    closeEl.append(closeImgEL)

});



// Массив для хранения товаров в корзине (используем ваш существующий dataProducts)

// Функция для создания карточки товара в корзине
function createCartItemElement(item, index) {
    const cardBoxEl = document.createElement('div');
    cardBoxEl.classList.add('cards-box');


    const cardsLink = document.createElement('a');
    cardsLink.classList.add('cards-box__link')
    cardsLink.href = '#'

    const imgEL = document.createElement('img');
    imgEL.src = item.img;
    imgEL.alt = 'photo';

    const cardBoxContentEL = document.createElement('div');
    cardBoxContentEL.classList.add('cards-box__content');

    const cardsBoxTitle = document.createElement('h1');
    cardsBoxTitle.classList.add('cards-box__title');
    cardsBoxTitle.textContent = item.name;

    const cardsBoxPrise = document.createElement('p');
    cardsBoxPrise.classList.add('cards-box__dsc');
    cardsBoxPrise.textContent = 'Prise:';

    const spanPrise = document.createElement('span');
    spanPrise.classList.add('card-box__dsc_prise');
    spanPrise.textContent = item.prise;

    const cardsBoxColor = document.createElement('p');
    cardsBoxColor.classList.add('cards-box__dsc');
    cardsBoxColor.textContent = 'Color:';

    const spanColor = document.createElement('span');
    spanColor.classList.add('card-box__dsc_variant');
    spanColor.textContent = item.color;

    const cardsBoxSize = document.createElement('p');
    cardsBoxSize.classList.add('cards-box__dsc');
    cardsBoxSize.textContent = 'Size:';

    const spanSize = document.createElement('span');
    spanSize.classList.add('card-box__dsc_variant');
    spanSize.textContent = item.size;

    const cardBoxQuantity = document.createElement('p')
    cardBoxQuantity.classList.add('cards-box__dsc');
    cardBoxQuantity.textContent = 'Quantity:';

    const inputQuatitu = document.createElement('input');
    inputQuatitu.classList.add('card-box__dsc_quantity')
    inputQuatitu.type = 'number'
    inputQuatitu.min = '1'
    inputQuatitu.placeholder = '3'

    const closeEl = document.createElement('div')
    closeEl.classList.add('card-box__close')
    closeEl.addEventListener('click', () => removeItem(index))

    const closeImgEL = document.createElement('img')
    closeImgEL.src = 'img/close.svg'
    closeImgEL.alt = 'close'
    closeEl.append(closeImgEL)
    cardBoxEl.append(cardsLink);
    cardsLink.append(imgEL);
    cardBoxEl.append(cardBoxContentEL);
    cardBoxContentEL.append(cardsBoxTitle);

    cardBoxContentEL.append(cardsBoxPrise);
    cardsBoxPrise.append(spanPrise);

    cardBoxContentEL.append(cardsBoxColor);
    cardsBoxColor.append(spanColor);

    cardBoxContentEL.append(cardsBoxSize);
    cardsBoxSize.append(spanSize)

    cardBoxContentEL.append(cardBoxQuantity);
    cardBoxQuantity.append(inputQuatitu)

    cardBoxEl.append(closeEl);
    return cardBoxEl;
}

// Функция для отображения товаров в корзине
function renderCart() {
    const cartItemsContainer = document.querySelector('.cards');
    const cartSection = document.querySelector('.cart-items');

    cartItemsContainer.innerHTML = ''; // Очищаем контейнер

    if (dataProducts.length === 0) {
        cartSection.style.display = 'none'; // Скрываем раздел, если корзина пуста
        return;
    }

    dataProducts.forEach((product, index) => {
        const cartItemElement = createCartItemElement(product, index);
        cartItemsContainer.appendChild(cartItemElement);
    });
    cartSection.style.display = 'block'; // Показываем раздел
}

// Обработчики для кнопок "Add to Cart"
const addToCartButtons = document.querySelectorAll('.add');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const selectedProduct = products[index];
        let element = dataProducts.find(item => item.name === products[index].name)

        if (element === undefined) {
            dataProducts.push({
                "name": products[index].name,
                "prise": products[index].price,
                "color": "Red",
                "size": "XL",
                "img": products[index].img,
            })
        }

        // Показываем раздел "Cart items", если он был скрыт
        const cartSection = document.querySelector('.cart-items');
        cartSection.style.display = 'block';

        renderCart();
    });
});

function removeItem(index) {
    dataProducts.splice(index, 1);
    renderCart();
}

//Инициализация (вызов renderCart при загрузке страницы, если в dataProducts уже есть товары)
renderCart();

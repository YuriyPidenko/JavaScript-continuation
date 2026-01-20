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
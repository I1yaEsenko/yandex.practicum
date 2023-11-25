import {cardTemplate} from '../index'


export function createCard(titleCard, linkCard, deleteCardHandler, likeHandler, openImageCardHandler) {
    // клонируем наш шаблон
    const cardElement = cardTemplate.content.cloneNode(true);
    // получаем элементы для картинки и названия карточки
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    // получаем элемент кнопки удаления
    const deleteButton = cardElement.querySelector('.card__delete-button');
    // получаем элемент кнопки like
    const heartButton = cardElement.querySelector('.card__like-button')

    // присваиваем элементам значения аргументов переданных в функцию
    cardImage.src = linkCard;
    cardImage.alt = titleCard;
    cardTitle.textContent = titleCard;

    // добавляем обработчик события на сердечко для like-состояния
    heartButton.addEventListener('click', likeHandler)
    // добавляем обработчик события на корзину для удаления карточки
    deleteButton.addEventListener('click', deleteCardHandler);
    // добавляем обработчик события картинку для открытия popup с картинкой
    cardImage.addEventListener('click', function () {
        openImageCardHandler(cardImage)
    })

    return cardElement;
}

// @todo: Функция like карточки
export function likeActive(event) {
    const like = event.target.closest('.card__like-button')
    like.classList.toggle('card__like-button_is-active')
}

// @todo: Функция удаления карточки
export function deleteCard(event) {
    const card = event.target.closest('.card');
    card.remove()
}

console.log('bla bla bla')

import { getCardTemplate } from './cardTemplateModule';

const cardTemplate = getCardTemplate();

function createCard(titleCard, linkCard, deleteCardHandler, likeHandler, openImageHandler) {
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
        openImageHandler(cardImage)
    })

    return cardElement;
}
function likeActive(event) {
    const like = event.target.closest('.card__like-button')
    like.classList.toggle('card__like-button_is-active')
}
// @todo: Функция удаления карточки
function deleteCard(event) {
    const card = event.target.closest('.card');
    card.remove()
}


export {createCard, deleteCard, likeActive}

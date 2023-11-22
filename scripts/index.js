// @todo: Темпле карточки

import {createCard, deleteCard, likeActive} from "../components/card";

const cardTemplate = document.getElementById('card-template')
// @todo: DOM узлы
const cardsList = document.querySelector('.places__list')
const profileTitle = document.querySelector('.profile__title')
const profileDesc = document.querySelector('.profile__description')
//кнопки
const addButton = document.querySelector('.profile__add-button')
const saveCard = document.querySelector('.popup_type_new-card .popup__button')
const saveProfile = document.querySelector('.popup_type_edit .popup__button')
const profileEditButton = document.querySelector('.profile__edit-button')
//обращение к форме
const cardForm = document.querySelector('form[name="new-place"]')
const profileForm = document.querySelector('form[name="edit-profile"]')
//элементы попапа новой карточки
const popupNewCard = document.querySelector('.popup_type_new-card')
const closePopupCard = document.querySelector('.popup_type_new-card .popup__close')
const newCardTitle = document.querySelector('.popup__input_type_card-name')
const newCardLink = document.querySelector('.popup__input_type_url')
//элементы попапа редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit')
const closeEditProfile = document.querySelector('.popup_type_edit .popup__close')
const nameEditProfile = document.querySelector('.popup__input_type_name')
const hobbyEditProfile = document.querySelector('.popup__input_type_description')
//элементы попапа открытия изображения
const popupImage = document.querySelector('.popup_type_image')
const closePopupImage = document.querySelector('.popup_type_image .popup__close')
const popupImageSrc = document.querySelector('.popup__image')

function getCardTemplate() {
    return cardTemplate;
}

// @todo: Вывести карточки на страницу
initialCards.forEach(card => {
    const cards = createCard(card.name, card.link, deleteCard, likeActive, openImageHandler)
    cardsList.appendChild(cards)
})


// @todo: Функция создания карточки


// @todo: Функция like карточки


function openImageHandler (cardImage) {
    const imagePath = cardImage.getAttribute('src')
    popupImageSrc.setAttribute('src', imagePath)
    popupImage.style.display = 'flex'
}
// @todo: Функция добавления новой карточки
function addCard(event) {
    //Убираем перезагрузку форма после отправки
    event.preventDefault()
    //Присваиваем значения инпутов
    const newTitle = newCardTitle.value
    const newLink = newCardLink.value
    //Создаем новую карточку
    const newCardForm = createCard(newTitle, newLink, deleteCard, likeActive, openImageHandler)
    //Добавляем новую карточку в начала родительского элемента
    cardsList.prepend(newCardForm)
    //Перезагружаем поля формы
    cardForm.reset()
}


// @todo: Функция редактирования профиля
function editProfile(event) {
    //Убираем перезагрузку форма после отправки
    event.preventDefault()
    //Присваиваем значения инпутов
    const name = nameEditProfile.value
    const hobby = hobbyEditProfile.value
    //Создаем новую карточку
    profileTitle.textContent = name
    profileDesc.textContent = hobby
    console.log(profileDesc)
    console.log(profileTitle)
    //Перезагружаем поля формы
    cardForm.reset()
}







// @todo: Активация формы для добавления карточки
addButton.addEventListener('click', function () {
    popupNewCard.style.display = 'flex'
})

// @todo: Закрытие формы для добавления карточки по нажатию на Х
closePopupCard.addEventListener('click', function () {
    popupNewCard.style.display = 'none'
    cardForm.reset()
})
// @todo: Закрытие формы для добавления карточки по нажатию на Сохранить
saveCard.addEventListener('click', function () {
    popupNewCard.style.display = 'none'
})


// @todo: Добавления обработчика событий при нажатии на кнопку Сохранить в форме
cardForm.addEventListener('submit', addCard)


// @todo: Активация формы для редактирования профиля
profileEditButton.addEventListener('click', function () {
    popupEditProfile.style.display = 'flex'
})

// @todo: Закрытие формы для редактирования профиля по нажатию на Х
closeEditProfile.addEventListener('click', function () {
    popupEditProfile.style.display = 'none'
    profileForm.reset()
})
// @todo: Закрытие формы для редактирования профиля по нажатию на Сохранить
saveProfile.addEventListener('click', function () {
    popupEditProfile.style.display = 'none'
})
/*// @todo: Добавления обработчика событий при нажатии на кнопку Сохранить в форме редактирования профиля
profileForm.addEventListener('submit', function () {})


// @todo: Закрытие на Х
popupImage.addEventListener('click', function (){})*/

export {getCardTemplate}
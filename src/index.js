import {createCard, deleteCard, likeActive} from './components/card'
import {openModal, closeModal, handleKeyDown, handleOverlayClick} from "./components/modal";
import './pages/index.css'
import {initialCards} from "./components/cards";


// @todo: Темпле карточки
export const cardTemplate = document.getElementById('card-template')
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
export const cardForm = document.querySelector('form[name="new-place"]')
export const profileForm = document.querySelector('form[name="edit-profile"]')
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


// -------------------------------------



// @todo: Вывести карточки на страницу
initialCards.forEach(card => {
    const cards = createCard(card.name, card.link, deleteCard, likeActive, openImageCard)
    cardsList.appendChild(cards)
})


function openImageCard(cardImage) {
    const imagePath = cardImage.getAttribute('src')
    popupImageSrc.setAttribute('src', imagePath)
    openModal(popupImage) 
}

// @todo: Функция добавления новой карточки
function addNewCard(event) {
    //Убираем перезагрузку форма после отправки
    event.preventDefault()
    //Присваиваем значения инпутов
    const newTitle = newCardTitle.value
    const newLink = newCardLink.value
    //Создаем новую карточку
    const newCardForm = createCard(newTitle, newLink, deleteCard, likeActive, openImageCard)
    //Добавляем новую карточку в начала родительского элемента
    cardsList.prepend(newCardForm)
    //Перезагружаем поля формы
    cardForm.reset()
}

// @todo: Заполнение полей профиля
nameEditProfile.value = profileTitle.textContent
hobbyEditProfile.value = profileDesc.textContent

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
    //Перезагружаем поля формы
}


// @todo: Активация формы для добавления карточки
function openModalHandler(element) {
    openModal(element);
}

function closePopupCardHandler(element, button) {
    closeModal(element);
    cardForm.reset();
    button.removeEventListener('click', openModalHandler);
}

addButton.addEventListener('click', function () {
    openModalHandler(popupNewCard)
} );
closePopupCard.addEventListener('click',function () {
    closePopupCardHandler(popupNewCard,closePopupCard ) 
} );
//

// @todo: Закрытие формы для добавления карточки по нажатию на Сохранить
saveCard.addEventListener('click', function () {
    closeModal(popupNewCard)
})


// @todo: Добавления обработчика событий при нажатии на кнопку Сохранить в форме
cardForm.addEventListener('submit', addNewCard)


// @todo: Активация формы для редактирования профиля
profileEditButton.addEventListener('click', function () {
    openModal(popupEditProfile)
})
profileEditButton.removeEventListener('click', function (){
    closeModal(popupEditProfile)
})

// @todo: Закрытие формы для редактирования профиля по нажатию на Х
closeEditProfile.addEventListener('click', function () {
    closeModal(popupEditProfile)
    profileForm.reset()
    nameEditProfile.value = profileTitle.textContent
    hobbyEditProfile.value = profileDesc.textContent
})
// @todo: Закрытие формы для редактирования профиля по нажатию на Сохранить
saveProfile.addEventListener('click', function () {
    closeModal(popupEditProfile)
})
//@todo: Добавления обработчика событий при нажатии на кнопку Сохранить в форме редактирования профиля
profileForm.addEventListener('submit', editProfile)

//@todo: Закрытие на Х
closePopupImage.addEventListener('click', function () {
    closeModal(popupImage)
})

document.addEventListener('keydown', function(event) {
    handleKeyDown(event, popupNewCard, popupEditProfile, popupImage)
});
document.addEventListener('click', function(event) {
    handleOverlayClick(event, popupNewCard, popupEditProfile, popupImage)
});
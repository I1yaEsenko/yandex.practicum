import {cardForm, profileForm} from '../index'

// @todo: Функция открытия Popup
export function openModal(element) {
    element.classList.add('popup_is-opened')
}

// @todo: Функция закрытия Popup
export function closeModal(element) {
    element.classList.remove('popup_is-opened')
}

// @todo: Функция закрытия Popup по нажатию на Esc
export function handleKeyDown(event, el1, el2, el3) {
    if (event.key === 'Escape') {
        closeModal(el1) || closeModal(el2) || closeModal(el3)
    }
}

// @todo: Функция закрытия Popup по нажатию на Overlay
export function handleOverlayClick(event, el1, el2, el3) {
if (event.target === el1) {
        closeModal(el1)
    } else if (event.target === el2) {
        closeModal(el2)
    } else if (event.target === el3) {
        closeModal(el3)
    }
}

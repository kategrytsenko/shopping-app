import * as actions from '../constants/constants'

export function setView(viewType) {
    return {
        type: actions.SET_VIEW,
        payload: viewType
    }
}

export function openModal(galleryName, galleryItemIndex) {
    return {
        type: actions.OPEN_MODAL,
        payload: {
            galleryName,
            galleryItemIndex
        }
    }
}

export function closeModal(galleryName, galleryItemIndex) {
    return {
        type: actions.CLOSE_MODAL,
        payload: {
            galleryName,
            galleryItemIndex
        }
    }
}
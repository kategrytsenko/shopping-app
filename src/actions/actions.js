import * as actions from '../constants/constants'

export function setView(galleryNameForView, viewType) {
    return {
        type: actions.SET_VIEW,
        payload: {
            galleryNameForView,
            viewType
        }
    }
}

export function toggleModal (galleryNameForModal, galleryItemIndex, visibilityValue) {
    return {
        type: actions.TOGGLE_MODAL,
        payload: {
            galleryNameForModal,
            galleryItemIndex,
            visibilityValue
        }
    }
}
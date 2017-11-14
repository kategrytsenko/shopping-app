import * as actions from '../constants/constants'

export function setView(viewType) {
    return {
        type: actions.SET_VIEW,
        payload: viewType
    }
}

export function toggleModal (galleryName, galleryItemIndex, visibilityValue) {
    return {
        type: actions.TOGGLE_MODAL,
        payload: {
            galleryName,
            galleryItemIndex,
            visibilityValue
        }
    }
}
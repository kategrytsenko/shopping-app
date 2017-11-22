import * as actions from '../constants/constants'

export function setView(viewType) {
    return {
        type: actions.SET_VIEW,
        payload: viewType
    }
}

export function toggleModal(galleryNameForModal, galleryItemIndex, visibilityValue) {
    return {
        type: actions.TOGGLE_MODAL,
        payload: {
            galleryNameForModal,
            galleryItemIndex,
            visibilityValue
        }
    }
}

export function toggleBasket(openModal) {
    return {
        type: actions.TOGGLE_BASKET,
        payload: openModal
    }
}

export function addItemToTheCart(galleryNameForAdding, galleryItemForAdding) {
    return {
        type: actions.ADD_ITEM_TO_BASKET,
        payload: {
            galleryNameForAdding,
            galleryItemForAdding
        }
    }
}

export function removeItemFromBasket(galleryNameForRemoving, galleryItemForRemoving) {
    return {
        type: actions.REMOVE_ITEM_FROM_BASKET,
        payload: {
            galleryNameForRemoving,
            galleryItemForRemoving
        }
    }
}

// export function userMessage() {
//     return {
//         type: actions.USER_MESSAGE
//     }
// }
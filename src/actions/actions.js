import { SET_VIEW } from '../constants/constants'
import { OPEN_MODAL } from '../constants/constants'
import { CLOSE_MODAL } from '../constants/constants'

export function setView(viewType) {
    return {
        type: SET_VIEW,
        payload: viewType
    }
}

export function openModal() {
    return {
        type: OPEN_MODAL
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}
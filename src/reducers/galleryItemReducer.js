import { OPEN_MODAL } from '../constants/constants'
import { CLOSE_MODAL } from '../constants/constants'

const initialState = {
    visibility: false
}

export default function galleryItem(state = initialState, action) {

    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, visibility: true }
        case CLOSE_MODAL:
            return { ...state, visibility: false }
        default:
            return state;
    }

}

import { SET_VIEW } from '../constants/constants'
import galleriesData  from '../reducers/galleriesData'

const initialState = {
    galleriesData,
    viewType: "gallery",
    galleriesView: [
        {
            viewType: "gallery"
        },
        {
            viewType: "gallery"
        },
        {
            viewType: "gallery"
        }
    ]
}

export default function gallery(state = initialState, action) {

    switch (action.type) {
        case SET_VIEW:
            return { ...state, viewType: action.payload }

        default:
            return state;
    }

}

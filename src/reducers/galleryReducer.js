import * as constants from '../constants/constants'
import galleriesData  from './galleriesData'

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
        case constants.SET_VIEW:
            return { ...state, viewType: action.payload }
        case constants.OPEN_MODAL:
            debugger
            const newGalleriesData = {...state.galleriesData}
            const {galleryName, galleryItemIndex} = action.payload
            newGalleriesData[galleryName][galleryItemIndex].visibility = true
            return { ...state, galleriesData: newGalleriesData }
        case constants.CLOSE_MODAL:
            return { ...state, visibility: false }
        default:
            return state;
    }

}

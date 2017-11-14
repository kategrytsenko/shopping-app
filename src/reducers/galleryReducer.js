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
        case constants.TOGGLE_MODAL:
            debugger
            const newGalleriesData = {...state.galleriesData}
            const {galleryName, galleryItemIndex, visibilityValue} = action.payload
            newGalleriesData[galleryName][galleryItemIndex].modalVisibility = visibilityValue
            return { ...state, galleriesData: newGalleriesData }
        default:
            return state;
    }

}

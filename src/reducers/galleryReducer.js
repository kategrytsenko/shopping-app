import * as constants from '../constants/constants'
import galleriesData  from './galleriesData'

const initialState = {
    galleriesData
};

export default function gallery(state = initialState, action) {

    switch (action.type) {
        case constants.SET_VIEW:
            const newGalleryViewData = {...state.galleriesData};
            for (let key in newGalleryViewData) {
                newGalleryViewData[key].viewType = action.payload;
            }

            return { ...state, galleriesData: newGalleryViewData };
        case constants.TOGGLE_MODAL:
            const newGalleryModalData = { ...state.galleriesData };
            const {galleryNameForModal, galleryItemIndex, visibilityValue} = action.payload;
            newGalleryModalData[galleryNameForModal].galleryItems[galleryItemIndex].modalVisibility = visibilityValue;

            return { ...state, galleriesData: newGalleryModalData };
        // case constants.USER_MESSAGE:
        //
        default:
            return state;
    }
}

import * as constants from '../constants/constants'
import galleriesData  from './galleriesData'

const initialState = {
    galleriesData
};

export default function gallery(state = initialState, action) {

    switch (action.type) {
        case constants.SET_VIEW:
            const newGalleryViewData = {...state.galleriesData};
            Object.keys(newGalleryViewData).forEach((key) => {
                newGalleryViewData[key].viewType = action.payload;
            });

            return {galleriesData: newGalleryViewData};
        case constants.TOGGLE_MODAL:
            const newGalleryModalData = {...state.galleriesData};
            const {galleryNameForModal, galleryItemIndex, visibilityValue} = action.payload;
            newGalleryModalData[galleryNameForModal].galleryItems[galleryItemIndex].modalVisibility = visibilityValue;

            return {galleriesData: newGalleryModalData};
        default:
            return state;
    }
}

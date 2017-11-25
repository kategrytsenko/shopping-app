import * as constants from '../constants/constants'

const initialState = {
    basketItems: {},
    isBasketOpen: false,
    basketItemsCount: 0
};

function isInArray(galleryItemForAdding, element) {
    return (galleryItemForAdding.id === element.id);
}

export default function basket(state = initialState, action) {

    switch (action.type) {
        case constants.TOGGLE_BASKET:
            return { ...state, isBasketOpen: action.payload };
        case constants.ADD_ITEM_TO_BASKET:
            const newBasketItemsForAdding = {...state.basketItems};
            const {galleryNameForAdding, galleryItemForAdding} = action.payload;
            let basketItemsCountAfterAdding = state.basketItemsCount;
            if (!newBasketItemsForAdding.hasOwnProperty(galleryNameForAdding)) {
                newBasketItemsForAdding[galleryNameForAdding] = [];
            }
            if(newBasketItemsForAdding[galleryNameForAdding].find((element) => isInArray(galleryItemForAdding, element))) {
                galleryItemForAdding.count += 1;
            } else {
                galleryItemForAdding.count = 1;
                newBasketItemsForAdding[galleryNameForAdding].push(galleryItemForAdding);
            }

            return { ...state, basketItems: newBasketItemsForAdding, basketItemsCount: basketItemsCountAfterAdding + 1 };
        case constants.REMOVE_ITEM_FROM_BASKET:
            const newBasketItems = {...state.basketItems};
            const {galleryNameForRemoving, galleryItemForRemoving} = action.payload;
            let basketItemsCountAfterRemoving = state.basketItemsCount;

            Object.keys(newBasketItems).forEach((key) => {
                if (newBasketItems.hasOwnProperty(key) && key === galleryNameForRemoving) {
                    let galleryItemsInBasket = newBasketItems[galleryNameForRemoving];
                    let indexOfItem = galleryItemsInBasket.findIndex(item => item.id === galleryItemForRemoving.id);
                    galleryItemForRemoving.count -= 1;
                    if(!galleryItemForRemoving.count) {
                        galleryItemsInBasket.splice(indexOfItem, 1);
                    }
                    newBasketItems[galleryNameForRemoving] = galleryItemsInBasket;
                }
            });
            if (basketItemsCountAfterRemoving !== 0) {
                basketItemsCountAfterRemoving--;
            }

            return { ...state, basketItems: newBasketItems, basketItemsCount: basketItemsCountAfterRemoving };
        default:
            return state;
    }
}

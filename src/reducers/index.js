import { combineReducers } from 'redux'
import gallery from './galleryReducer'
import basket from './basketReducer'

export default combineReducers({
    gallery,
    basket
})
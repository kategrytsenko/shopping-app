import { combineReducers } from 'redux'
import gallery from './galleryReducer'
import galleryItem from './galleryItemReducer'

export default combineReducers({
    gallery,
    galleryItem
})
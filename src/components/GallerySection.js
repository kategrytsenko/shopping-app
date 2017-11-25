import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from '../components/GalleryItem'

export default class GallerySection extends Component {
    render() {
        const {
            galleryData,
            gallerySectionKey,
            toggleModal,
            addItemToTheCart,
            removeItemFromBasket
        } = this.props;

        return (
            <div className={galleryData.viewType === "gallery" ? "gallery__container gallery-view " + gallerySectionKey : "gallery__container list-view " + gallerySectionKey}>
                <h1 className="gallery__title">{galleryData.galleryTitle}</h1>
                <div className="gallery-items__wrapper">
                    { galleryData.galleryItems.map((galleryItem, galleryItemIndex) => {
                        return (
                            <GalleryItem key={galleryItemIndex}
                                         galleryItem = {galleryItem}
                                         galleryName={gallerySectionKey}
                                         galleryItemIndex={galleryItemIndex}
                                         toggleModal={toggleModal}
                                         addItemToTheCart = {addItemToTheCart}
                                         removeItemFromBasket = {removeItemFromBasket} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

GallerySection.propTypes = {
    galleryData: PropTypes.object.isRequired,
    gallerySectionKey: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onSetRef: PropTypes.func.isRequired,
    addItemToTheCart: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};
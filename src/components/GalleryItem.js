import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'

const GalleryItem = function(props) {
    const { itemImgSrc, itemText, galleryName, galleryItemIndex, modalVisibility, toggleModal } = props;
    function onGalleryItemClick(galleryName, galleryItemIndex, visibilityValue) {
        toggleModal(galleryName, galleryItemIndex, visibilityValue);
    }
    
    return (
        <div className = "gallery-item__wrapper">
            <div className="gallery__item"
                 onClick = {() => onGalleryItemClick(galleryName, galleryItemIndex, true)}>
                <img src = {itemImgSrc} />
                <p>{itemText}</p>
            </div>
            {modalVisibility &&
                <Modal itemImgSrc = {itemImgSrc}
                       itemText = {itemText}
                       galleryName = {galleryName}
                       galleryItemIndex = {galleryItemIndex}
                       toggleModal = {toggleModal} />
            }
        </div>
    )
};

GalleryItem.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    modalVisibility: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default GalleryItem
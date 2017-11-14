import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'

const GalleryItem = function(props) {
    function onGalleryItemClick(galleryName, galleryItemIndex, visibilityValue) {
        props.toggleModal(galleryName, galleryItemIndex, visibilityValue)
    }
    const { itemImgSrc, itemText, galleryName, galleryItemIndex, modalVisibility } = props
    return (
        <div className="gallery-item__wrapper">
            <div className="gallery__item" onClick={onGalleryItemClick.bind(this, galleryName, galleryItemIndex, true)}>
                <img src={itemImgSrc} />
                <p>{itemText}</p>
            </div>
            {/*{modalVisibility && Modal}*/}
            <Modal itemImgSrc={itemImgSrc}
                   itemText={itemText}
                   galleryName={galleryName}
                   galleryItemIndex={galleryItemIndex}
                   modalVisibility={modalVisibility}
                   toggleModal={props.toggleModal} />
        </div>
    )
}

GalleryItem.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    modalVisibility: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
}

export default GalleryItem
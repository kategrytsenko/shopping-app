import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'

export default class GalleryItem extends Component {
    onGalleryItemClick(galleryName, galleryItemIndex, visibilityValue) {
        this.props.toggleModal(galleryName, galleryItemIndex, visibilityValue)
    }
    render() {
        const { itemImgSrc, itemText, galleryName, galleryItemIndex, modalVisibility } = this.props
        return <div className="gallery-item__wrapper" onClick={this.onGalleryItemClick.bind(this, galleryName, galleryItemIndex, true)}>
            <div className="gallery__item">
                <img src={itemImgSrc} />
                <p>{itemText}</p>
            </div>
            {/*{modalVisibility && Modal}*/}
            <Modal itemImgSrc={itemImgSrc}
                   itemText={itemText}
                   galleryName={galleryName}
                   galleryItemIndex={galleryItemIndex}
                   modalVisibility={modalVisibility}
                   toggleModal={this.props.toggleModal} />
        </div>
    }
}

GalleryItem.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    modalVisibility: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
}
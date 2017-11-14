import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'

export default class GalleryItem extends Component {
    onGalleryItemClick(galleryName, galleryItemIndex) {
        debugger
        this.props.openModal(galleryName, galleryItemIndex)
    }
    render() {
        const { itemImgSrc, itemText, galleryName, galleryItemIndex, modalVisibility } = this.props
        return <div className="gallery-item__wrapper" onClick={this.onGalleryItemClick.bind(this, galleryName, galleryItemIndex)}>
            <div className="gallery__item">
                <img src={itemImgSrc} />
                <p>{itemText}</p>
            </div>
            {/*{modalVisibility && Modal}*/}
            <Modal itemImgSrc={itemImgSrc}
                   itemText={itemText}
                   modalVisibility={modalVisibility}
                   closeModal={this.props.closeModal} />
        </div>
    }
}

GalleryItem.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    modalVisibility: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
}
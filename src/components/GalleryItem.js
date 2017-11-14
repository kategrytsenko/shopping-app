import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'

export default class GalleryItem extends Component {
    onGalleryItemClick() {
        this.props.openModal()
    }
    render() {
        const { itemImgSrc, itemText } = this.props
        return <div className="gallery-item__wrapper" onClick={this.onGalleryItemClick.bind(this)}>
            <div className="gallery__item">
                <img src={itemImgSrc} />
                <p>{itemText}</p>
            </div>
            <Modal itemImgSrc={itemImgSrc} itemText={itemText} closeModal={this.props.closeModal} />
        </div>
    }
}

GalleryItem.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
}
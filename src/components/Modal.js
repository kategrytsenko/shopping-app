import React, { Component } from 'react'
import PropTypes from 'prop-types'
import closeModalIcon from '../images/icons/closeModalIcon.svg'


export default class Modal extends Component {
    onModalCloseClick(galleryName, galleryItemIndex, visibilityValue) {
        this.props.toggleModal(galleryName, galleryItemIndex, visibilityValue)
    }
    render() {
        const { itemImgSrc, itemText, galleryName, galleryItemIndex, modalVisibility } = this.props
        return <div className={modalVisibility ? "modal visible" : "modal"}>
            <div className="modal__window">
                <button className="icon_btn modal__close-btn" onClick={this.onModalCloseClick.bind(this, galleryName, galleryItemIndex, false)}><img src={closeModalIcon} /></button>
                <div className="modal__item">
                    <img src={itemImgSrc} />
                    <p>{itemText}</p>
                    {modalVisibility}
                </div>
            </div>
        </div>
    }
}

Modal.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    modalVisibility: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
}
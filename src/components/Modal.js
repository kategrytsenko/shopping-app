import React, { Component } from 'react'
import PropTypes from 'prop-types'
import closeModalIcon from '../images/icons/closeModalIcon.svg'

const Modal = function (props) {
    const { itemImgSrc, itemText, galleryName, galleryItemIndex, toggleModal } = props;
    function onModalCloseClick(galleryName, galleryItemIndex, visibilityValue) {
        toggleModal(galleryName, galleryItemIndex, visibilityValue);
    }

    return (
        <div className="modal">
            <div className="modal__window">
                <button className="icon_btn modal__close-btn"
                        onClick={() => onModalCloseClick( galleryName, galleryItemIndex, false)}>
                    <img src={closeModalIcon} />
                </button>
                <div className="modal__item">
                    <img src={itemImgSrc} />
                    <p>{itemText}</p>
                </div>
            </div>
        </div>
    )
};

Modal.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default Modal
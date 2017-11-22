import React, { Component } from 'react'
import PropTypes from 'prop-types'
import closeModalIcon from '../images/icons/closeModalIcon.svg'
import addToTheBasket from '../images/icons/addToTheBasket.svg'
import removeFromBasket from '../images/icons/removeFromBasket.svg'

const Modal = function (props) {
    const {
        galleryItem,
        galleryName,
        galleryItemIndex,
        toggleModal,
        addItemToTheCart,
        removeItemFromBasket
    } = props;
    function onModalCloseClick(galleryName, galleryItemIndex, visibilityValue) {
        toggleModal(galleryName, galleryItemIndex, visibilityValue);
    }
    function addToTheCartBtnClick(galleryName, galleryItem) {
        addItemToTheCart(galleryName, galleryItem);
    }
    function removeFromCartBtnClick(galleryName, galleryItem) {
        removeItemFromBasket(galleryName, galleryItem);
    }

    return (
        <div className="mask">
            <div className="modal__window">
                <button className="icon_btn window__close-btn"
                        onClick={() => onModalCloseClick( galleryName, galleryItemIndex, false)}>
                    <img src={closeModalIcon} />
                </button>
                <div className="modal__item">
                    <img src={galleryItem.src} />
                    <p>{galleryItem.text}</p>
                    <div className="gallery-item__controls">
                        <button className="icon_btn gallery-item__btn"
                                onClick={() => addToTheCartBtnClick(galleryName, galleryItem)}>
                            <img src={addToTheBasket} />
                        </button>
                        <button className="icon_btn gallery-item__btn"
                                onClick={() => removeFromCartBtnClick(galleryName, galleryItem)}>
                            <img src={removeFromBasket} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

Modal.propTypes = {
    galleryItem: PropTypes.object.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired,
    addItemToTheCart: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};

export default Modal
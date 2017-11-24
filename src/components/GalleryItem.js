import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'
import addToTheBasket from '../images/icons/addToTheBasket.svg'
import removeFromBasket from '../images/icons/removeFromBasket.svg'

const GalleryItem = function(props) {
    const {
        galleryItem,
        galleryName,
        galleryItemIndex,
        toggleModal,
        addItemToTheCart,
        removeItemFromBasket
    } = props;
    function onGalleryItemClick(galleryName, galleryItemIndex, visibilityValue) {
        toggleModal(galleryName, galleryItemIndex, visibilityValue);
    }
    function addToTheCartBtnClick(galleryName, galleryItem) {
        addItemToTheCart(galleryName, galleryItem);
    }
    function removeFromCartBtnClick(galleryName, galleryItem) {
        removeItemFromBasket(galleryName, galleryItem);
    }

    return (
        <div className = "gallery-item__wrapper">
            <div className="gallery__item">
                <img src = {galleryItem.src} alt={galleryName + "item"}
                     onClick = {() => onGalleryItemClick(galleryName, galleryItemIndex, true)} />
                <p>{galleryItem.text}</p>
                <div className="gallery-item__controls">
                    <button className="icon_btn gallery-item__btn"  alt="Add to the cart"
                            onClick={() => addToTheCartBtnClick(galleryName, galleryItem)}>
                        <img src={addToTheBasket} alt="Add to the cart" />
                    </button>
                    <button className="icon_btn gallery-item__btn" alt="Remove from the cart"
                            onClick={() => removeFromCartBtnClick(galleryName, galleryItem)}>
                        <img src={removeFromBasket} alt="Remove from the cart" />
                    </button>
                </div>
            </div>
            {galleryItem.modalVisibility &&
                <Modal itemImgSrc = {galleryItem.src}
                       itemText = {galleryItem.text}
                       galleryItem = {galleryItem}
                       galleryName = {galleryName}
                       galleryItemIndex = {galleryItemIndex}
                       toggleModal = {toggleModal}
                       addItemToTheCart = {addItemToTheCart}
                       removeItemFromBasket = {removeItemFromBasket} />
            }
        </div>
    )
};

GalleryItem.propTypes = {
    galleryItem: PropTypes.object.isRequired,
    galleryName: PropTypes.string.isRequired,
    galleryItemIndex: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired,
    addItemToTheCart: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};

export default GalleryItem
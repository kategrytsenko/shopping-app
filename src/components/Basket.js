import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from '../components/GalleryItem'
import closeModalIcon from '../images/icons/closeModalIcon.svg'

const Basket = function (props) {
    const {
        basketItems,
        toggleBasket,
        toggleModal,
        addItemToTheCart,
        removeItemFromBasket
    } = props;
    function onBasketCloseClick(openModal) {
        toggleBasket(openModal);
    }

    return (
        <div className="basket-mask">
            <div className="basket__window">
                <button className="icon_btn window__close-btn"
                        onClick={() => onBasketCloseClick(false)}>
                    <img src={closeModalIcon} alt="Close modal" />
                </button>
                <div className="basket-items__wrapper">
                    {Object.keys(basketItems).map((key) => {
                        return(
                            basketItems[key].map((item, index) => {
                                return(
                                    <GalleryItem key={index}
                                                 galleryItem={item}
                                                 galleryName={key}
                                                 galleryItemIndex={index}
                                                 toggleModal={toggleModal}
                                                 addItemToTheCart = {addItemToTheCart}
                                                 removeItemFromBasket = {removeItemFromBasket} />
                                )
                            })
                        )
                    })}
                </div>
            </div>
        </div>
    )

};

Basket.propTypes = {
    basketItems: PropTypes.object.isRequired,
    toggleBasket: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    addItemToTheCart: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};

export default Basket
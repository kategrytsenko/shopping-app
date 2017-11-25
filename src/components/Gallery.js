import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySection from '../components/GallerySection'
import Basket from '../components/Basket'
import listViewIcon from '../images/icons/listViewIcon.svg'
import galleryViewIcon from '../images/icons/galleryViewIcon.svg'
import basketIcon from '../images/icons/basketIcon.svg'
import SwipeableViews from 'react-swipeable-views'

export default class Gallery extends Component {
    setViewBtnClick(viewType) {
        this.props.setView(viewType);
    }
    onBasketBtnClick(openModal) {
        this.props.toggleBasket(openModal);
    }

    render() {
        const {
            galleriesData,
            setView,
            toggleModal,
            isBasketOpen,
            basketItems,
            basketItemsCount,
            toggleBasket,
            addItemToTheCart,
            removeItemFromBasket
        } = this.props;

        return <div className="gallery__wrapper">
            <div className="gallery__header">
                <div>{basketItemsCount}</div>
                <div className="gallery-view__controls">
                    <button className="icon_btn gallery-view__btn"
                            onClick={this.onBasketBtnClick.bind(this, true)}>
                        <img src={basketIcon} alt="Open basket" />
                    </button>
                    <button className="icon_btn gallery-view__btn"
                            onClick={this.setViewBtnClick.bind(this, "list")}>
                        <img src={listViewIcon} alt="Set list view" />
                    </button>
                    <button className="icon_btn gallery-view__btn"
                            onClick={this.setViewBtnClick.bind(this, "gallery")}>
                        <img src={galleryViewIcon} alt="Set gallery view" />
                    </button>
                </div>
            </div>
            <SwipeableViews enableMouseEvents>
                {Object.keys(galleriesData).map((key, index) => {
                    return(
                        <GallerySection key={index}
                                        galleryData={galleriesData[key]}
                                        gallerySectionKey={key}
                                        setView={setView}
                                        toggleModal={toggleModal}
                                        toggleBasket = {toggleBasket}
                                        addItemToTheCart = {addItemToTheCart}
                                        removeItemFromBasket = {removeItemFromBasket} />

                    )
                })}
            </SwipeableViews>
            {isBasketOpen &&
            <Basket basketItems = {basketItems}
                    toggleBasket = {toggleBasket}
                    toggleModal={toggleModal}
                    addItemToTheCart = {addItemToTheCart}
                    removeItemFromBasket = {removeItemFromBasket} />}
        </div>
    }
}

Gallery.propTypes = {
    galleriesData: PropTypes.object.isRequired,
    setView: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    isBasketOpen: PropTypes.bool.isRequired,
    basketItems: PropTypes.object.isRequired,
    basketItemsCount: PropTypes.number.isRequired,
    toggleBasket: PropTypes.func.isRequired,
    addItemToTheCart: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};

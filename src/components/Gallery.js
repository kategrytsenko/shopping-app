import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySection from '../components/GallerySection'
import Basket from '../components/Basket'
import listViewIcon from '../images/icons/listViewIcon.svg'
import galleryViewIcon from '../images/icons/galleryViewIcon.svg'
import basketIcon from '../images/icons/basketIcon.svg'
import Swipeable from 'react-swipeable'

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallerySection: {},
            galleryWrapper: {},
            timer: null
        }
    }
    componentDidMount() {
        this.setState({galleryWrapper: this.refs.galleryWrapper});
    }
    setGalleryRef(galleryRef) {
        this.setState({gallerySection: galleryRef});
    }
    setScrollTop() {
        if(this.state.timer !== null) {
            clearTimeout(this.state.timer);
        }
        function scrollTo(element, to, duration) {
            if (duration <= 0) return;
            const difference = to - element.scrollTop;
            const perTick = difference / duration * 10;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        }
        function setTargetToTop(scrollTop, galleryHeight) {
            const galleryNumber = Math.floor(scrollTop / galleryHeight);
            if((scrollTop % galleryHeight) < (galleryHeight / 2)) {
                return galleryHeight * galleryNumber;
            }
            return null;
        }
        function setTargetToBottom(scrollTop, galleryHeight) {
            const galleryNumber = Math.ceil(scrollTop / galleryHeight);
            if((scrollTop % galleryHeight) > (galleryHeight / 2)) {
                return galleryHeight * galleryNumber;
            }
            return null;
        }
        const toTop = this.state.currentScrollTop >= this.state.galleryWrapper.scrollTop;
        this.setState({currentScrollTop: this.state.galleryWrapper.scrollTop});
        this.setState({timer: setTimeout(() => {
            const galleryHeight = this.state.gallerySection.offsetHeight;
            const scrollTop = this.state.galleryWrapper.scrollTop;
            let target = null;
            if(toTop) {
                target = setTargetToTop(scrollTop, galleryHeight);
            } else {
                target = setTargetToBottom(scrollTop, galleryHeight);
            }
            if(target === null) return;
            scrollTo(this.state.galleryWrapper, target, 300);
        }, 100)});
    }
    setViewBtnClick(viewType) {
        this.props.setView(viewType);
    }
    onBasketBtnClick(openModal) {
        this.props.toggleBasket(openModal);
    }

    swiping(e, deltaX, deltaY, absX, absY, velocity) {
        console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity)
    }

    swipingLeft(e, absX) {
        console.log("You're Swiping to the Left...", e, absX)
    }

    swiped(e, deltaX, deltaY, isFlick, velocity) {
        console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity)
    }

    swipedUp(e, deltaY, isFlick) {
        console.log("You Swiped Up...", e, deltaY, isFlick)
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

        return <div onScroll={ () => this.setScrollTop()} className="gallery__wrapper" ref="galleryWrapper">
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

                {Object.keys(galleriesData).map((key) => {
                    return(
                        <Swipeable
                            onSwiping={this.swiping}
                            onSwipingLeft={this.swipingLeft}
                            onSwiped={this.swiped}
                            onSwipedUp={this.swipedRight} >
                        <GallerySection galleryData={galleriesData[key]}
                                        gallerySectionKey={key}
                                        setView={setView}
                                        toggleModal={toggleModal}
                                        toggleBasket = {toggleBasket}
                                        onSetRef={this.setGalleryRef.bind(this)}
                                        addItemToTheCart = {addItemToTheCart}
                                        removeItemFromBasket = {removeItemFromBasket} />
                        </Swipeable>
                    )
                })}

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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from '../components/GalleryItem'

// class SwipeComponent extends React.Component {
//
//
//     render() {
//         return (
//             <Swipeable
//                 onSwiping={this.swiping}
//                 onSwipingLeft={this.swipingLeft}
//                 onSwiped={this.swiped}
//                 onSwipedUp={this.swipedRight} >
//                 You can swipe here!
//             </Swipeable>
//         )
//     }
// }

export default class GallerySection extends Component {
    componentDidMount() {
        this.props.onSetRef(this.refs.gallery);
    }

    render() {
        const {
            galleryData,
            gallerySectionKey,
            toggleModal,
            addItemToTheCart,
            removeItemFromBasket
        } = this.props;

        return (
            <div ref="gallery"
                 className={galleryData.viewType === "gallery" ? "gallery__container gallery-view " + gallerySectionKey : "gallery__container list-view " + gallerySectionKey}>
                <h1 className="gallery__title">{galleryData.galleryTitle}</h1>
                <div className="gallery-items__wrapper">
                    { galleryData.galleryItems.map((galleryItem, galleryItemIndex) => {
                        return (
                            <GalleryItem key={galleryItemIndex}
                                         galleryItem = {galleryItem}
                                         galleryName={gallerySectionKey}
                                         galleryItemIndex={galleryItemIndex}
                                         toggleModal={toggleModal}
                                         addItemToTheCart = {addItemToTheCart}
                                         removeItemFromBasket = {removeItemFromBasket} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

GallerySection.propTypes = {
    galleryData: PropTypes.object.isRequired,
    gallerySectionKey: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onSetRef: PropTypes.func.isRequired,
    addItemToTheCart: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};
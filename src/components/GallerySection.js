import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from '../components/GalleryItem'
import listViewIcon from '../images/icons/listViewIcon.svg'
import galleryViewIcon from '../images/icons/galleryViewIcon.svg'

export default class GallerySection extends Component {
    componentDidMount() {
        this.props.onSetRef(this.refs.gallery);
    }
    onListViewBtnClick(galleryName, viewType) {
        this.props.setView(galleryName, viewType)
    }
    onGalleryViewBtnClick(galleryName, viewType) {
        this.props.setView(galleryName, viewType)
    }
    render() {
        const { galleryData, gallerySectionKey } = this.props

        return <div ref="gallery" className={galleryData["viewType"]=="gallery" ? "gallery__container gallery-view " + gallerySectionKey : "gallery__container list-view " + gallerySectionKey}>
            <div className="gallery__header">
                <h1 className="gallery__title">{galleryData["galleryTitle"]}</h1>
                <div className="gallery-view__controls">
                    <button className="icon_btn gallery-view__btn" onClick={this.onListViewBtnClick.bind(this, gallerySectionKey, "list")}><img src={listViewIcon} /></button>
                    <button className="icon_btn gallery-view__btn" onClick={this.onGalleryViewBtnClick.bind(this, gallerySectionKey, "gallery")}><img src={galleryViewIcon} /></button>
                </div>
            </div>
            <div className="gallery-items__wrapper">
                {galleryData["galleryItems"].map((galleryItem, galleryItemIndex) => {
                    return (
                        <GalleryItem key={galleryItemIndex}
                                     itemImgSrc={galleryItem.src}
                                     itemText={galleryItem.text}
                                     galleryName={gallerySectionKey}
                                     galleryItemIndex={galleryItemIndex}
                                     modalVisibility = {galleryItem.modalVisibility}
                                     toggleModal={this.props.toggleModal} />
                    )
                })}
            </div>
        </div>
    }
}

GallerySection.propTypes = {
    galleryData: PropTypes.object.isRequired,
    gallerySectionKey: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onSetRef: PropTypes.func.isRequired
}
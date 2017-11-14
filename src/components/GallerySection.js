import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from '../components/GalleryItem'
import listViewIcon from '../images/icons/listViewIcon.svg'
import galleryViewIcon from '../images/icons/galleryViewIcon.svg'

export default class GallerySection extends Component {
    onListViewBtnClick(e) {
        this.props.setView("list")
    }
    onGalleryViewBtnClick(e) {
        this.props.setView("gallery")
    }
    render() {
        console.log(this.props)
        const { galleriesData, viewType, gallerySectionKey } = this.props

        return <div className={viewType=="gallery" ? "gallery__container gallery-view" : "gallery__container list-view"}>
            <div className="gallery__header">
                <h1 className="gallery__title">{gallerySectionKey}</h1>
                <div className="gallery-view__controls">
                    <button className="icon_btn gallery-view__btn" onClick={this.onListViewBtnClick.bind(this)}><img src={listViewIcon} /></button>
                    <button className="icon_btn gallery-view__btn" onClick={this.onGalleryViewBtnClick.bind(this)}><img src={galleryViewIcon} /></button>
                </div>
            </div>
            <div className="gallery-items__wrapper">
                {galleriesData[gallerySectionKey].map((galleryItem, galleryItemIndex) => {
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
    galleriesData: PropTypes.object.isRequired,
    viewType: PropTypes.string.isRequired,
    gallerySectionKey: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
}
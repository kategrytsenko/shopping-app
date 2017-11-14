import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySection from '../components/GallerySection'

export default class Gallery extends Component {
    render() {
        const { galleriesData } = this.props
        return <div>
            {Object.keys(galleriesData).map((key) => {
                return(
                    <GallerySection galleryData={galleriesData[key]}
                                    gallerySectionKey={key}
                                    setView={this.props.setView}
                                    toggleModal={this.props.toggleModal} />
                )
            } )}
        </div>
    }
}

Gallery.propTypes = {
    galleriesData: PropTypes.object.isRequired,
    setView: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
}
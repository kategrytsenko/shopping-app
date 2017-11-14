import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySection from '../components/GallerySection'

export default class Gallery extends Component {
    render() {
        console.log(this.props)
        const { galleriesData, viewType } = this.props
        return <div>
            {Object.keys(galleriesData).map((key) => {
                return(
                    <GallerySection viewType={viewType}
                                    galleriesData={galleriesData}
                                    gallerySectionKey={key}
                                    setView={this.props.setView}
                                    openModal={this.props.openModal}
                                    closeModal={this.props.closeModal}
                                    />
                )
            } )}
        </div>
    }
}

Gallery.propTypes = {
    galleriesData: PropTypes.object.isRequired,
    viewType: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
}
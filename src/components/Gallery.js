import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySection from '../components/GallerySection'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
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

    render() {
        const { galleriesData, setView, toggleModal } = this.props
        return <div onScroll={ () => this.setScrollTop()} className="gallery__wrapper" ref="galleryWrapper">
            {Object.keys(galleriesData).map((key) => {
                return(
                    <GallerySection galleryData={galleriesData[key]}
                                    gallerySectionKey={key}
                                    setView={setView}
                                    toggleModal={toggleModal}
                                    onSetRef={this.setGalleryRef.bind(this)} />
                )
            })}
        </div>
    }
}

Gallery.propTypes = {
    galleriesData: PropTypes.object.isRequired,
    setView: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
}

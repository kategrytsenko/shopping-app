import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Gallery from '../components/Gallery'
import * as galleryActions from '../actions/actions'

class App extends Component {
    render() {
        const { gallery, galleryItem } = this.props
        const { setView, openModal, closeModal } = this.props.galleryActions

        return <div>
            <Gallery {...gallery}
                            {...galleryItem}
                            setView={setView}
                            openModal={openModal}
                            closeModal={closeModal} />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        gallery: state.gallery,
        galleryItem: state.galleryItem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        galleryActions: bindActionCreators(galleryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
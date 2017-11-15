import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Gallery from '../components/Gallery'
import * as galleryActions from '../actions/actions'

class App extends Component {

    render() {
        const { gallery } = this.props;
        const { setView, toggleModal } = this.props.galleryActions;

        return (
            <div>
                <Gallery {...gallery}
                         setView={setView}
                         toggleModal={toggleModal} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch) {
    return {
        galleryActions: bindActionCreators(galleryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
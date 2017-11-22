import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Gallery from '../components/Gallery'
import * as galleryActions from '../actions/actions'

class App extends Component {

    render() {
        const { gallery, basket } = this.props;
        const {
            setView,
            toggleModal,
            toggleBasket,
            addItemToTheCart,
            removeItemFromBasket
        } = this.props.galleryActions;

        return (
            <div>
                <Gallery {...gallery}
                         {...basket}
                         setView = {setView}
                         toggleModal = {toggleModal}
                         toggleBasket = {toggleBasket}
                         addItemToTheCart = {addItemToTheCart}
                         removeItemFromBasket = {removeItemFromBasket} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gallery: state.gallery,
        basket: state.basket
    }
}

function mapDispatchToProps(dispatch) {
    return {
        galleryActions: bindActionCreators(galleryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
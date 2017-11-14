import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Modal extends Component {
    onModalCloseClick() {
        this.props.closeModal()
    }
    render() {
        const { itemImgSrc, itemText } = this.props
        return <div className="modal">
            <div className="modal__window">
                <button className="modal__close-btn" onClick={this.onModalCloseClick.bind(this)}></button>
                <div className="modal__item">
                    <img src={itemImgSrc} />
                    <p>{itemText}</p>
                </div>
            </div>
        </div>
    }
}

Modal.propTypes = {
    itemImgSrc: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
}
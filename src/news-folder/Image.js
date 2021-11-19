import React, { Component } from 'react';

class Image extends Component {
    render() {
        return(
            true && <img src={ this.props.photo } alt=" " />
        )
    }
}

export default Image;
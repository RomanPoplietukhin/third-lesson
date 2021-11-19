import React, { Component } from 'react';

class Special extends Component {
    render() {
        return(
            this.props.isSpecial && <p className="special__field"> Special! </p>
        )
    }
}

export default Special;
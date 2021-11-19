import { Component } from "react";

class Link extends Component {
    render() {
        return(
            true && <a href={ this.props.link }>Link</a>
        )
    }
}

export default Link;
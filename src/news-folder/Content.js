import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
        <div dangerouslySetInnerHTML={{__html: this.props.content}}></div> 
    )        
  }
}

export default Content;

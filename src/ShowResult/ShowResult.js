import React, { Component } from 'react';

class ShowResult extends Component {
  render() {
    return this.props.context.state.codeChunk();
  }
}

export default ShowResult;
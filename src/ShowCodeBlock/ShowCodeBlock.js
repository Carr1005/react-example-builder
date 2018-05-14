import React, { Component } from 'react';


class ShowResult extends Component {
  render() {
  	return this.props.context.state.codeChunk.toString();
  }
}

export default ShowResult;
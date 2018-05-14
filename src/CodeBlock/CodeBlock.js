import React, { Component } from 'react';


class CodeBlock extends Component {
  
  constructor(props) {
    super(props);
    this.props.context.loadCodeChunk(this.props.children);
  }

  render() {
    return null;
  }
}

export default CodeBlock;
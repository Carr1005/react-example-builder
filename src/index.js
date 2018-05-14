import React, { Component } from 'react';
import Description from './Description/Description';
import CodeBlock from './CodeBlock/CodeBlock';
import ShowCodeBlock from './ShowCodeBlock/ShowCodeBlock';
import ShowResult from './ShowResult/ShowResult';

class Example extends Component {
	
	// theme = this.props.theme;
	// dataOfTheme = this.props.jsonData[this.theme];
    // componentName = this.props.componentName;

    state = {
    	codeChunk: 'Code is not provided yet.'
    };
    
    static Description = Description;
    static CodeBlock = CodeBlock;
    static ShowCodeBlock = ShowCodeBlock;
    static ShowResult = ShowResult;

    loadCodeChunk(codeChunk) {
        this.setState({
            codeChunk: codeChunk
    	}, () => {
            console.log(this.state.codeChunk);
        });
    }
	
	render() {
		
		return (
			<React.Fragment>{this.props.children(this)}</React.Fragment>
		);
	}
}

export default Example;
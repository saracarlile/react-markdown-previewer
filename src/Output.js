import React, { Component, PropTypes } from 'react';

const markdown = require( "markdown" ).markdown;

class Output extends Component {

  constructor(props) {
    super(props);

    this.convertMarkdown = this.convertMarkdown.bind(this);
  }

  convertMarkdown = () => {
    let converted = markdown.toHTML(this.props.input);
    return {__html: converted};
  }

    render() {
      return (

        <div className="content Output" dangerouslySetInnerHTML={this.convertMarkdown()} >

        </div>
      );
    }
  }
  

  
  export default Output;
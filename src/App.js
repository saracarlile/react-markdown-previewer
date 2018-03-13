import React, { Component } from 'react';

import './App.css';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import {markdown} from 'markdown';
import Output from './Output';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      output: "Hello _world_!  "
    };

  }

  handleChange = (e) => {
    this.setState({ output: e.target.value });
  }




  render() {

    this.getFullYear = new Date().getFullYear();


    return (
      

      <div className="App container">
        <div className="jumbotron">
          <h2>React Markdown Previewer</h2>
         

        </div>
        <div className="row">
          <div className="col-xs-6">
            <form>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel id="label">Enter Markdown</ControlLabel>
                <FormControl componentClass="textarea" value={this.state.output} onChange={this.handleChange}  rows={10} />
              </FormGroup>
            </form>
          </div>

          <div className="col-xs-6">
            <p className="preview">Markdown Preview</p>

            <Output input={this.state.output}/>

          </div>
        </div>
        
        <div className="row">
          <div className='col-xs-6'>
            <h3>Test your markdown</h3>
            <p>Markdown is a lightweight markup language with plain text formatting syntax.  Enter Github-flavored
            markdown in the "Enter Markdown" box and see the result in the "Markdown Preview" area.</p>
          </div>
          <div className='col-xs-6'>
            <h3>Example markdown syntax</h3>
            <p>Headers</p>
            <div className="markdown-box">
            # First-level heading <br />
            #### Fourth-level heading
            </div>
            <p>Strong Text</p>
            <div className="markdown-box">
            Use asteriks for *emphasized* text<br />
            Or use underscores for _emphasized_ text
            </div>
            <p>Inline Code</p>
            <div className="markdown-box">
            Inline code descriptions can be done via the use of the backtick quotes<br />
            Markdown is a `<em>text-to-html</em>` conversion tool for writers.
            </div>
            <p>Line Returns</p>
            <div className="markdown-box">
            Place two empty spaces after a line to force a line return
            </div>
            <p>Links</p>
            <div className="markdown-box">
            This is an [Link to Google Homepage](https://google.com/)
            </div>
            
          </div>
        </div>
        <footer>
         <p className="text-center">designed and developed by s_coder {this.getFullYear}</p>
        </footer>
      </div>

    );
  }
}

export default App;

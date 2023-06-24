import React, { Component } from 'react'
import '../src/styles/App.css'
import Form from './Components/Form';
import Preview from './Components/Preview'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      preview: false
    }
  }

  previewHandler = () => {
    this.setState({
      preview: !this.state.preview
    })
}

  render() {
    return (
      <div className='App'>
        <h1 id='header'>CVgen</h1>
        {this.state.preview ? <Preview previewHandler={this.previewHandler}/>:<Form previewHandler={this.previewHandler}/>}
      </div>
    )
  }
}

export default App;

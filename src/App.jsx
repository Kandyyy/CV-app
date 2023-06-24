import React, { Component } from 'react'
import '../src/styles/App.css'
import Form from './Components/Form';
import Preview from './Components/Preview'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      preview: false,
      generalInfo: {
        fname: "John",
        lname: "Doe",
        email: "JohnDoe@gmail.com",
        phno: "9812830174"
      }
    }
  }

  updateName = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                fname: e.target.value
            }
        });
    });
}

updateLname = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                lname: e.target.value
            }
        });
    });
}

updateEmail = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                email: e.target.value
            }
        });
    });
}

updatePh = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                phno: e.target.value
            }
        });
    });
}

  previewHandler = () => {
    this.setState((prevState)=>{
      return ({
          ...prevState,
          preview: !this.state.preview
      });
  });
}

  render() {
    return (
      <div className='App'>
        <h1 id='header'>CVgen</h1>
        {this.state.preview ? <Preview previewHandler={this.previewHandler} fname={this.state.generalInfo.fname} lname={this.state.generalInfo.lname} email={this.state.generalInfo.email} phno={this.state.generalInfo.phno} />:<Form previewHandler={this.previewHandler} updateName={this.updateName} updateLname={this.updateLname} updateEmail={this.updateEmail} updatePh={this.updatePh}/>}
      </div>
    )
  }
}

export default App;

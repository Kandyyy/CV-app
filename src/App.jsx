import React, { Component } from 'react';
import '../src/styles/App.css';
import Form from './Components/Form';
import Preview from './Components/Preview';
import ppic from "./user.png"

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      preview: false,
      generalInfo: {
        fname: "John",
        lname: "Doe",
        email: "JohnDoe@gmail.com",
        phno: "9812830174",
        prof: "Software Developer",
        address: "47, Whites Road, Royapeetah",
        pic: ppic
      },
      educationInfo: [],
      workInfo: []
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

  updateProfession = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                prof: e.target.value
            }
        });
    });
  }

  updateAddress = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                address: e.target.value
            }
        });
    });
  }

  updateProfilePic = (e) => {
    this.setState((prevState)=>{
        return ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                pic: e.target.value
            }
        });
    });
  }

  updateEducation = (data) => {
    this.setState((prevState)=>{
        let updatedEducationInfo = [...prevState.educationInfo, data]; 
        return ({
          ...prevState,
          educationInfo: updatedEducationInfo
        });
    });
  }

  updateWork = (data) => {
    this.setState((prevState)=>{
      let updatedWorkInfo = [...prevState.workInfo, data]; 
      return ({
        ...prevState,
        workInfo: updatedWorkInfo
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

  EduFormHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let jsonData = Object.fromEntries(formData.entries());
    this.updateEducation(jsonData);
    let inputFields = document.querySelectorAll("#edu-inp");
    for(let i = 0;i<inputFields.length;i++){
      inputFields[i].value = "";
    }
  }

  WorkFormHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let jsonData = Object.fromEntries(formData.entries());
    this.updateWork(jsonData);
    let inputFields = document.querySelectorAll("#work-inp");
    for(let i = 0;i<inputFields.length;i++){
      inputFields[i].value = "";
    }
  }


  render() {
    return (
      <div className='App'>
        <h1 id='header'>CVgen</h1>
        {this.state.preview ? (
          <Preview
            previewHandler={this.previewHandler}
            fname={this.state.generalInfo.fname}
            lname={this.state.generalInfo.lname}
            email={this.state.generalInfo.email}
            phno={this.state.generalInfo.phno}
            prof={this.state.generalInfo.prof}
            address={this.state.generalInfo.address}
            pic={this.state.generalInfo.pic}
            educationInfo={this.state.educationInfo}
            workInfo={this.state.workInfo}
          />
        ) : (
          <Form
            previewHandler={this.previewHandler}
            updateName={this.updateName}
            updateLname={this.updateLname}
            updateEmail={this.updateEmail}
            updatePh={this.updatePh}
            updateProfession={this.updateProfession}
            updateAddress={this.updateAddress}
            updateProfilePic={this.updateProfilePic}
            EduFormHandler={this.EduFormHandler}
            WorkFormHandler={this.WorkFormHandler}
          />
        )}
      </div>
    )
  }
}

export default App;

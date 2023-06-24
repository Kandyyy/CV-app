import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Work from './Work';

class Form extends Component {
  constructor(props) {
        super(props)
        this.state = {
            eduClicked: false,
            workClicked: false,
            preview: false,

            generalInfo: {
                fname: "",
                lname: "",
                email: "",
                phno: ""
            },
        }
    }

    eduHandler = () => {
            this.setState((prevState)=>{
                return ({
                    ...prevState,
                    eduClicked: true
                });
            });
    }

    workHandler = () => {
        this.setState((prevState)=>{
            return ({
                ...prevState,
                workClicked: true
            });
        });
    }

    eduHandlerNegate = () => {
        this.setState((prevState)=>{
            return ({
                ...prevState,
                eduClicked: false
            });
        });
    }

    workHandlerNegate = () => {
        this.setState((prevState)=>{
            return ({
                ...prevState,
                workClicked: false
            });
        });
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

  render() {
    return (
        <div id='form-div'>
            <GeneralInfo updateName={this.updateName} updateLname={this.updateLname} updateEmail={this.updateEmail} updatePh={this.updatePh}/>
            <div className="linebreak"></div>
            <div id='education-div'>
                <h4 id='education'>Education</h4>
                <button className="btn btn-dark" id='add' onClick={this.eduHandler.bind(this)}>Add</button>
                {this.state.eduClicked && (<Education eduHandlerNegate={this.eduHandlerNegate} />)}
                <div className="linebreak"></div>
            </div>
            <div id='work-div'>
            <h4 id='work'>Work Experience</h4>
                <button className="btn btn-dark" id='add' onClick={this.workHandler.bind(this)}>Add</button>
                {this.state.workClicked && (<Work workHandlerNegate={this.workHandlerNegate} />)}
                <div className="linebreak"></div>
            </div>
            <button className='btn btn-primary' id='preview' onClick={this.props.previewHandler}>Preview</button>
        </div>
    )
  }
}

export default Form;
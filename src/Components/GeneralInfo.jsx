import React, { Component } from 'react'

class GeneralInfo extends Component {
  render() {
    return (
      <div className='form' id='cv-form'>
        <div className="row">
            <div className="col">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="John" aria-label="First name" id='fname' defaultValue="" onChange={this.props.updateName}/>
            </div>
            <div className="col">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Doe" aria-label="Last name" id='lname' onChange={this.props.updateLname}/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder='johndoe@gmail.com' onChange={this.props.updateEmail}/>
            </div>
            <div className="col">
                <label htmlFor="ph" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id='ph' placeholder='9829237128' onChange={this.props.updatePh}/>
            </div>
        </div>
        <div className="row">
          <div className="col">
                <label htmlFor="prof" className="form-label">Profession</label>
                <input type="text" className="form-control" id='prof' placeholder='Software Developer' onChange={this.props.updateProfession}/>
          </div>
          <div className="col">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id='address' placeholder='47, Whites Road, Royapeetah' onChange={this.props.updateAddress}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="formFile" className="form-label">Picture</label>
            <input className="form-control" type="file" id="formFile" onChange={this.props.updateProfilePic}/>
          </div>
        </div>
      </div>
    )
  }
}

export default GeneralInfo;
import React, { Component } from "react";
class Form extends Component {
  render() {
    const { handleOnChange, resumeData } = this.props;
    return (
      <form>
        <input
          value={resumeData.firstName}
          name="firstName"
          onChange={handleOnChange}
          placeholder="First Name"
        />
        <input
          value={resumeData.lastName}
          name="lastName"
          onChange={handleOnChange}
          placeholder="Last Name"
        />
        <input value={resumeData.designation} name="designation" onChange={handleOnChange} placeholder="Designation" />
        <input value={resumeData.email} name="email" onChange={handleOnChange} placeholder="Email" />
        <input value={resumeData.mobile} name="mobile" onChange={handleOnChange} placeholder="Mobile" />
        <input value={resumeData.address} name="address" onChange={handleOnChange} placeholder="Address" />
        <input value={resumeData.website} name="website" onChange={handleOnChange} placeholder="Website" />
        <input value="Submit" onClick={this.handleOnSubmit} type="submit" />
      </form>
    );
  }
}

export default Form;

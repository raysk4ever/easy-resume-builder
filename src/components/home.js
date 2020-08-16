import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className='landing home-landing'>
        <h1>Resume Builder</h1>
        <Link to="create">
          <button>Create a Resume now</button>
        </Link>
      </div>
    );
  }
}

export default Home;
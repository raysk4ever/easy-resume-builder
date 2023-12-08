import React from "react";
import { Link } from "react-router-dom";
const Home = ()=> {
    return (
      <div className='landing home-landing'>
        <div>
          <h1>Resume Builder</h1>
          <Link to="create">
            <button className='button-gra'>Create a Resume now</button>
          </Link>
        </div>
      </div>
    );
}

export default Home;
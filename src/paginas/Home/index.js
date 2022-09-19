import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <Link
        to="/selector"
      >
        <img alt="Logo Netflix" src="https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif"/>
      </Link>
    </div>
  )
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/video"> {/* Add this Link component to navigate to the video page */}
          <button>Show Video</button>
        </Link>
      </header>
    </div>
  );
};

export default Home;

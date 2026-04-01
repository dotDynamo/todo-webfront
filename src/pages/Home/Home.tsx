import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    //variables
    const navigate = useNavigate();
    //functions
    const navigateToSearch = () => {
        navigate("/search")
    }

    const navigateToTasks = (id: string) => {
        navigate
    }
    //use effects

    //render
    return(
        <div>
           <div>
            <Link to="/about">About</Link>
            <button onClick={navigateToSearch}>Go to search</button>
            <button onClick={() => navigateToTasks("123")}>Go to task 123</button>
           </div>
           <h1>Dashboard</h1>
        </div>
    );
};

export default Home;
import React from 'react'
import { useParams } from 'react-router-dom';

const Tasks = () => {
    //variables
    const {id} = useParams();
    //functions

    //use effects

    //render
    return(
        <div>
            Página de tasks
            <p>Hola tasks</p>
        </div>
    );
};

export default Tasks;
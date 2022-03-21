import React, {useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount); 
        // console.log(steps)
    }
    	  // advanced
          useEffect( () =>{
            console.log(steps)
        },[steps])
    
    return (
        <div>
            <h3>I need a smart watch</h3>
            <h5>My current steps: {steps}</h5>
            <button onClick={increaseSteps}>Count steps</button>
        </div>
    );
};

export default Watch;
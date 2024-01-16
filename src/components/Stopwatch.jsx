import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
    
        if (isRunning) {
          timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
          }, 1000);
        }
    
        return () => {
          clearInterval(timer);
        };
      }, [isRunning]);
    
      const handleStartStop = () => {
        setIsRunning((prevState) => !prevState);
      };
    
      const handleReset = () => {
        setTime(0);
        setIsRunning(false);
      };
    

    return (
        <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold mb-4'>Stopwatch</h1>
            <p className='text-2xl mb-4'>{`Time: ${time}s`}</p>
            <button
                onClick={handleStartStop}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
                isRunning ? 'bg-red-500' : ''
                }`}
            >
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
                onClick={handleReset}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                Reset
            </button>
        </div>
 );
};
    
export default Stopwatch;
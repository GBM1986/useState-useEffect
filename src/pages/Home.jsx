import React from 'react';
import Counter from '../components/Counter.jsx';
import Greeting from '../components/Greeting.jsx';
import Stopwatch from '../components/Stopwatch.jsx';

function Home() {
    return (
        <div>
            <Greeting />
            <Counter />
            <Stopwatch />
        </div>
    )
}
    
export default Home;
    
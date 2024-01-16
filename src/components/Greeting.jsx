import React, { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value)
    };

    const handleLogName = () => {
        console.log(`Name: ${name}`);
        setName('');
      };

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
            <p className="mb-4 text-lg font-bold">{`Send a greeting to ${name ? name : '...'}`}</p>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded mb-4"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleLogName}>Log Name</button>
        </div>
    )
}

export default Greeting
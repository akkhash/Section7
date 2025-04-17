import { useState } from 'react';

export default function Child({ changeUser, a, b }) {
    const [inputName, setInputName] = useState("");
    const [inputSalary, setInputSalary] = useState("");
    const [inputLocation, setInputLocation] = useState("");

    const changeFun = () => {
        changeUser(inputName, inputSalary, inputLocation);
    };

    return (
        <div>
            <h3>Update User Information</h3>
            Name: <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <br />
            Salary: <input type="number" value={inputSalary} onChange={(e) => setInputSalary(e.target.value)} />
            <br />
            Location: <input type="text" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} />
            <br />
            <br /> 
            <button onClick={changeFun}>Update User</button>
            <br />
            <p>
                Props Received: {b} - {a} = {b-a}
            </p>
        </div>
    );
}
import { useState } from 'react';
import Child from './Child.jsx';

export default function Parent() {
    const [name, setName] = useState("n1");
    const [salary, setSalary] = useState(0);
    const [location, setLocation] = useState("l1");

    const changeUser = (n, s, l) => {
        setName(n);
        setSalary(s);
        setLocation(l);
    };

    return (
        <div>
            <div>
                <h3>User Information</h3>
                Name: {name}
                <br />
                Salary: <i className="fa fa-rupee"></i> {salary}
                <br />
                Location: {location}
            </div>
            <br /><br /><br />
            <Child changeUser={changeUser} a={10} b={20} />
        </div>
    );
}
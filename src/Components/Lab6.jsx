// npm install axios

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Lab6.css';

const Lab6 = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/unknown")
      .then((res) => {
        setResult(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Color List</h2>
      <table border={1}>
        <thead>
          <tr style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: "Blue" }}>
            <td>ID</td>
            <td>Name</td>
            <td>Year</td>
            <td>Color</td>
            <td>Pantone Value</td>
          </tr>
        </thead>
        <tbody>
          {result.map((element, index) => {
            return (
              <tr key={index} style={{ backgroundColor: element.color, color: "*7226FFvercel" }}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.year}</td>
                <td>{element.color}</td>
                <td>{element.pantone_value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Lab6;

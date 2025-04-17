import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1 from './Components/Lab1'
import Lab2 from './Components/Lab2'
import Lab3 from './Components/Lab3'
import Lab4 from './Components/Lab4'
import Lab5 from './Components/Lab5'
import { Link } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to Lab Experiments - Section 7</h1>
     <table align='center' border="3" width="85%">
      <tr>
        <td> S.No </td>
        <td> Lab </td>
        <td> Description </td>
      </tr>

      <tr>
        <td> 1 </td>
        <td> <Link to="/Lab1">Lab1</Link> </td>
        <td> Table </td>
      </tr>


      <tr>
        <td> 2 </td>
        <td> <Link to="/Lab2">Lab2</Link> </td>
        <td> KL Logo Page </td>
      </tr>


      <tr>
        <td> 3 </td>
        <td> <Link to="/Lab3">Lab3</Link> </td>
        <td> User Information </td>
      </tr>

      <tr>
        <td> 4 </td>
        <td> <Link to="/Lab4">Lab4</Link> </td>
        <td> Description </td>
      </tr>
      

      <tr>
        <td> 5 </td>
        <td> <Link to="/Lab5">Lab5</Link> </td>
        <td> Login page </td>
      </tr>

      <tr>
        <td> 6 </td>
        <td> <Link to="/Lab6">Lab6</Link> </td>
        <td> Color List </td>
      </tr> 

      <tr>
        <td> 8 </td>
        <td> <Link to="/Lab8">Lab8</Link> </td>
        <td> Spring Boot with Rest API and CRUD Operations </td>
      </tr>

      <tr>
        <td> 10 </td>
        <td> <Link to="/Lab10">Lab10</Link> </td>
        <td> React Login with Admin Dashboard </td>
      </tr> 

      <tr>
        <td> 10 </td>
        <td> <Link to="/Lab10a">Lab10a</Link> </td>
        <td> Description </td>
      </tr> 

      <tr>
        <td> 12 </td>
        <td> <Link to="/Lab12">Lab12</Link> </td>
        <td> Description </td>
      </tr> 


    </table>
     </>
  )
}
    
  


export default App
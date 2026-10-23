import React, { useState, useEffect } from "react";
import "./style.css";


export default function App() {
  const [page, setPage] = useState("home");
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.log(err));
  }, []);


  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("form")}>Employee Form</button>
      </nav>


      {page === "home" && (
        <div className="container">
          <h1>Employee Management System</h1>
          <p>Welcome to the Employee Dashboard!</p>
        </div>
      )}


      {page === "dashboard" && (
        <div className="container">
          <h2>Employee Dashboard</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


      {page === "form" && (
        <div className="container">
          <h2>Employee Form</h2>
          <form onSubmit={e => {
            e.preventDefault();
            alert("Form submitted!");
          }}>
            <label>Name</label>
            <input placeholder="Enter name" required />


            <label>Designation</label>
            <input placeholder="Enter designation" required />


            <label>Location</label>
            <input placeholder="Enter location" required />


            <label>Salary</label>
            <input type="number" placeholder="Enter salary" required />


            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
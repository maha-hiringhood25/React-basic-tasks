import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import "./App.css";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>👥 Employee List</h1>
      <EmployeeTable />
    </div>
  );
}

export default App;


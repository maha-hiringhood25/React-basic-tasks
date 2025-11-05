import React from 'react';
import './App.css';
import AcademicInfo from './components/AcademicInfo';
import AdmissionForm from './components/AdmissionForm';
import BasicDetails from './components/BasicDetails';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        🎓 Student Admission Form
      </h1>
       <AdmissionForm/>
       <BasicDetails/>
       <AcademicInfo/>
       <PersonalInfo/>
    </div>

   
  );
}

export default App;

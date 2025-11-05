import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AcademicInfo from './AcademicInfo';
import BasicDetails from './BasicDetails';

const steps = ['Basic Details', 'Academic Info', 'Personal Info'];

 export default function AdmissionForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
   return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>

      {activeStep === 0 && <BasicDetails onNext={handleNext} />}
      {activeStep === 1 && <AcademicInfo onNext={handleNext} onBack={handleBack} />}
      {activeStep === 2 && <PersonalInfo onNext={handleSubmit} onBack={handleBack} />}

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Please review the submitted data:</Typography>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => alert('Form submitted!')} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
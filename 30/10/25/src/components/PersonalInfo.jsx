import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

export default function PersonalInfo({ onNext, onBack }) {
  const formik = useFormik({
    initialValues: { parentName: '', phone: '', email: '' },
    validationSchema: Yup.object({
      parentName: Yup.string().required('Required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Must be 10 digits').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => onNext(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField fullWidth margin="normal" label="Parent Name" {...formik.getFieldProps('parentName')} />
      <TextField fullWidth margin="normal" label="Phone" {...formik.getFieldProps('phone')} />
      <TextField fullWidth margin="normal" label="Email" {...formik.getFieldProps('email')} />
      <Button onClick={onBack} sx={{ mr: 2 }}>Back</Button>
      <Button type="submit" variant="contained" disabled={!formik.isValid}>Submit</Button>
    </form>
  );
}

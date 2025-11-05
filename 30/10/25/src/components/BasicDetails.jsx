import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

export default function BasicDetails({ onNext }) {
  const formik = useFormik({
    initialValues: { name: '', dob: '', gender: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      dob: Yup.string().required('Required'),
      gender: Yup.string().required('Required'),
    }),
    onSubmit: (values) => onNext(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField fullWidth margin="normal" label="Full Name" name="name" {...formik.getFieldProps('name')} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
      <TextField fullWidth margin="normal" label="Date of Birth" name="dob" {...formik.getFieldProps('dob')} error={formik.touched.dob && Boolean(formik.errors.dob)} helperText={formik.touched.dob && formik.errors.dob} />
      <TextField fullWidth margin="normal" label="Gender" name="gender" {...formik.getFieldProps('gender')} error={formik.touched.gender && Boolean(formik.errors.gender)} helperText={formik.touched.gender && formik.errors.gender} />
      <Button type="submit" variant="contained" disabled={!formik.isValid}>Next</Button>
    </form>
  );
}

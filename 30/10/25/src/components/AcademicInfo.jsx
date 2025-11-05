import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

export default function AcademicInfo({ onNext, onBack }) {
  const formik = useFormik({
    initialValues: { grade: '', school: '', subjects: '' },
    validationSchema: Yup.object({
      grade: Yup.string().required('Required'),
      school: Yup.string().required('Required'),
      subjects: Yup.string().required('Required'),
    }),
    onSubmit: (values) => onNext(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField fullWidth margin="normal" label="Grade" {...formik.getFieldProps('grade')} />
      <TextField fullWidth margin="normal" label="School Name" {...formik.getFieldProps('school')} />
      <TextField fullWidth margin="normal" label="Subjects Interested In" {...formik.getFieldProps('subjects')} />
      <Button onClick={onBack} sx={{ mr: 2 }}>Back</Button>
      <Button type="submit" variant="contained" disabled={!formik.isValid}>Next</Button>
    </form>
  );
}

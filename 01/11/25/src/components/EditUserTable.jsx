import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function EditUserModal({ user, onClose, onSave }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: user || { name: '', email: '', role: '', status: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      role: Yup.string().required('Required'),
      status: Yup.string().required('Required'),
    }),
    onSubmit: (values) => onSave(values),
  });

  if (!user) return null;

  return (
    <Dialog open={!!user} onClose={onClose}>
        <DialogTitle>Edit User</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField fullWidth margin="normal" label="Name" {...formik.getFieldProps('name')} />
          <TextField fullWidth margin="normal" label="Email" {...formik.getFieldProps('email')} />
          <TextField fullWidth margin="normal" label="Role" {...formik.getFieldProps('role')} />
          <TextField fullWidth margin="normal" label="Status" {...formik.getFieldProps('status')} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}


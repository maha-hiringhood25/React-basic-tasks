import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TableSortLabel,
} from '@mui/material';

const mockEmployees = [
  { name: 'Maha', email: 'maha@example.com', department: 'HR', status: 'Active' },
  { name: 'Anu', email: 'anu@example.com', department: 'Engineering', status: 'Inactive' },
  { name: 'Akhila', email: 'akhila@example.com', department: 'Marketing', status: 'Active' },
  { name: 'Deepu', email: 'deepu@example.com', department: 'Engineering', status: 'Active' },
  { name: 'Madhu', email: 'madhu@example.com', department: 'Finance', status: 'Inactive' },
  { name: 'Kusuma', email: 'kusu@example.com', department: 'HR', status: 'Active' },
  { name: 'Jagath', email: 'jagath@example.com', department: 'Engineering', status: 'Active' },
  { name: 'Tarak', email: 'tarak@example.com', department: 'Finance', status: 'Inactive' },
  { name: 'Sri', email: 'sri@example.com', department: 'HR', status: 'Active' },
];

const columns = ['name', 'email', 'department', 'status'];

export default function EmployeeTable() {
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(column);
    };

  const sortedData = [...mockEmployees].sort((a, b) => {
    const valA = a[orderBy].toLowerCase();
    const valB = b[orderBy].toLowerCase();
    return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper className="table-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="table-header">
              {columns.map((col) => (
                <TableCell key={col}>
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : 'asc'}
                    onClick={() => handleSort(col)}
                  >
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((emp, index) => (
              <TableRow key={index} className="table-row">
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        <TablePagination
        component="div"
        count={mockEmployees.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[4, 6, 10]}
      />
    </Paper>
  );
}







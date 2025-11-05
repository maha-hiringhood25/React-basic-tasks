import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Chip, Checkbox, Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditUserTable from './EditUserTable';
import ConfirmDelete from './ConfirmDelete';
import { exportToCSV } from './ExportCSV';
import './UserTable.css'; // ✅ Import CSS

const initialUsers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Carol', email: 'carol@example.com', role: 'Manager', status: 'Pending' },
];

export default function UserTable() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleEdit = (user) => setSelectedUser(user);
  const handleDelete = (id) => setDeleteUserId(id);

  const handleUpdate = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setSelectedUser(null);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter((u) => u.id !== deleteUserId));
    setDeleteUserId(null);
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
   const handleExport = () => {
    const selectedUsers = users.filter((u) => selectedIds.includes(u.id));
    exportToCSV(selectedUsers, 'selected_users');
  };

  const statusColor = {
    Active: 'success',
    Inactive: 'error',
    Pending: 'warning',
  };

  return (
    <Paper className="user-table-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="user-table-header">
              <TableCell padding="checkbox"></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="user-table-row" hover>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.includes(user.id)}
                    onChange={() => handleSelect(user.id)}
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                    <Chip label={user.status} color={statusColor[user.status]} />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user)}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(user.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedIds.length > 0 && (
        <Button variant="outlined" sx={{ mt: 2 }} onClick={handleExport}>
          Export Selected to CSV
        </Button>
      )}

      <EditUserTable user={selectedUser} onClose={() => setSelectedUser(null)} onSave={handleUpdate} />
      <ConfirmDelete open={!!deleteUserId} onClose={() => setDeleteUserId(null)} onConfirm={handleConfirmDelete} />
    </Paper>
  );
}




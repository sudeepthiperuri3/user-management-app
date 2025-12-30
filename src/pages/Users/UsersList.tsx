import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { ProfileMenu } from '../../components/ProfileMenu/ProfileMenu';
import { UserTable } from '../../components/UserTable';
import { UserForm } from '../../components/UserForm';
import { ConfirmDialog } from '../../components/ConfirmDialog/ConfirmDialog';
import { useNotification } from '../../components/NotificationProvider/NotificationProvider';
import { useUsers, useUserMutations } from '../../hooks/useUsers';
import type { User, UserFormData } from '../../types/user';

export const UsersList: React.FC = () => {
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { users, loading, error, refetch } = useUsers();
  const { createUser, updateUser, deleteUser, loading: mutationLoading } = useUserMutations();

  const [formOpen, setFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setFormOpen(true);
  };

  const handleViewUser = (user: User) => {
    navigate(`/users/${user.id}`);
  };

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return;

    const success = await deleteUser(userToDelete.id);
    if (success) {
      showNotification('User deleted successfully', 'success');
      setDeleteDialogOpen(false);
      setUserToDelete(null);
      refetch();
    } else {
      showNotification('Failed to delete user', 'error');
    }
  };

  const handleFormSubmit = async (data: UserFormData) => {
    if (selectedUser) {
      // Update existing user
      const updatedUser = await updateUser(selectedUser.id, data);
      if (updatedUser) {
        showNotification('User updated successfully', 'success');
        refetch();
      } else {
        showNotification('Failed to update user', 'error');
        throw new Error('Failed to update user');
      }
    } else {
      // Create new user
      const newUser = await createUser(data);
      if (newUser) {
        showNotification('User created successfully', 'success');
        refetch();
      } else {
        showNotification('Failed to create user', 'error');
        throw new Error('Failed to create user');
      }
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      minWidth: '1000px',
      justifyContent: 'center',
      py: 4,
      px: 2
    }}>
      <Box sx={{ width: '100%', maxWidth: '1600px' }}>
        <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5,
              }}
            >
              User Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage and organize your users efficiently
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddUser}
              size="large"
            >
              Add User
            </Button>
            <ProfileMenu />
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <UserTable
          users={users}
          loading={loading}
          onEdit={handleEditUser}
          onDelete={handleDeleteClick}
          onView={handleViewUser}
        />
      </Paper>

      <UserForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setSelectedUser(null);
        }}
        onSubmit={handleFormSubmit}
        user={selectedUser}
        loading={mutationLoading}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        title="Delete User"
        message={`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => {
          setDeleteDialogOpen(false);
          setUserToDelete(null);
        }}
        loading={mutationLoading}
        confirmText="Delete"
        confirmColor="error"
      />
      </Box>
    </Box>
  );
};

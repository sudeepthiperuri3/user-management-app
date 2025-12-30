import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Paper,
  Box,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Alert,
  Divider,
  Stack,
  Card,
  CardContent,
  Tooltip,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  Badge as BadgeIcon,
  ToggleOn as ToggleOnIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import { useUser, useUserMutations } from '../../hooks/useUsers';
import { UserForm } from '../../components/UserForm';
import { ConfirmDialog } from '../../components/ConfirmDialog/ConfirmDialog';
import { useNotification } from '../../components/NotificationProvider/NotificationProvider';
import type { UserFormData, UserRole, UserStatus } from '../../types/user';

export const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { user, loading, error } = useUser(id);
  const { updateUser, deleteUser, loading: mutationLoading } = useUserMutations();

  const [formOpen, setFormOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return 'error';
      case 'manager':
        return 'warning';
      case 'user':
        return 'info';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status: UserStatus) => {
    return status === 'active' ? 'success' : 'default';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleEdit = () => {
    setFormOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!user) return;

    const success = await deleteUser(user.id);
    if (success) {
      showNotification('User deleted successfully', 'success');
      navigate('/users');
    } else {
      showNotification('Failed to delete user', 'error');
    }
  };

  const handleFormSubmit = async (data: UserFormData) => {
    if (!user) return;

    const updatedUser = await updateUser(user.id, data);
    if (updatedUser) {
      showNotification('User updated successfully', 'success');
      window.location.reload(); // Refresh to show updated data
    } else {
      showNotification('Failed to update user', 'error');
      throw new Error('Failed to update user');
    }
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', py: 4, px: 2 }}>
        <Box sx={{ width: '100%', maxWidth: '1600px' }}>
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
            <CircularProgress />
          </Box>
        </Box>
      </Box>
    );
  }

  if (error || !user) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', py: 4, px: 2 }}>
        <Box sx={{ width: '100%', maxWidth: '1600px' }}>
          <Alert severity="error">
            {error || 'User not found'}
          </Alert>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/users')}
            sx={{ mt: 2 }}
          >
            Back to Users
          </Button>
        </Box>
      </Box>
    );
  }

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
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/users')}
          sx={{ mb: 3 }}
        >
          Back to Users
        </Button>

        <Paper sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', sm: 'flex-start' }, 
            gap: 2,
            mb: 4 
          }}>
            <Box sx={{ flex: 1 }}>
              <Tooltip title={user.name} arrow placement="top">
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '600px',
                    cursor: 'default',
                  }}
                >
                  {user.name}
                </Typography>
              </Tooltip>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              <Chip
                label={user.role.toUpperCase()}
                color={getRoleColor(user.role)}
                size="small"
              />
              <Chip
                label={user.status.toUpperCase()}
                color={getStatusColor(user.status)}
                size="small"
                variant="outlined"
              />
            </Stack>
          </Box>

          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* User Details */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mb: 3 }}>
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Email</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                {user.email}
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BadgeIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Role</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ToggleOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Status</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Created Date</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                {formatDate(user.createdAt)}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              User Information
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>ID:</strong> {user.id}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Name:</strong> {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Role:</strong> {user.role}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Status:</strong> {user.status}
            </Typography>
          </CardContent>
        </Card>
      </Paper>

      <UserForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        user={user}
        loading={mutationLoading}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        title="Delete User"
        message={`Are you sure you want to delete ${user.name}? This action cannot be undone.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteDialogOpen(false)}
        loading={mutationLoading}
        confirmText="Delete"
        confirmColor="error"
      />
      </Box>
    </Box>
  );
};

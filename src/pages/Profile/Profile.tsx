import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  Divider,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  // Mock user data
  const mockProfile = {
    name: 'Admin User',
    email: 'test@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    role: 'Administrator',
    department: 'IT Management',
    joinDate: 'January 15, 2024',
    bio: 'Experienced administrator with a passion for user management and system optimization. Leading the IT team to ensure seamless operations.',
    stats: {
      usersManaged: 156,
      projectsCompleted: 45,
      teamSize: 12,
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        py: 4,
        px: 2,
     width: '1000px'
      }}
    >
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/users')}
          sx={{ mb: 3 }}
        >
          Back to Dashboard
        </Button>

        <Paper sx={{ p: 4 }}>
          {/* Profile Header */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'flex-start' },
              gap: 3,
              mb: 4,
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                fontSize: '3rem',
                fontWeight: 700,
              }}
            >
              AU
            </Avatar>

            <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {mockProfile.name}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
                sx={{ mb: 2 }}
              >
                <Chip
                  label={mockProfile.role}
                  color="primary"
                  size="medium"
                />
                <Chip
                  label={mockProfile.department}
                  variant="outlined"
                  size="medium"
                />
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {mockProfile.bio}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                size="small"
              >
                Edit Profile
              </Button>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Contact Information */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Contact Information
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <EmailIcon sx={{ color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Email Address
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {mockProfile.email}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #fb923c 0%, #a855f7 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <PhoneIcon sx={{ color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Phone Number
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {mockProfile.phone}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <LocationIcon sx={{ color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Location
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {mockProfile.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #fb923c 0%, #a855f7 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <CalendarIcon sx={{ color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Join Date
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {mockProfile.joinDate}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Statistics */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Statistics
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                    color: 'white',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {mockProfile.stats.usersManaged}
                    </Typography>
                    <Typography variant="body2">Users Managed</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #fb923c 0%, #a855f7 100%)',
                    color: 'white',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {mockProfile.stats.projectsCompleted}
                    </Typography>
                    <Typography variant="body2">Projects Completed</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
                    color: 'white',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {mockProfile.stats.teamSize}
                    </Typography>
                    <Typography variant="body2">Team Members</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

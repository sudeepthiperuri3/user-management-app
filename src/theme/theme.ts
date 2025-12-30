import { createTheme } from '@mui/material/styles';

// Unique futuristic dark theme with electric purple and orange accents
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // Electric purple
      light: '#c084fc',
      dark: '#7e22ce',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fb923c', // Vibrant orange
      light: '#fdba74',
      dark: '#ea580c',
      contrastText: '#000000',
    },
    background: {
      default: '#0f0f23',
      paper: 'rgba(24, 24, 42, 0.85)',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#06b6d4',
      light: '#22d3ee',
      dark: '#0891b2',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(168, 85, 247, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 24px rgba(168, 85, 247, 0.5)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #a855f7 0%, #fb923c 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #c084fc 0%, #fdba74 100%)',
          },
        },
        outlined: {
          borderColor: 'rgba(168, 85, 247, 0.5)',
          '&:hover': {
            borderColor: '#a855f7',
            backgroundColor: 'rgba(168, 85, 247, 0.08)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(168, 85, 247, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(168, 85, 247, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#a855f7',
              boxShadow: '0 0 12px rgba(168, 85, 247, 0.4)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(24, 24, 42, 0.7)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(168, 85, 247, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(168, 85, 247, 0.4)',
            boxShadow: '0 12px 40px 0 rgba(168, 85, 247, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(168, 85, 247, 0.1)',
        },
        head: {
          fontWeight: 600,
          background: 'rgba(168, 85, 247, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(32px)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
        },
      },
    },
  },
});

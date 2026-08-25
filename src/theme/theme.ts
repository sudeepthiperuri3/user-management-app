import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#aaa8ff', light: '#c4c3ff', dark: '#7d7bd8', contrastText: '#101521' },
    secondary: { main: '#bdf774', light: '#d5ffa8', dark: '#8fc952', contrastText: '#101521' },
    background: { default: '#101521', paper: '#171e2c' },
    text: { primary: '#f0f4f8', secondary: '#a5afbd' }, divider: '#2b3545',
    success: { main: '#75c66b' }, error: { main: '#f17a84' }, warning: { main: '#ebb768' }, info: { main: '#76bdf1' },
  },
  typography: {
    fontFamily: 'Manrope, Arial, sans-serif',
    h1: { fontFamily: 'Newsreader, Georgia, serif', fontWeight: 600, letterSpacing: '-0.045em' },
    h2: { fontFamily: 'Newsreader, Georgia, serif', fontWeight: 600, letterSpacing: '-0.04em' },
    h3: { fontWeight: 700, letterSpacing: '-0.025em' }, h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700 }, h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: '-0.01em' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: { styleOverrides: { body: { backgroundColor: '#101521', backgroundImage: 'radial-gradient(circle at 84% 0%, rgba(93, 95, 239, 0.14), transparent 28%)', backgroundAttachment: 'fixed' } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none', border: '1px solid #2b3545', boxShadow: 'none' } } },
    MuiCard: { styleOverrides: { root: { background: '#171e2c', border: '1px solid #2b3545', boxShadow: 'none', transition: 'transform 180ms ease, border-color 180ms ease', '&:hover': { transform: 'translateY(-3px)', borderColor: '#aaa8ff' } } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 5, padding: '9px 15px', boxShadow: 'none', '&:hover': { boxShadow: 'none', transform: 'translateY(-1px)' } } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 4, fontWeight: 700 } } },
    MuiTableCell: { styleOverrides: { root: { borderColor: '#2b3545' }, head: { backgroundColor: '#1d2636', fontWeight: 700 } } },
    MuiTextField: { styleOverrides: { root: { '& .MuiOutlinedInput-root': { borderRadius: 6, '&.Mui-focused fieldset': { borderColor: '#aaa8ff' } } } } },
  },
});

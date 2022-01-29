import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink,useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import './Header.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
  },
  palette: {
    text: {
      primary: "#FFFFFF"
    },
    primary: {
      main: '#658C9B',
    }
  }
});

const pages = ['dashboard', 'track', 'journal'];

const Header = () => {
  const navigate = useNavigate()
  const [cookie,,removeCookie]= useCookies(['userToken'])
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
 

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  const handleLogout = () => {
    removeCookie('userToken',{path:'/'})
    navigate('/glow-up-fe/')
    
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            GlowUp
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink to={`/glow-up-fe/${page}`} key={page}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ color: '#658C9B' }}
                    >
                      {page.toUpperCase()}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            GlowUp
          </Typography>
          {cookie.userToken ? (<><Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {pages.map((page) => (
              <NavLink to={`/glow-up-fe/${page}`} key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
           <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Log out"> */}
              <Button onClick={handleLogout} sx={{ p: 0, color: 'white' }}> 
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                Log out
              </Button>
              {/* </Tooltip> */}
          </Box></>):
          <Box sx={{ position:"absolute",right:"20px" }}>
            <NavLink to="/glow-up-fe/login" style={{color:"white", marginRight: '20px'}} >Login</NavLink>
            <NavLink to="/glow-up-fe/signup" style={{color:"white"}} >Sign Up</NavLink>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>

  );
};
export default Header;

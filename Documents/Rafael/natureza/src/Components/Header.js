import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/core/Menu'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { makeStyles } from '@material-ui/core/styles'

const pages = ['Inicio', 'Galeria', 'Clientes', 'Contato', 'Sobre'];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const useStyles = makeStyles((theme) => ({
    logo: {
      marginRight: '30em'
  
    },
    nature: {
      fontFamily:'Caprasimo',
      fontSize:'40px'
    },
    

  }))

  
  const classes = useStyles()
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography  
            
            noWrap
            
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
            component="h3" variant="h4"  align="center" className= {classes.nature}
          >
            Nature Photography
          </Typography>

          <Box  className={classes.logo}>
            
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
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

 export default Header;


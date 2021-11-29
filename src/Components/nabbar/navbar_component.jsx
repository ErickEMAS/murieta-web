import { AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { logout } from '../../services/auth';
import { useHistory } from "react-router-dom"
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as MenuIcon} from '../../assets/menu.svg';
import foto from "../../assets/foto.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    "background-color": "#1D2329",
    '& .MuiToolbar-regular': {
      padding: "0",
    },
  },

  title: {
    flexGrow: 1,
    fontfamily: "Roboto",
    fontstyle: "normal",
    fontweight: "normal",
    fontsize: "22px",
    color: "#FFFFFF",
  },

  name: {
    fontfamily: "Roboto",
    fontstyle: "normal",
    fontweight: "normal",
    fontsize: "18px",
    color: "#FFFFFF",
  },

  logo: {
    width: "28px",
    height: "28px",
    marginright: "16px",
  },

  menu: {
    "margin-top": "48px",
    '& .MuiPaper-root': {
      color: "#FFFFFF",
      "background-color": "#2B3036",
    },
  },

  menuItem: {
    color: "#FFFFFF",
    "background-color": "#2B3036",
    "&:hover": {
      "background-color": "#24292f",
    },
  },

  logouItem: {
    color: "#FD8B8B",
    "background-color": "#2B3036",
    "&:hover": {
      color: "#000000",
      "background-color": "#FD8B8B",
    },
  },

}));

const NavbarComponent = () => {
  var history = useHistory()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const refresh = () => {
    history.go(0);
    logout();
  }

  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar>
        <Box m={2}>
          <Logo className={classes.logo} fill="#8CCFE7"/>
        </Box>
        <Typography className={classes.title} variant="h6" >
          Murieta
        </Typography>

        <Box m={2}>
          <Avatar alt="Erick Alexandre" src={foto} />
        </Box>
        <Typography className={classes.name} variant="h6" >
          Erick Alexandre
        </Typography>

        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <MenuIcon fill="#FFFFFF"  width="28" height="28"/>
        </IconButton>
        <Menu
          className={classes.menu}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={handleClose}>Configurações</MenuItem>
          <MenuItem className={classes.menuItem} onClick={handleClose}>Meu perfil</MenuItem>
          <MenuItem className={classes.logouItem} onClick={refresh}>Logout</MenuItem>
        </Menu>
    </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
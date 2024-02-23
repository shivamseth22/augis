import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Button, Hidden, Box, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Auriga
                </Typography>
                <TextField id="search" variant="outlined" size="small" placeholder='search...' />
                <Hidden smDown>
                    <Button color="inherit" sx={{ '&:hover': { color: 'black' } }}>Home</Button>
                    <Button color="inherit" sx={{ '&:hover': { color: 'black' } }}>About</Button>
                    <Button color="inherit" sx={{ '&:hover': { color: 'black' } }}>FAQs</Button>
                    <Button color="inherit" sx={{ '&:hover': { color: 'black' } }}>Contact</Button>
                    <Button color="inherit" sx={{ '&:hover': { color: 'black' } }}>Login</Button>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        sx={{ width: '50%' }} // Set the width to 50% of the screen width
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

                        <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'black', backgroundColor: 'white' } }}>Home</MenuItem>
                        <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'black', backgroundColor: 'white' } }}>About</MenuItem>
                        <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'black', backgroundColor: 'white' } }}>FAQs</MenuItem>
                        <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'black', backgroundColor: 'white' } }}>Contact</MenuItem>
                        <MenuItem onClick={handleClose} sx={{ '&:hover': { color: 'black', backgroundColor: 'white' } }}>Login</MenuItem>
                    </Menu>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

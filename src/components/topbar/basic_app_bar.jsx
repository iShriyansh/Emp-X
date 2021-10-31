
import MenuIcon from '@mui/icons-material/Menu';
import {Typography, Box, Button,IconButton,Toolbar,AppBar} from '@mui/material';

export default function BasicAppbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx ={{color:"primary.main",backgroundColor:"white"}} elevation = {0} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
       
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer",}}>
            Home
          </Typography>
          <Button color="inherit">About us</Button>
                    <Button color="inherit">Contact</Button>
                              <Button color="inherit">Help</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {Toolbar, Button, TextField,Avatar,ListItemButton, Collapse} from '@mui/material/';
import Typography from '@mui/material/Typography';
import Logo from '../../core/logo';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ManageEmployee from './manage_employee/ManageEmployee';
import { Search, ExpandLess,ExpandMore,StarBorder, AddCircleOutline } from '@mui/icons-material';
import AddNewEmployee from './manage_employee/AddNewEmployee';
import "./main.css";
import { getUser, removeUser } from '../../core/user';
import { useHistory } from "react-router-dom";
import {useEffect} from 'react';
const drawerWidth = 240;


function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

     const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

 
  let user =  getUser();

const history = useHistory();
  function onLogoutpressed(){
    removeUser();
    history.push('/registration');

  }


    const listItem = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon />,
            route: 'dashboard'
        },

        {
            text: 'Manage Employee',
            icon: <WorkIcon />,
            route: 'manage-employee',
            subItem :[
           {     text: 'Add Employee',
            icon: <AddCircleOutline />,
            route: 'add-employee',
            subItem :[
                {
                    
                }
            ]}
            ]
        },
        {
            text: 'Attendance',
            icon: <PeopleAltIcon />,
            route: 'attendance'
        },
        {
            text: 'Payroll',
            icon: <ReceiptIcon />,
            route: 'payroll'
        }];
    const drawer = (
        <div>
            <ListItem>
               <Logo height = "50px" width = "100px"></Logo>

            </ListItem>

           

            <List>
                {listItem.map((item, index) => {
                    const { text, icon, route,subItem } = item;

                    return (
                        <>
                        <ListItem button key={text} component={Link} to={"/" + route} onClick = {handleClick}>
                            {icon && <ListItemIcon> {icon}
                            </ListItemIcon>}
                            <ListItemText primary={text} />
                               
                              {
                                  (subItem !=null&&subItem.length>0)&&
                                 ( open ?  <ExpandLess /> : <ExpandMore />)

                                  }

                        </ListItem>

                        {
                             (subItem !=null&&subItem.length>0)&&(
                               <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
 {
     subItem.map((item,index) => {
          const  { text, icon, route,subItem } = item;

       return  (
                     <ListItemButton sx={{ pl: 4 }}  component={Link} to={"/" + route}>
            <ListItemIcon>
             {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        )
     })
 }
        </List>
      </Collapse>)
                        }
  </>
                    
                    );
                })}

                
            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'  }}>
           
    
            <AppBar
                position="fixed"
                sx={{
                    color:"text.primary",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px`, background: `white`, boxShadow: `none`, borderBottom: "1px solid rgb(212, 212, 212)" },
                }}
            >
                  
              
                <Toolbar sx ={{display : "flex", justifyContent : "space-between"}}>
                   
                 <Typography variant = "h6">Manage Employee</Typography>
                           
                 <Box sx={{display:"flex"}}>
                

             {/* <TextField size ="small"
             placeholder = "Search..."
             InputLabelProps = {
                { 
              
                }
             }
              />

                <IconButton onClick={()=>{}}>
        <Search />
      </IconButton> */}
   
      <Button variant="text" color="warning" onClick={()=>{
          onLogoutpressed();
      }}>Logout </Button>
     <Typography>{user.user.firstName}</Typography>
     

   <Avatar
        alt="Remy Sharp"
        src="https://content.thriveglobal.com/wp-content/uploads/2018/12/profile21.jpg"
        sx={{ width: 40, height: 40 }}
      />

      
   </Box>
 

       
                </Toolbar>
            </AppBar>
     
          <BrowserRouter>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth, display:"flex" }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>

      
        
                </Box>
                
{/* drawer ends here */}

                <Box
                   
                    sx={{ flex: 1, p: 3, mt:"65px", width: { sm: `calc(100% - ${drawerWidth}px)`,  }}}
                >
   <Switch>
                        <Route exact path="/" render={() => <div>Home Page</div>} />
                       <Route path="/manage-employee" render={() => ManageEmployee()} />
                       <Route path="/dashboard" render={() => <div> dfcs,</div> } />
                                          <Route path="/add-employee" render={() => AddNewEmployee() } />
                     
                    </Switch>

                </Box>

                 </BrowserRouter>
    

</Box>

    


                
            
      

    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;

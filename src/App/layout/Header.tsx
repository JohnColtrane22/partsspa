import { AppBar, Box, List, ListItem, SxProps, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title:'About', path:'/about'},
    {title:'Contact', path:'/contact'},
]

const rightLinks = [
    {title:'login', path:'/login'},
    {title:'register', path:'/register'},
]
const AppBarSx: SxProps = {
   backgroundColor: "black",
   mb:4,
  };

  const navStyles = {color:'inherit',
  typography: 'h6',
  textDecoration: 'none',
  Typography: 'h6',
  '&:hover': {
      color: 'gray'
  },
  '&.active': {
      color: 'red'
  }
 }

export default function Header() {
    return (
        <AppBar position="static" sx={AppBarSx}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box display='flex' alignItems='center'>
            <Typography variant='h6' component={NavLink} 
                to='/'
                sx={navStyles}
                >
                    Parts SPA
                </Typography> 
            </Box>
                

                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                </Box>
               

            </Toolbar>
        </AppBar>
    )
}
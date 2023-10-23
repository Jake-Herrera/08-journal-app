import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

export const SideBar = ({drawerWidth = 240}:SideBarProps) => {
    return (
        <Box
            component='nav'
            sx={{width: { sm: drawerWidth}, flexShrink:{sm:0}}}
            className="test1"
        >
            <Drawer
                className="test2"
                variant="permanent"
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar className="test3">
                    <Typography className="test4" variant='h6' noWrap component='div'>
                        Jake herrera hernandez
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Laborum eu tempor sit nisi nulla id irure magna excepteur magna ea qui.'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;

interface SideBarProps {
    drawerWidth: number;
}
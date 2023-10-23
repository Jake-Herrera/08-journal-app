import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;
export const JournalLayout = ({children}:JournalLayoutProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <NavBar drawerWidth={drawerWidth}/>
            <SideBar drawerWidth={drawerWidth}/>

            <Box
                component='main'
                sx={{flexGrow: 1, p:3}}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
};

export default JournalLayout;

interface JournalLayoutProps {
    children: ReactNode;
}
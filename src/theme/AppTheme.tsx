import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {  ReactNode } from 'react';
import { purpleTheme } from './';

export const AppTheme = ({children}: AppThemeProps) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;

interface AppThemeProps {
    children: ReactNode;
}
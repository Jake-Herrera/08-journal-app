import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Create an account">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2}}>
                        <TextField 
                            label="Full name" 
                            type="text" 
                            placeholder="Full name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2}}>
                        <TextField 
                            label="email" 
                            type="email" 
                            placeholder="email@example.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid  item xs={12} sx={{ mb: 2}}>
                        <TextField 
                            label="password" 
                            type="password" 
                            placeholder="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2}}> 
                        <Grid item xs={12} >
                            <Button 
                                variant="contained"
                                fullWidth
                            >
                                Create account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link
                            color='inherit'
                            component={RouterLink} 
                            to="/auth/login">
                            Do you already have an account?
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
}

export default RegisterPage;
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAtuthentication, startGoogleSingIn, store } from "../../store";

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm({
        email: 'jkherrera96@gmail.com',
        password: '123456'
    });

    const onSubmit = (event:any) => {
        event.preventDefault();
        store.dispatch(checkingAtuthentication(email, password));
        console.log({email, password});

    }

    const onGoogleSingIn = () => {
        console.log('onGoogleSingIn');
        store.dispatch(startGoogleSingIn(email, password));
    }

    return (

        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2}}>
                        <TextField 
                            label="email" 
                            type="email" 
                            placeholder="email@example.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid  item xs={12} sx={{ mb: 2}}>
                        <TextField 
                            label="password" 
                            type="password" 
                            placeholder="password"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2}}> 
                        <Grid item xs={12} sm={6}>
                            <Button 
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSingIn}
                            >
                                <Google/>
                                <Typography sx={{ml:2}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link
                            color='inherit'
                            component={RouterLink} 
                            to="/auth/register">
                            Create an account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
}

export default LoginPage
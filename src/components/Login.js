import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Background from '../welcome-bg.png'


const styles = {
    paddingTop: '70px',
    paddingBottom:'70px',
    backgroundImage:`url(${Background})`,
    maxHeight:'auto'


}
class Login extends Component {

    render() {
        return (
            <div>
                <Grid container style={styles} spacing={3} direction="column">
                    <h1>Welcome to Serving Fresh</h1>
                    <Grid item xs >
                        <Button variant="contained">Login!</Button>
                    </Grid>
                    <Grid item xs >
                        <Button variant="contained">Signup!</Button>
                    </Grid>
                    <Grid item xs >
                        <Button component={Link} to="/farms" variant="contained">Continue as guest!</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Login;

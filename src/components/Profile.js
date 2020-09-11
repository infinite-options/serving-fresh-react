import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MapComponent from './MapComponent.js'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            
        },
    },
    middleSpace:{
        paddingTop:'50px'

    }
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <div>
            <h1>Your Profile</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <Grid container direction="column">
                        <Grid item>
                            <TextField
                                id="outlined-firstname-input"
                                label="First Name"
                                type="firstname"
                                autoComplete="first-name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-lastname-input"
                                label="Last Name"
                                type="lastname"
                                autoComplete="last-name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-address-input"
                                label="Address"
                                type="address"
                                autoComplete="address"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-city-input"
                                label="City"
                                type="city"
                                autoComplete="city"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-zipcode-input"
                                label="Zip Code"
                                type="Zip Code"
                                autoComplete="zipcode"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-phone-input"
                                label="Phone Number"
                                type="phonenumber"
                                autoComplete="phonenumber"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <MapComponent/>
                    
                </div>
            </form>
        </div>
    );
}
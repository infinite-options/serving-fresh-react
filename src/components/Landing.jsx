import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import Background from '../welcome-bg.png'

import axios from 'axios';

const styles = {
    paddingTop: '70px',
    paddingBottom:'70px',
    alignItems:'center',
    backgroundImage:`url(${Background})`,
    maxHeight:'auto',
    backgroundSize:'cover'
}

//backgroundImage:`url(${Background})`,
class Landing extends Component {

    componentDidMount() {
        // Make sure Apple Login is allowed before initializing to prevent crashes
        if(process.env.REACT_APP_APPLE_CLIENT_ID && process.env.REACT_APP_APPLE_REDIRECT_URI){
            window.AppleID.auth.init({
                clientId : process.env.REACT_APP_APPLE_CLIENT_ID,
                scope : 'email',
                redirectURI : process.env.REACT_APP_APPLE_REDIRECT_URI,
            });
        }
        let queryString = this.props.location.search;
        let urlParams = new URLSearchParams(queryString);
        // Clear Query parameters
        window.history.pushState({}, document.title, window.location.pathname);
        // Log which media platform user should have signed in with instead of Apple
        // May eventually implement to display the message for which platform to Login
        if(urlParams.has('media')) {
            console.log(urlParams.get('media'));
        }
    }

    _responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj) {
            console.log("Google login successful");
            let email = response.profileObj.email;
            let accessToken = response.accessToken;
            let refreshToken = response.googleId;
            this._socialLoginAttempt(email,accessToken,refreshToken,'GOOGLE');
        } else {
            console.log('Google login unsuccessful')
        }
    }

    _responseFacebook = (response) => {
        console.log(response);
        if (response.email) {
            console.log("Facebook login successful");
            let email = response.email;
            let accessToken = response.accessToken;
            let refreshToken = response.id;
            this._socialLoginAttempt(email,accessToken,refreshToken,'FACEBOOK');
        } else {
            console.log('Facebook login unsuccessful')
        }
    }

    _socialLoginAttempt = (email, accessToken, refreshToken, platform) => {
        axios
        .post('https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/Login/',{
            email: email,
            password: '',
            token: refreshToken,
            signup_platform: platform,
        })
        .then((res) => {
            console.log(res);
            if(!(res.data.code && res.data.code !== 200)) {
                let customerInfo = res.data.result[0];
                console.log(customerInfo);
                console.log('cookie',document.cookie)
                document.cookie = 'customer_uid=' + customerInfo.customer_uid;
                console.log('cookie',document.cookie)
                this.props.history.push("/farms");
            } else if(res.data.code === 404) {
                this.props.history.push("/socialsignup",{
                    email: email, 
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    platform: platform,    
                });
            }
        })
        .catch((err) => {
            if(err.response) {
                console.log(err.response);
            }
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Grid container style={styles} spacing={3} direction="column">
                    <h1 style={{color:'black'}}>Welcome to Serving Fresh</h1>
                    <Grid item xs >
                        <Button component={Link} to="/login" variant="contained">Login!</Button>
                    </Grid>
                    <Grid item xs >
                        <Button component={Link} to="/signup" variant="contained">Signup!</Button>
                    </Grid>
                    <Grid item xs >
                        <Button component={Link} to="/farms" variant="contained">Continue as guest!</Button>
                    </Grid>
                    { (process.env.REACT_APP_APPLE_CLIENT_ID && process.env.REACT_APP_APPLE_REDIRECT_URI) &&
                    <Grid item xs >
                        <Button
                            variant="contained"
                            onClick={() => {
                                window.AppleID.auth.signIn();
                            }}
                        >
                            Apple Login
                        </Button>
                    </Grid>
                    }
                    {(process.env.REACT_APP_GOOGLE_CLIENT_ID) &&
                    <Grid item xs >
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            render={(renderProps) => (
                                <Button
                                    variant="contained"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Google Login
                                </Button>
                            )}
                            onSuccess={this._responseGoogle}
                            onFailure={this._responseGoogle}
                            isSignedIn={false}
                            disabled={false}
                            cookiePolicy={"single_host_origin"}
                        />
                    </Grid>
                    }
                    {(process.env.REACT_APP_GOOGLE_CLIENT_ID) &&
                    <Grid item xs>
                        <FacebookLogin
                            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                            render={renderProps => (
                                <Button
                                    variant="contained"
                                    onClick={renderProps.onClick}
                                >
                                    Facebook Login
                                </Button>
                            )}
                            autoLoad={false}
                            fields={"name,email,picture"}
                            callback={this._responseFacebook}
                        />
                    </Grid>
                    }
                </Grid>
            </div>
        );
    }
}

export default withRouter(Landing);

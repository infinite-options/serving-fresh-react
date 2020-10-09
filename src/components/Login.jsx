import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
//import getMuiTheme from '@material-ui/styles/getMuiTheme'
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core'
import Background from '../welcome-bg.png'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { withRouter } from "react-router";

let API_URL = 'https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        let queryString = this.props.location.search;
        let urlParams = new URLSearchParams(queryString);
        // Clear Query parameters
        window.history.pushState({}, document.title, window.location.pathname);
        // If has parameters, try to bypass login
        if(urlParams.has('email') && urlParams.has('hashed')) {
            let email = urlParams.get('email');
            let password = urlParams.get('hashed');
            let loginObject = {
                email: email,
                password: password,
                token: '',
                signup_platform: ''
            }
            axios
            .post(API_URL + 'Login',loginObject,{
                headers: {
                    'Content-Type': 'text/plain'
                }
            })
            .then((res) => {
                console.log(res)
                if(res.data.code === 200) {
                    console.log('Login success')
                    let customerInfo = res.data.result[0];
                    console.log('cookie',document.cookie)
                    document.cookie = 'customer_uid=' + customerInfo.customer_uid;
                    // console.log('cookie',document.cookie)
                    this.props.history.push("/farms");
                } else if (res.data.code === 406 || res.data.code === 404){
                    console.log('Invalid credentials')
                } else if (res.data.code === 401) {
                    console.log('Need to log in by social media')
                } else {
                    console.log('Unknown login error')
                }
            })
            .catch((err) => {
                // Log error for Login endpoint
                if(err.response) {
                    console.log(err.response);
                }
                console.log(err);
            })
        }
    }

    _onSubmit(event) {
        event.preventDefault()
        //Attempt to login
        // Get salt for account
        axios
        .get(API_URL + 'AccountSalt',{
            params: {
                email: this.state.email,
            }
        })
        .then((res) => {
            let saltObject = res;
            console.log(saltObject)
            if(!(saltObject.data.code && saltObject.data.code !== 200)) {
                let hashAlg = saltObject.data.result[0].password_algorithm;
                let salt = saltObject.data.result[0].password_salt;
                if (hashAlg != null && salt != null) {
                    // Make sure the data exists
                    if(hashAlg !== '' && salt !== '') {
                        // Rename hash algorithm so client can understand
                        switch(hashAlg) {
                            case 'SHA512':
                                hashAlg = 'SHA-512';
                                break;
                            default:
                                break;
                        }
                        // console.log(hashAlg);
                        // Salt plain text password
                        let saltedPassword = this.state.password + salt;
                        // console.log(saltedPassord);
                        // Encode salted password to prepare for hashing
                        const encoder = new TextEncoder();
                        const data = encoder.encode(saltedPassword);
                        //Hash salted password
                        crypto.subtle.digest(hashAlg,data)
                        .then((res) => {
                            let hash = res;
                            // Decode hash with hex digest
                            let hashArray = Array.from(new Uint8Array(hash));
                            let hashedPassword = hashArray.map(byte => { return byte.toString(16).padStart(2, '0')}).join('');
                            // console.log(hashedPassword);
                            let loginObject = {
                                email: this.state.email,
                                password: hashedPassword,
                                token: '',
                                signup_platform: ''
                            }
                            // console.log(JSON.stringify(loginObject))
                            axios
                            .post(API_URL + 'Login',loginObject,{
                                headers: {
                                    'Content-Type': 'text/plain'
                                }
                            })
                            .then((res) => {
                                console.log(res)
                                if(res.data.code === 200) {
                                    console.log('Login success')
                                    let customerInfo = res.data.result[0];
                                    console.log('cookie',document.cookie)
                                    document.cookie = 'customer_uid=' + customerInfo.customer_uid;
                                    // console.log('cookie',document.cookie)
                                    this.props.history.push("/farms");
                                } else if (res.data.code === 406 || res.data.code === 404){
                                    console.log('Invalid credentials')
                                } else if (res.data.code === 401) {
                                    console.log('Need to log in by social media')
                                } else {
                                    console.log('Unknown login error')
                                }
                            })
                            .catch((err) => {
                                // Log error for Login endpoint
                                if(err.response) {
                                    console.log(err.response);
                                }
                                console.log(err);
                            })
                        })
                    }
                } else {
                    // No hash/salt information, probably need to sign in by socail media
                    console.log('Salt not found')
                    // Try to login anyway to confirm
                    let loginObject = {
                        email: this.state.email,
                        password: 'test',
                        token: '',
                        signup_platform: ''
                    }
                    // console.log(JSON.stringify(loginObject))
                    axios
                    .post(API_URL + 'Login',loginObject,{
                        headers: {
                            'Content-Type': 'text/plain'
                        }
                    })
                    .then((res) => {
                        console.log(res)
                        if (res.data.code === 401) {
                            console.log('Need to log in by social media')
                        } else {
                            console.log('Unknown login error')
                        }
                    })
                    .catch((err) => {
                        // Log error for Login endpoint
                        if(err.response) {
                            console.log(err.response);
                        }
                        console.log(err);
                    })
                }
            } else {
                // No information, probably because invalid email
                console.log('Invalid credentials')
            }
        })
        .catch((err) => {
            // Log error for account salt endpoint
            if(err.response) {
                console.log(err.response)
            }
            console.log(err);
        })
    }

    _onReset = () => {
        console.log("_onReset")
        this.setState({
            email: '',
            password: '',
        })
    }

    _emailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    _passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{backgroundImage:`url(${Background})`}}
            >
                <Paper
                    style={{
                        height: 600,
                        width: 350,
                        margin: 20,
                        textAlign: 'center',
                        display: 'inline-block',
                        justifyContent: 'center'
                    }}
                >
                    <p>Login</p>
                    <form onSubmit={this._onSubmit.bind(this)}>
                        <TextField
                            value={this.state.email}
                            onChange={this._emailChange}
                            label="Email"
                        />
                        <br />
                        <TextField
                            value={this.state.password}
                            onChange={this._passwordChange}
                            type="password"
                            label="Password"
                        />
                        <br />
                        <br />
                        <div>
                            <Button variant="contained" type="submit">Submit</Button>
                            <Button variant="contained" style={{marginLeft:'20px'}} type="button" onClick={this._onReset}>Reset</Button>
                        </div>
                    </form>
                </Paper>
            </Box>
        )
    }
}

export default withRouter(Login)
import React, { Component, PropTypes } from 'react'
import TextField from '@material-ui/core/TextField';
//import getMuiTheme from '@material-ui/styles/getMuiTheme'
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core'
import Background from '../welcome-bg.png'
import Button from '@material-ui/core/Button';


export default class signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            account: '',
            email: '',
            emailErrorText: '',
            password: '',
            confirmPassword: '',
            confirmPasswordErrorText: '',
            telNum: '',
        }
    }

    validateEmail(e) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(e);
    }

    getStyle() {
        return {
            height: 600,
            width: 350,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            justifyContent: 'center'
        }
    }

    _onSubmit(e) {
        e.preventDefault()

        console.log("_onSubmit")
        if (this.state.emailErrorText == '' && this.state.confirmPasswordErrorText == '') {
            console.log("_onSubmit: state=", this.state)
        } else {
            console.log("has error, unable to submit")
        }
    }

    _onReset() {
        console.log("_onReset")
        this.setState({
            account: '',
            email: '',
            emailErrorText: '',
            password: '',
            confirmPassword: '',
            confirmPasswordErrorText: '',
            telNum: '',
        })
    }

    _handleAccountChange(e, val) {
        this.setState({ account: val })
    }

    _handlePasswordChange(e, val) {
        this.setState({ password: val })
    }

    _handleConfirmPasswordChange(e, val) {
        var errorText = ''
        if (val != this.state.password) {
            errorText = 'Passwords are not matched'
        }
        this.setState({ confirmPassword: val, confirmPasswordErrorText: errorText })
    }

    _handleEmailChange(e, val) {
        var errorText = ''
        if (!this.validateEmail(val)) {
            errorText = "Email Format Error"
        }
        this.setState({ emailErrorText: errorText, email: val })
    }

    _handleInputChange(telNumber, selectedCountry) {
        console.log('input changed. number: ', telNumber, 'selected country: ', selectedCountry);
    }

    _handleInputBlur(telNumber, selectedCountry) {
        console.log('Focus off the ReactTelephoneInput component. Tel number entered is: ', telNumber, ' selected country is: ', selectedCountry);
        this.setState({ telNum: telNumber })
    }

    render() {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{backgroundImage:`url(${Background})`}}
            >
                <Paper style={this.getStyle()}>
                    <p>Login</p>
                    <form onSubmit={this._onSubmit.bind(this)}>
                        <TextField
                            value={this.state.account}
                            onChange={this._handleAccountChange.bind(this)}
                            hintText="Account"
                            floatingLabelText="Account"
                            floatingLabelFixed={true}
                            label="Username"
                        />
                        <br />
                        <TextField
                            value={this.state.password}
                            onChange={this._handlePasswordChange.bind(this)}
                            hintText="Password"
                            floatingLabelText="Password"
                            floatingLabelFixed={true}
                            type="password"
                            label="Password"
                        />
                        <br />
                        <br />
                        <div>
                            <Button variant="contained" type="submit">Submit</Button>
                            <Button variant="contained" style={{marginLeft:'20px'}} type="button" onClick={this._onReset.bind(this)}>Reset</Button>
                        </div>
                    </form>
                </Paper>
            </Box>
        )
    }
}
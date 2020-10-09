import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Background from '../welcome-bg.png'
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
      message: '',
    }
  }

  _onSubmit = (event) => {
    event.preventDefault();
    console.log('_onSubmit')
    console.log(this.state);
    if(this.state.password === this.state.confirmPassword) {
      axios
      .get('https://dev.virtualearth.net/REST/v1/Locations/',{
        params: {
          CountryRegion: 'US',
          adminDistrict: this.state.state,
          locality: this.state.city,
          postalCode: this.state.zip,
          addressLine: this.state.address,
          key: process.env.REACT_APP_BING_LOCATION_KEY,
        }
      })
      .then((res) => {
        console.log(res)
        let locationApiResult = res.data;
            if(locationApiResult.statusCode === 200) {
                let locations = locationApiResult.resourceSets[0].resources;
                /* Possible improvement: choose better location in case first one not desired
                */
                let location = locations[0];
                let lat = location.geocodePoints[0].coordinates[0];
                let long = location.geocodePoints[0].coordinates[1];
                if(location.geocodePoints.length === 2) {
                    lat = location.geocodePoints[1].coordinates[0];
                    long = location.geocodePoints[1].coordinates[1];
                }
                let object = {
                  email: this.state.email,
                  password: this.state.password,
                  first_name: this.state.firstName,
                  last_name: this.state.lastName,
                  phone_number: this.state.phone,
                  address: this.state.address,
                  unit: this.state.unit,
                  city: this.state.city,
                  state: this.state.state,
                  zip_code: this.state.zip,
                  latitude: lat.toString(),
                  longitude: long.toString(),
                  referral_source: 'WEB',
                  role: 'CUSTOMER',
                  social: 'FALSE',
                  access_token: 'NULL',
                  refresh_token: 'NULL',
                }
                console.log(JSON.stringify(object));
                axios
                .post('https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/SignUp',object,{
                  headers: {
                    'Content-Type': 'text/plain'
                  }
                })
                .then((res) => {
                  // let customerInfo = res.data.result;
                  this.setState({
                    message: 'success',
                  })
                })
                .catch((err) => {
                  console.log(err);
                  if(err.response) {
                    console.log(err.response);
                  }
                })
            }
      })
      .catch((err) => {
        console.log(err);
        if(err.response) {
          console.log(err.response);
        }
      })
    } else {
      console.log('Passwords not matching')
    }
  }

  _onReset = () => {
    this.setState({
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      unit: '',
      state: '',
      zip: '',
    })
  }
  
  _emailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  _passwordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  _confirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    })
  }

  _firstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }

  _lastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    })
  }

  _phoneChange = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  _addressChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  
  _unitChange = (event) => {
    this.setState({
      unit: event.target.value
    })
  }

  _cityChange = (event) => {
    this.setState({
      city: event.target.value,
    })
  }

  _stateChange = (event) => {
    this.setState({
      state: event.target.value
    })
  }

  _zipChange = (event) => {
    this.setState({
      zip: event.target.value
    })
  }

  render() {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Paper style={{
          height: 700,
          width: 350,
          margin: 20,
          textAlign: 'center',
          display: 'inline-block',
        }}>
          <p>SIGN UP</p>
          <form onSubmit={this._onSubmit}>


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

            <TextField
              value={this.state.confirmPassword}
              onChange={this._confirmPasswordChange}
              type="password"
              label="Confirm Password"
            />
            <br />

            <TextField
              value={this.state.firstName}
              onChange={this._firstNameChange}
              label="First Name"
            />
            <br />
            <TextField
              value={this.state.lastName}
              onChange={this._lastNameChange}
              label="Last Name"
            />
            <br />

            <TextField
              value={this.state.phone}
              onChange={this._phoneChange}
              label="Phone"
            />
            <br />

            <TextField
              value={this.state.address}
              onChange={this._addressChange}
              label="Address"
            />
            <br />

            <TextField
              value={this.state.unit}
              onChange={this._unitChange}
              label="Unit"
            />
            <br />
            <TextField
              value={this.state.city}
              onChange={this._cityChange}
              label="City"
            />
            <br />
            <TextField
              value={this.state.state}
              onChange={this._stateChange}
              label="State"
            />
            <br />

            <TextField
              value={this.state.zip}
              onChange={this._zipChange}
              label="Zip code"
            />
            <br />
            <br />
            <div>
              <Button variant="contained" type="submit">Submit</Button>
              <Button variant="contained" style={{ marginLeft: '20px' }} type="button" onClick={this._onReset}>Reset</Button>
            </div>
            {this.state.message === 'success' && (
              <div>
                Sign up successful. Please confirm sign up process by following link in your email.
              </div>
            )}
          </form>
        </Paper>
      </Box>
    )
  }
}

export default withRouter(Signup);
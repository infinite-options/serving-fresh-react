import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Background from '../welcome-bg.png'
import Button from '@material-ui/core/Button';

import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super();
    this.state = {
      mounted: false,
      signUpApple: false,
      customerId: '',
      email: '',
      platform: '',
      accessToken: '',
      refreshToken: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
    }
  }

  componentDidMount() {
    console.log()
    // Check query String for Apple Login
    let queryString = this.props.location.search;
    let urlParams = new URLSearchParams(queryString);
    // Clear Query parameters
    window.history.pushState({}, document.title, window.location.pathname);
    // Receive email and social platform
    if(urlParams.has('id')) {
      // Using Came from Apple Login
      axios
        .get('https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/Profile/' + urlParams.get('id'))
        .then((res) => {
            let customer = res.data.result[0];
            console.log(customer);
            this.setState({
              mounted: true,
              signUpApple: true,
              email: customer.customer_email,
              customerId: customer.customer_uid,
              platform: 'APPLE'
            })
        })
        .catch((err) => {
            if(err.response) {
                console.log(err.response);
            }
            console.log(err);
        })
    }
    // Check location state for Gogle/Facebook Login
    else if(this.props.location.state !== undefined) {
      if(this.props.location.state.email && this.props.location.state.refreshToken && this.props.location.state.platform) {
        this.setState({
          mounted: true,
          email: this.props.location.state.email,
          platform: this.props.location.state.platform,
          refreshToken: this.props.location.state.refreshToken,
          accessToken: this.props.location.state.refreshToken ?  this.props.location.state.accessToken : 'access token'
        })
      } else {
        console.log('Necessary information not provided');  
      }
    } else {
      console.log('Necessary information not provided');
    }
  }

  _onReset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
    })
  }

  _firstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  _lastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
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
      city: event.target.value
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

  _onSubmit = () => {
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
      let locationApiResult = res.data;
      if(locationApiResult.statusCode === 200) {
        let locations = locationApiResult.resourceSets[0].resources;
        /* Possible improvement: choose better location in case first one not desired */
        let location = locations[0];
        let lat = location.geocodePoints[0].coordinates[0];
        let long = location.geocodePoints[0].coordinates[1];
        if(location.geocodePoints.length === 2) {
            lat = location.geocodePoints[1].coordinates[0];
            long = location.geocodePoints[1].coordinates[1];
        }
        console.log(lat,long);
        let object = {};
        if(!this.state.signUpApple){
          object = {
            email: this.state.email,
            access_token: this.state.accessToken,
            refresh_token: this.state.refreshToken,
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
            referral_source: 'Website',
            role: 'customer',
            social: this.state.platform,
          }
        } else {
          object = {
            cust_id: this.state.customerId,
            email: this.state.email,
            access_token: this.state.accessToken,
            refresh_token: this.state.refreshToken,
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
            referral_source: 'Website',
            role: 'customer',
            social: this.state.platform,
          }
        }
        console.log(JSON.stringify(object));
        axios
        .post('https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/SignUp', object,{
            headers: {
                'Content-Type': 'text/plain'
            }
        })
        .then((res) => {
            console.log(res);
            let customerInfo = res.data.result;
            console.log('cookie',document.cookie)
            document.cookie = 'customer_uid=' + customerInfo.customer_uid;
            console.log('cookie',document.cookie)
            this.props.history.push("/farms");
        })
        .catch((err) => {
            // Log error for Login endpoint
            if(err.response) {
                console.log(err.response);
            }
            console.log(err);
        })
      }
    })
    .catch((err) => {
      console.log(err)
      if(err.response) {
        console.log(err.response)
      }
    })
  }

  render() {
    if(!this.state.mounted) {
      return null;
    }
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Paper style ={{
          height: 600,
          width: 350,
          margin: 20,
          textAlign: 'center',
          display: 'inline-block',
        }}>
          <p>SOCIAL SIGN UP</p>
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
            label="Zip"
          />
          <br />
          <br />
          <div>
            <Button 
              variant="contained"
              onClick={this._onSubmit}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: '20px' }}
              type="button"
              onClick={this._onReset}
            >
              Reset
            </Button>
          </div>
        </Paper>
      </Box>
    );
  }
}

export default Signup;
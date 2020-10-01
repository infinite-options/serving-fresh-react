import React, { Component, PropTypes } from 'react'
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Background from '../welcome-bg.png'
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class signup extends Component {
  constructor(props) {
    super();
    this.state = {
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
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      if(err.response) {
        console.log(err.response)
      }
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
          <TextField
            value={this.state.lastName}
            onChange={this._lastNameChange}
            label="Last Name"
          />
          <TextField
            value={this.state.phone}
            onChange={this._phoneChange}
            label="Last Name"
          />
          <TextField
            value={this.state.address}
            onChange={this._addressChange}
            label="Address"
          />
          <TextField
            value={this.state.unit}
            onChange={this._unitChange}
            label="Unit"
          />
          <TextField
            value={this.state.city}
            onChange={this._cityChange}
            label="City"
          />
          <TextField
            value={this.state.state}
            onChange={this._stateChange}
            label="State"
          />
          <TextField
            value={this.state.zip}
            onChange={this._zipChange}
            label="Zip"
          />
          <div>
            <Button 
              variant="contained"
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
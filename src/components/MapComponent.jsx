import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapComponent extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };


    render() {

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                />
            </div>
        );
    }
}

export default MapComponent;
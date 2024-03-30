import React from 'react';
import { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyCDbg7kIc-h37hQh8-8qAp3KGnQE-GuJJc'
})(MapContainer);
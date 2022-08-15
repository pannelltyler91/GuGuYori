import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
import Container from 'react-bootstrap/Container'

export class MapContainer extends Component {
  render() {
    return (
        <Container fluid style={{margin:'10px'}}>
            <Map style={{width:'500px',height:'500px'}}google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick} name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                <div> </div>
                </InfoWindow>
            </Map>
        </Container>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAyxL9RE7j7DcDdsLobG-25T4JxAn4C6jM")
})(MapContainer)
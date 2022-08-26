import React from 'react'
import Container from "react-bootstrap/Container";
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";



    function Map() {
        return (
          <Container fluid style={{ margin: "10px" }}>
            <GoogleMap
              defaultZoom={10}
              defaultCenter={{ lat: 37.56829, lng: 126.99778 }}
            />
          </Container>
        );
      }
      
      function Travel() {
        const WrappedMap = withScriptjs(withGoogleMap(Map));
      
        return (
          <div style={{width:'75vw',height:'75vh'}}>
            <WrappedMap
              googleMapURL={
                `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAyxL9RE7j7DcDdsLobG-25T4JxAn4C6jM`
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        );
}

export default Travel;
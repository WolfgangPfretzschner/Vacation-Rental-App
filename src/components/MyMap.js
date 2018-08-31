import React, { createRef,  Component } from 'react'
import {  Map, TileLayer, Marker, Popup } from 'react-leaflet'

const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
        <Popup>{children}</Popup>
    </Marker>
)
const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}
// var greenIcon = L.icon({
//     iconUrl: '../assets/map-marker-small-hi.png',

//     iconSize:     [38, 95], // size of the icon
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

export default class DraggableExample extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasLocation: false,
            center: {
            lat: 26.5628537,
            lng: -81.9495331,
            },
            marker: {
            lat: 51.505,
            lng: -0.09,
            },
            latlng: {
                lat: 26.5628537,
                lng: -81.9495331,
            },
            zoom: 11,
            draggable: true,
        }
    }
    refmarker = createRef()

    mapRef = createRef()

    handleLocationFound = e => {
        this.setState({
            hasLocation: true,
            marker: e.latlng,
            latlng: e.latlng,
        })
    }
    
    handleClick = () => {
        this.mapRef.current.leafletElement.locate()
       
        
      }

    toggleDraggable = () => {
        this.setState({ draggable: !this.state.draggable })
    }

    updatePosition = () => {
        const { lat, lng } = this.refmarker.current.leafletElement.getLatLng()
        this.setState({
        marker: { lat, lng },
        }, () => this.props.getNewCooridantes(this.state.marker))
    }

    render() {
        // console.log(this.state.marker);
        
        const position = [this.state.latlng.lat, this.state.latlng.lng]
        const markerPosition = [this.state.marker.lat, this.state.marker.lng]
        const accessToken= 'pk.eyJ1Ijoid29sZnRhbmciLCJhIjoiY2prem1tdnpsMHZyZTN3bzZuZWt1cXVydyJ9.WWh-2OzAPdRo_bHnehZn7g'
        const markers = [
            { key: 'marker1', position: [51.5, -0.1], children: 'My first popup'  },
            { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
            { key: 'marker3', position: [51.49, -0.05], children: 'My third popup' },
          ]

        return (
            <div>

           <h4> Click in the Map and allow location to update, then drag the marker to desired spot! </h4>
        <Map center={position} zoom={this.state.zoom} onLocationfound={this.handleLocationFound} onClick={this.handleClick} ref={this.mapRef} >
            <TileLayer
            // attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url = {`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`}
            attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a ref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            maxZoom= '18'
            id= 'mapbox.streets'
            />
            <Marker
            draggable={this.state.draggable}
            onDragend={this.updatePosition}
            position={markerPosition}
            ref={this.refmarker}>
            <Popup minWidth={90}>
                <span onClick={this.toggleDraggable}>
                {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
                </span>
            </Popup>
            </Marker>
            {/* <MyMarkersList markers={markers} /> */}
        </Map>
            </div>
        )
    }
}

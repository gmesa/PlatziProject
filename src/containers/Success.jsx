import React, { useContext } from 'react';
import '../Styles/Success.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AppContext from '../context/AppContext';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`Gracias por tu compra ${buyer[0].name}`}</h2>
        <span>
          Tu pedido va a llegar a la siguiente direcion
        </span>

        <div className="Success-map">
          <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>

      </div>
    </div>
  );
};
export default Success;

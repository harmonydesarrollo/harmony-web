import React from 'react';
import { Modal } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Branches } from '../types/branches';

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  branches: Branches[];
  centerBranch?: Branches | null;
}

const containerStyle = {
  width: '80vw',
  height: '60vh',
};

const MapModal: React.FC<MapModalProps> = ({ open, onClose, branches, centerBranch }) => {
  // Centro del mapa: la sucursal seleccionada o un centro por defecto
  const center = centerBranch && centerBranch.lat !== undefined && centerBranch.lng !== undefined
  ? { lat: centerBranch.lat, lng: centerBranch.lng }
  : { lat: 20.11639, lng: -98.73903 };


  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 8,
        }}
      >
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            {branches
                .filter(branch => branch.lat !== undefined && branch.lng !== undefined)
                .map(branch => (
                    <Marker
                    key={branch._id}
                    position={{ lat: branch.lat!, lng: branch.lng! }}
                    />
                ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </Modal>
  );
};

export default React.memo(MapModal);

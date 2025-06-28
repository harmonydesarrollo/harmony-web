import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';
import { handleScheduleAppointmentClick } from '../../utils/functions';

import { useBranchContext } from '../../context/BranchContext';


interface FormModalProps {
  open: boolean;
  handleClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ open, handleClose }) => {
  const { branches } = useBranchContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedBranchLocation, setSelectedBranchLocation] = useState('Pachuca'); // valor inicial opcional

  // const handleSubmit = () => {
  //   handleScheduleAppointmentClick(
  //     '5576877703',
  //     `Hola!, Soy ${firstName} ${lastName} y me gustaría obtener más información sobre ${
  //       selectedOption === 'Otro' ? 'Harmony' : selectedOption
  //     }. Estoy interesado en la sucursal de ${selectedBranchLocation}.`
  //   );
  //   handleClose();
  // };

  // ponemos el numero de la sucursal en base a la sucursal seleccionada
  // si no encuentra la sucursal, pone el numero de la sucursal por defecto
  // esto es para que no falle si no encuentra la sucursal
  const getPhoneByBranchName = (branchName: string) => {
    const branch = branches.find((b) =>
      b.name.toLowerCase().includes(branchName.toLowerCase())
    );
    return branch?.phone || '5576877703'; // fallback si no lo encuentra
  };

  const handleSubmit = () => {
    const phone = getPhoneByBranchName(selectedBranchLocation);

    handleScheduleAppointmentClick(
      phone,
      `Hola!, Soy ${firstName} ${lastName} y me gustaría obtener más información sobre ${
        selectedOption === 'Otro' ? 'Harmony' : selectedOption
      }. Estoy interesado en la sucursal de ${selectedBranchLocation}.`
    );

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Solicitar Información</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor introduce tu nombre y apellidos (mínimo 3 caracteres cada uno)
        </DialogContentText>

        <TextField
          autoFocus
          required
          margin="dense"
          id="firstName"
          label="Nombre"
          type="text"
          fullWidth
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          required
          margin="dense"
          id="lastName"
          label="Apellidos"
          type="text"
          fullWidth
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <FormControl fullWidth variant="outlined" margin="dense">
          <InputLabel id="select-label">Motivo de consulta</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            label="Motivo de consulta"
          >
            <MenuItem value="">Seleccionar opción</MenuItem>
            <MenuItem value="Agendar cita">Agendar cita</MenuItem>
            <MenuItem value="Precios">Precios</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" margin="dense">
          <DialogContentText>Sucursal</DialogContentText>
          <RadioGroup
            value={selectedBranchLocation}
            onChange={(e) => setSelectedBranchLocation(e.target.value)}
          >
            <FormControlLabel value="Pachuca" control={<Radio />} label="Pachuca" />
            <FormControlLabel value="Teotihuacan" control={<Radio />} label="Teotihuacan" />
          </RadioGroup>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          onClick={handleSubmit}
          disabled={!firstName.trim() || !lastName.trim() || !selectedOption.trim()}
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormModal;

import React from 'react';
import Button from '../../atoms/Button';
// import '../../styles/Section1Styles.scss'; // Importa tus estilos CSS aquí
import '../../styles/Body/Section1Styles.scss';
import { handleScheduleAppointmentClick } from '../../../utils/functions';

const Section1: React.FC = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="section-text">
          <h1>La búsqueda de la felicidad y la libertad se entrelaza con la superación diaria del dolor físico</h1>

          <p>
            Cada ejercicio, cada sesión de rehabilitación, representa un camino hacia la recuperación y el establecimiento
            de tu libertad de movimiento. Encontrar la alegría en cada pequeño avance, en cada nueva habilidad recuperada,
            <strong> es parte fundamental de ese viaje hacia una vida más plena y activa.</strong>
          </p>
          <div>
            <br />
            <br />
            <Button
              className="section-btn"
              onClick={() => handleScheduleAppointmentClick('5576877703', '¡Hola! Bienvenido a Harmony Therapy. Estamos aquí para ayudarte a encontrar la felicidad y libertad de movimiento. Por favor, déjanos tu mensaje y te responderemos pronto. ¡Gracias por elegirnos!')}
            >
              Agendar cita
            </Button>
          </div>
        </div>
        <div className="section-image">
          <img src="/img/Capa_1.png" alt="Descripción de la imagen" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Section1;

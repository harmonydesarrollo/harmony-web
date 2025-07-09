import React, { useState } from 'react';
import '../styles/HeaderStyles.scss';
import { handleScheduleAppointmentClick, handleSocialMediaClick } from '../../utils/functions';
import FormModal from '../molecules/FormModal';
import { Branches } from '../types/branches';

interface BodyProps {
  selectedBranch?: Branches | null;
  selectedBranchAll: Branches[] | null;
}

const Footer: React.FC<BodyProps> = ({ selectedBranch, selectedBranchAll }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBranch, setModalBranch] = useState<Branches | null>(null);

  const handleModalOpen = (branch?: Branches) => {
    if (branch) setModalBranch(branch);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalBranch(null);
  };

  const handleIconClick = (op: number) => {
    switch (op) {
      case 1:
        handleModalOpen();
        break;
      case 2:
        handleSocialMediaClick('https://www.facebook.com/HelldyTherapy');
        break;
      case 3:
        handleSocialMediaClick('https://www.instagram.com/harmony.fisioterapia/');
        break;
      case 4:
        handleSocialMediaClick('https://www.youtube.com/channel/UCiHli8YiB3YalYVsltDFltw');
        break;
      case 5:
        handleSocialMediaClick('https://www.tiktok.com/@harmony.therapy?_t=8mFfoYgCbED&_r=1');
        break;
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundImage: `url('/img/PIEimg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white',
            paddingBottom: '3%',
          }}
        >
          <h1 style={{ fontSize: '3vw', marginBottom: '0vw' }}>
            ¡Aquí comienza <br />
            tu mejor versión!
          </h1>
          <p style={{ fontSize: '1.5vw', marginBottom: '2vw', width: '35%', textAlign: 'center' }}>
            Déjanos tu nombre y teléfono para que nuestro asesor se contacte contigo a la brevedad posible.
          </p>
          <button
            style={{
              fontSize: '2vw',
              padding: '0.8vw 2vw',
              borderRadius: '0.5vw',
              border: 'none',
              color: '#0064A8',
              cursor: 'pointer',
            }}
            onClick={() => handleModalOpen()}
          >
            Agendar cita
          </button>
          <FormModal open={modalOpen} handleClose={handleModalClose} selectedBranch={modalBranch} />

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginTop: '5vw' }}>
            <div style={{ width: '35%' }}>
              <img src="/LogoHarmony.png" alt="Logo Harmony" style={{ width: '70%' }} />
              {/* imagen  */}
              {/* {selectedBranchAll?.map((branch, index) => (
                <p
                  style={{ fontSize: '1.5vw', cursor: 'pointer' }}
                  key={`location-${index}`}
                  onClick={() => handleModalOpen(branch)}
                >
                  {branch.name} {branch.number} {branch.city}, {branch.municipality}, {branch.state}
                </p>
              ))} */}
            </div>

            <div style={{ width: '35%' }}>
              <div
                style={{
                  paddingRight: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {['WhatsApp', 'Facebook', 'Instagram', 'Youtube', 'TikTok'].map((icon, i) => (
                  <img
                    key={icon}
                    src={`/img/icons/${icon}.png`}
                    style={iconStyle}
                    onClick={() => handleIconClick(i + 1)}
                  />
                ))}
              </div>
              {/* // correo */}
              {/* {selectedBranchAll?.map((branch, index) => (
                <p
                  style={{ fontSize: '1.5vw', marginTop: '3vw', cursor: 'pointer' }}
                  key={`phone-${index}`}
                  onClick={() => handleModalOpen(branch)}
                >
                  {branch.name}: {branch.phone}
                </p>
              ))} */}
              <p style={{ fontSize: '1.5vw', marginTop: '1vw' }}>harmonytherapy.ht@gmail.com</p>
            </div>
          </div>

          {/* Mapas estáticos lado a lado */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2vw',
              marginTop: '1vw',
              width: '80%',
              flexWrap: 'wrap',
            }}
          >
            {/* Mapa Izquierdo - Pachuca */}
            <div
              style={{
                flex: '1 1 45%',
                minWidth: '300px',
                height: '400px',
                // border: '2px solid white',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <h3 style={{ color: 'white', margin: '10px 0' }}>
                {selectedBranchAll && selectedBranchAll[1]
                  ? `${selectedBranchAll[1].name} ${selectedBranchAll[1].number} ${selectedBranchAll[1].city}, ${selectedBranchAll[1].municipality}, ${selectedBranchAll[1].state}`
                  : 'Sucursal 1'}
                  <br/>
              <br/>
              <br/>
              <span>Pachuca: 7713588920</span>
              <br/>
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.423025682841!2d-98.741609424658!3d20.116391881314417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109a38d41ba2b%3A0xf67c77be574268a5!2sHarmony%20Therapy!5e0!3m2!1ses-419!2smx!4v1752080040381!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sucursal Pachuca"
              />
            </div>

            {/* Mapa Derecho - Teotihuacán */}
            <div
              style={{
                flex: '1 1 45%',
                minWidth: '300px',
                height: '400px',
                border: '0px solid white',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              
            <h3 style={{ color: 'white', margin: '10px 0' }}>
            {selectedBranchAll && selectedBranchAll[0]
              ? `${selectedBranchAll[0].name} ${selectedBranchAll[0].number} ${selectedBranchAll[0].city}, ${selectedBranchAll[0].municipality}, ${selectedBranchAll[0].state}`
              : 'Sucursal 2'}
              <br/>
              <br/>
              <span>Teotihuacán: 5576877703</span>
          </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.6144925681983!2d-98.87318751874639!3d19.68644573432834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1eb515635584d%3A0xb75d7c8ab0dc9977!2sHarmony%20Therapy!5e0!3m2!1ses-419!2smx!4v1752046676181!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sucursal Teotihuacán"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const iconStyle = {
  width: '10%',
  marginRight: '8px',
  cursor: 'pointer',
};

export default Footer;

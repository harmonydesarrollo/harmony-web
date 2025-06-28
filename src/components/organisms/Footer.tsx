import React, { useRef, useEffect, useState } from 'react';
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
        // handleScheduleAppointmentClick(
        //   '5576877703',
        //   '¡Hola! Bienvenido a Harmony Therapy. Estamos aquí para ayudarte a encontrar la felicidad y libertad de movimiento. Por favor, déjanos tu mensaje y te responderemos pronto. ¡Gracias por elegirnos!'
        // );
        handleModalOpen()
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

  useEffect(() => {
    console.log({ selectedBranchAll });
  }, []);

  function formatPhoneNumber(phoneNumber?: string) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/\d{1,2}/g);
    if (match) {
      return match.join(' ');
    }
    return phoneNumber;
  }

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
              <img src="/LogoHarmony.png" alt="Descripción de la imagen" style={{ width: '70%' }} />
              {selectedBranchAll?.map((branch, index) => (
                <p style={{ fontSize: '1.5vw' }} key={index}>
                  {branch.name} {branch.number} {branch.city}, {branch.municipality}, {branch.state}
                </p>
              ))}
            </div>

            <div style={{ width: '35%' }}>
              <div
                style={{
                  paddingRight: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/img/icons/WhatsApp.png"
                  alt="Descripción de la imagen"
                  style={{ width: '10%', marginRight: '8px', cursor: 'pointer' }}
                  onClick={() => handleIconClick(1)}
                />
                <img
                  src="/img/icons/Facebook.png"
                  alt="Descripción de la imagen"
                  style={{ width: '10%', marginRight: '8px', cursor: 'pointer' }}
                  onClick={() => handleIconClick(2)}
                />
                <img
                  src="/img/icons/Instagram.png"
                  alt="Descripción de la imagen"
                  style={{ width: '10%', marginRight: '8px', cursor: 'pointer' }}
                  onClick={() => handleIconClick(3)}
                />
                <img
                  src="/img/icons/Youtube.png"
                  alt="Descripción de la imagen"
                  style={{ width: '10%', marginRight: '8px', cursor: 'pointer' }}
                  onClick={() => handleIconClick(4)}
                />
                <img
                  src="/img/icons/TikTok.png"
                  alt="Descripción de la imagen"
                  style={{ width: '10%', cursor: 'pointer' }}
                  onClick={() => handleIconClick(5)}
                />
              </div>
              {selectedBranchAll?.map((branch, index) => (
                <p
                  style={{ fontSize: '1.5vw', marginTop: '3vw', cursor: 'pointer' }}
                  key={`phone-${index}`}
                  onClick={() => handleModalOpen(branch)}
                >
                  {formatPhoneNumber(branch?.name)}: {formatPhoneNumber(branch?.phone)}
                </p>
              ))}
              <p style={{ fontSize: '1.5vw', marginTop: '2.5vw' }}>harmonytherapy.ht@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

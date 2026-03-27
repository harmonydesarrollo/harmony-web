// import React, { useState } from 'react';
// import '../styles/HeaderStyles.scss';
// import { handleScheduleAppointmentClick, handleSocialMediaClick } from '../../utils/functions';
// import FormModal from '../molecules/FormModal';
// import { Branches } from '../types/branches';

// interface BodyProps {
//   selectedBranch?: Branches | null;
//   selectedBranchAll: Branches[] | null;
// }

// const Footer: React.FC<BodyProps> = ({ selectedBranch, selectedBranchAll }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalBranch, setModalBranch] = useState<Branches | null>(null);

//   const handleModalOpen = (branch?: Branches) => {
//     if (branch) setModalBranch(branch);
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//     setModalBranch(null);
//   };

//   const handleIconClick = (op: number) => {
//     switch (op) {
//       case 1:
//         handleModalOpen();
//         break;
//       case 2:
//         handleSocialMediaClick('https://www.facebook.com/HelldyTherapy');
//         break;
//       case 3:
//         handleSocialMediaClick('https://www.instagram.com/harmony.fisioterapia/');
//         break;
//       case 4:
//         handleSocialMediaClick('https://www.youtube.com/channel/UCiHli8YiB3YalYVsltDFltw');
//         break;
//       case 5:
//         handleSocialMediaClick('https://www.tiktok.com/@harmony.therapy?_t=8mFfoYgCbED&_r=1');
//         break;
//     }
//   };

//   return (
//     <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           backgroundImage: `url('/img/PIEimg.png')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           paddingTop: '40px',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%',
//             color: 'white',
//             paddingBottom: '3%',
//           }}
//         >
//           <h1 style={{ fontSize: '3vw', marginBottom: '0vw' }}>
//             ¡Aquí comienza <br />
//             tu mejor versión!
//           </h1>
//           <p style={{ fontSize: '1.5vw', marginBottom: '2vw', width: '35%', textAlign: 'center' }}>
//             Déjanos tu nombre y teléfono para que nuestro asesor se contacte contigo a la brevedad posible.
//           </p>
//           <button
//             style={{
//               fontSize: '2vw',
//               padding: '0.8vw 2vw',
//               borderRadius: '0.5vw',
//               border: 'none',
//               color: '#0064A8',
//               cursor: 'pointer',
//             }}
//             onClick={() => handleModalOpen()}
//           >
//             Agendar cita
//           </button>
//           <FormModal open={modalOpen} handleClose={handleModalClose} selectedBranch={modalBranch} />

//           <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginTop: '5vw' }}>
//             <div style={{ width: '35%' }}>
//               <img src="/LogoHarmony.png" alt="Logo Harmony" style={{ width: '70%' }} />
//               {/* imagen  */}
//               {/* {selectedBranchAll?.map((branch, index) => (
//                 <p
//                   style={{ fontSize: '1.5vw', cursor: 'pointer' }}
//                   key={`location-${index}`}
//                   onClick={() => handleModalOpen(branch)}
//                 >
//                   {branch.name} {branch.number} {branch.city}, {branch.municipality}, {branch.state}
//                 </p>
//               ))} */}
//             </div>

//             <div style={{ width: '35%' }}>
//               <div
//                 style={{
//                   paddingRight: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                 }}
//               >
//                 {['WhatsApp', 'Facebook', 'Instagram', 'Youtube', 'TikTok'].map((icon, i) => (
//                   <img
//                     key={icon}
//                     src={`/img/icons/${icon}.png`}
//                     style={iconStyle}
//                     onClick={() => handleIconClick(i + 1)}
//                   />
//                 ))}
//               </div>
//               {/* // correo */}
//               {/* {selectedBranchAll?.map((branch, index) => (
//                 <p
//                   style={{ fontSize: '1.5vw', marginTop: '3vw', cursor: 'pointer' }}
//                   key={`phone-${index}`}
//                   onClick={() => handleModalOpen(branch)}
//                 >
//                   {branch.name}: {branch.phone}
//                 </p>
//               ))} */}
//               <p style={{ fontSize: '1.5vw', marginTop: '1vw' }}>harmonytherapyft@gmail.com</p>
//             </div>
//           </div>

//           {/* Mapas estáticos lado a lado */}
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '2vw',
//               marginTop: '1vw',
//               width: '80%',
//               flexWrap: 'wrap',
//             }}
//           >
//             {/* Mapa Izquierdo - Pachuca */}
//             <div
//               style={{
//                 flex: '1 1 45%',
//                 minWidth: '300px',
//                 height: '400px',
//                 // border: '2px solid white',
//                 borderRadius: '10px',
//                 overflow: 'hidden',
//                 position: 'relative',
//               }}
//             >
//               <h3 style={{ color: 'white', margin: '10px 0' }}>
//                 {selectedBranchAll && selectedBranchAll[1]
//                   ? `${selectedBranchAll[1].name} ${selectedBranchAll[1].number} ${selectedBranchAll[1].city}, ${selectedBranchAll[1].municipality}, ${selectedBranchAll[1].state}`
//                   : 'Sucursal 1'}
//                 <br />
//                 <br />
//                 <br />
//                 <span>Pachuca: 7713588920</span>
//                 <br />
//               </h3>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.423025682841!2d-98.741609424658!3d20.116391881314417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109a38d41ba2b%3A0xf67c77be574268a5!2sHarmony%20Therapy!5e0!3m2!1ses-419!2smx!4v1752080040381!5m2!1ses-419!2smx"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Sucursal Pachuca"
//               />
//             </div>

//             {/* Mapa Derecho - Teotihuacán */}
//             <div
//               style={{
//                 flex: '1 1 45%',
//                 minWidth: '300px',
//                 height: '400px',
//                 border: '0px solid white',
//                 borderRadius: '10px',
//                 overflow: 'hidden',
//                 position: 'relative',
//               }}
//             >

//               <h3 style={{ color: 'white', margin: '10px 0' }}>
//                 {selectedBranchAll && selectedBranchAll[0]
//                   ? `${selectedBranchAll[0].name} ${selectedBranchAll[0].number} ${selectedBranchAll[0].city}, ${selectedBranchAll[0].municipality}, ${selectedBranchAll[0].state}`
//                   : 'Sucursal 2'}
//                 <br />
//                 <br />
//                 <span>Teotihuacán: 5576877703</span>
//               </h3>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.6144925681983!2d-98.87318751874639!3d19.68644573432834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1eb515635584d%3A0xb75d7c8ab0dc9977!2sHarmony%20Therapy!5e0!3m2!1ses-419!2smx!4v1752046676181!5m2!1ses-419!2smx"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Sucursal Teotihuacán"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const iconStyle = {
//   width: '10%',
//   marginRight: '8px',
//   cursor: 'pointer',
// };

// export default Footer;


import React, { useState } from 'react';
import '../styles/HeaderStyles.scss';
import { handleSocialMediaClick } from '../../utils/functions';
import FormModal from '../molecules/FormModal';
import { Branches } from '../types/branches';

// Extendemos la interfaz local para MongoDB
interface BranchWithMap extends Branches {
  mapLink?: string;
}

interface BodyProps {
  selectedBranch?: BranchWithMap | null;
  selectedBranchAll: BranchWithMap[] | null;
}

const Footer: React.FC<BodyProps> = ({ selectedBranch, selectedBranchAll }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBranch, setModalBranch] = useState<BranchWithMap | null>(null);

  const handleModalOpen = (branch?: BranchWithMap) => {
    if (branch) setModalBranch(branch);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalBranch(null);
  };

  // ESTA FUNCIÓN ES LA QUE ARREGLA EL CUADRO AZUL VACÍO
  const formatMapUrl = (url?: string) => {
    if (!url) return "";
    // Si ya es un link de embed (trae /embed o !1m18), lo dejamos pasar
    if (url.includes("google.com/maps/embed")) return url;
    
    // Si es un link de compartir normal (ej: maps/place/...), intentamos sacar las coordenadas
    // o simplemente avisamos que requiere el link de EMBED.
    // OJO: Google Maps no permite cargar la interfaz de búsqueda en un iframe.
    return url; 
  };

  const handleIconClick = (op: number) => {
    const socialLinks: Record<number, string> = {
      2: 'https://www.facebook.com/HelldyTherapy',
      3: 'https://www.instagram.com/harmony.fisioterapia/',
      4: 'https://www.youtube.com/channel/UCiHli8YiB3YalYVsltDFltw',
      5: 'https://www.tiktok.com/@harmony.therapy?_t=8mFfoYgCbED&_r=1'
    };
    if (op === 1) handleModalOpen();
    else if (socialLinks[op]) handleSocialMediaClick(socialLinks[op]);
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#0064A8', paddingBottom: '50px' }}>
      {/* Fondo superior (Imagen opcional si la sigues usando) */}
      <div style={{ width: '100%', padding: '60px 0 20px 0', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3vw', margin: 0 }}>¡Aquí comienza tu mejor versión!</h1>
        <p style={{ fontSize: '1.4vw', margin: '20px auto', width: '50%' }}>
          Déjanos tu nombre y teléfono para que nuestro asesor se contacte contigo a la brevedad posible.
        </p>
        <button 
          style={{ padding: '10px 30px', fontSize: '1.5vw', borderRadius: '8px', border: 'none', color: '#0064A8', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => handleModalOpen()}
        >
          Agendar cita
        </button>
      </div>

      <div style={{ width: '90%', margin: '0 auto' }}>
        {/* INFO DE CONTACTO DINÁMICA DE MONGODB */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', color: 'white' }}>
          <div style={{ flex: 1 }}>
            <img src="/LogoHarmony.png" alt="Logo" style={{ width: '250px', marginBottom: '20px' }} />
            {selectedBranchAll?.map((b, i) => (
              <p key={i} style={{ fontSize: '1.1vw', cursor: 'pointer', margin: '10px 0' }} onClick={() => handleModalOpen(b)}>
                📍 <strong>{b.name}:</strong> {b.number} {b.city}, {b.state}
              </p>
            ))}
          </div>

          <div style={{ flex: 1, textAlign: 'right' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginBottom: '20px' }}>
              {['WhatsApp', 'Facebook', 'Instagram', 'Youtube', 'TikTok'].map((icon, i) => (
                <img key={i} src={`/img/icons/${icon}.png`} style={{ width: '35px', cursor: 'pointer' }} onClick={() => handleIconClick(i + 1)} />
              ))}
            </div>
            {selectedBranchAll?.map((b, i) => (
              <p key={i} style={{ fontSize: '1.1vw', margin: '5px 0' }}>{b.name}: <strong>{b.phone}</strong></p>
            ))}
            <p style={{ fontSize: '1.1vw', marginTop: '15px' }}>harmonytherapyft@gmail.com</p>
          </div>
        </div>

        {/* MAPAS DINÁMICOS - Aquí se arregla la vista */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {selectedBranchAll && selectedBranchAll.length > 0 ? (
            selectedBranchAll.map((branch, index) => (
              <div key={index} style={{ 
                flex: '1 1 350px', 
                maxWidth: '450px', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '15px', 
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '15px' }}>
                  {branch.name} <br/>
                  <small style={{ fontWeight: 'normal', opacity: 0.8 }}>{branch.city}, {branch.state}</small>
                </h3>
                
                <div style={{ width: '100%', height: '350px', borderRadius: '10px', overflow: 'hidden', background: '#1a1a1a' }}>
                  {/* El src DEBE ser de tipo "Embed" */}
                  <iframe
                    src={formatMapUrl(branch.mapLink)}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={branch.name}
                  />
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: 'white' }}>No se encontraron sucursales en la base de datos.</p>
          )}
        </div>
      </div>

      <FormModal open={modalOpen} handleClose={handleModalClose} selectedBranch={modalBranch} />
    </div>
  );
};

export default Footer;
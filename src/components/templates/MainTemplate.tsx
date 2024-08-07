import React, { useState } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Body from '../organisms/Body';
import FloatingButton from '../molecules/FloatingButton';
import Chatbot from '../molecules/Chatbot';//se elmino esto jms mvp2
import { Branches } from '../types/branches';

import DisableRightClick from '../../components/organisms/DisableRightClick'; // Ajusta la ruta de importación según la ubicación real de DisableRightClick

const MainTemplate: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branches | null>(null); // Inicializa con null o algún valor predeterminado


  const handleSelectBranch = (branches: Branches) => {
    setSelectedBranch(branches);
  };

  return (
    <>
      <DisableRightClick /> {/* Integra DisableRightClick aquí */}
      <Header onSelectBranch={handleSelectBranch} />
      
      <Body selectedBranch={selectedBranch} />
      
      <Footer selectedBranch={selectedBranch} />
      <FloatingButton />
      {/* <Chatbot/> descomentar este para mostrar chatbot MVP-2 */}
    </>
  );
};

export default MainTemplate;

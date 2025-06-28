import React, { useState, useEffect } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Body from '../organisms/Body';
import FloatingButton from '../molecules/FloatingButton';
import Chatbot from '../molecules/Chatbot';
import { Branches } from '../types/branches';

import DisableRightClick from '../../components/organisms/DisableRightClick';
import { branchServices } from '../services/branches';
import { BranchProvider } from '../../context/BranchContext';

const MainTemplate: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branches | null>(null);
  const [selectedBranchAll, setSelectedBranchAll] = useState<Branches[] | null>(null);

  const handleSelectBranch = (branches: Branches) => {
    setSelectedBranch(branches);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const fetchDataBranches = async () => {
    try {
      const data = await branchServices.getAllBranches('');
      console.log({ data });


      setSelectedBranchAll(data); // setea todas las sucursales
      // if (data.length > 0) {
      //   setSelectedBranch(data[0]); // selecciona la primera por defecto
      // }
    } catch (error) {
      console.error('Error fetching data branches:', error);
    }
  };

  useEffect(() => {
    fetchDataBranches(); // se ejecuta una sola vez al montar
  }, []);

  return (
    <>
      <DisableRightClick />
      <BranchProvider>
      <Header onSelectBranch={handleSelectBranch} />
      <Body selectedBranch={selectedBranch} />
      {selectedBranchAll && (
        <Footer 
          selectedBranch={selectedBranch} 
          selectedBranchAll={selectedBranchAll}
        />
      )}
      <FloatingButton />
      </BranchProvider>
      {/* <Chatbot /> */}
    </>
  );
};

export default MainTemplate;

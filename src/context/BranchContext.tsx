// src/context/BranchContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Branches } from '../components/types/branches';
import { branchServices } from '../components/services/branches';
// import { Branches } from '../types/branches';
// import { branchServices } from '../services/branches';

interface BranchContextType {
  branches: Branches[];
  selectedBranch: Branches | null;
  setSelectedBranch: (branch: Branches) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export const BranchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [branches, setBranches] = useState<Branches[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<Branches | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await branchServices.getAllBranches('');
      setBranches(data);
    };
    fetchData();
  }, []);

  return (
    <BranchContext.Provider value={{ branches, selectedBranch, setSelectedBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranchContext = () => {
  const context = useContext(BranchContext);
  if (!context) throw new Error('useBranchContext debe usarse dentro de BranchProvider');
  return context;
};

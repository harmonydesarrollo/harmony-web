// DisableRightClick.tsx

import React, { useEffect } from 'react';

const DisableRightClick: React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null; // No es necesario un contenido dentro del componente
};

export default DisableRightClick;

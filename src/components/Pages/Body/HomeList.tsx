import React, { useEffect, useState } from 'react';
import '../../styles/Body/Section2.scss';
import { Branches } from '../../types/branches';
import CardHomeList from '../../molecules/CardHomeList';
import { instalationServices } from '../../services/instalations';
import { Instalations } from '../../types/instalations';

interface Section2Props {
  selectedBranch: Branches | null; // Prop que recibe el objeto branch seleccionado
}

const HomeList: React.FC<Section2Props> = ({ selectedBranch }) => {
  const [imagesTexts, setImagesTexts] = useState<Instalations[]>([]); // Estado para almacenar los datos de tratamientos

  useEffect(() => {
    // Función para llamar al servicio y obtener los datos de servicios
    async function fetchImagesTexts() {
      try {
        if (selectedBranch) {
          // Llama al servicio para obtener los datos de tratamientos específicos de la sucursal seleccionada
          // para hacer el filtro por sucursal solo poner esto getAllServicesByIdBranch en vez de esto getAllServices
          const data = await instalationServices.getAllInstalations(selectedBranch._id);
          setImagesTexts(data); // Actualiza el estado con los datos recibidos del servicio
        }
        
        
      } catch (error) {
        console.error('Error fetching service texts:', error);
      }
    }

    fetchImagesTexts(); // Llama a la función de carga al montar el componente o cuando selectedBranch cambia
  }, [selectedBranch]);

  return (
    <>
       <div className="title-container">
          <h1 className="title">
            Nuestras instalaciones
          </h1>
        </div>
        <div className="image-text-container">
          {imagesTexts.map((imageText, index) => (
            <div key={index} className="image-text">
              <CardHomeList imageUrl={imageText.img} title={imageText.title} text={imageText.description} />
            </div>
          ))}
        </div>
    </>
  );
};

export default HomeList;

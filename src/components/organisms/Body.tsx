import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { data_carrusel, imagesTexts } from '../../utils/utils';
import Section1 from '../Pages/Body/Section1';
import Section2 from '../Pages/Body/Section2';
import Section3 from '../Pages/Body/Section3';
import Section4 from '../Pages/Body/Section4';
import Section5 from '../Pages/Body/Section5';
import '../styles/HeaderStyles.scss';
import VideoList from '../molecules/VideoList';
import SectionVideoList from '../Pages/Body/SectionVideos';
import Videos from '../Pages/Body/videos';
import ServiceList from '../Pages/Body/ServiceList';
import { Link, Typography } from '@mui/material';
import ReviewUpdate from '../Pages/Body/ReviewUpdate';
import QuestionAnswer from '../Pages/Body/QuestionAnswer';


import { removeDiacritics, isSimilar } from '../../utils/stringUtils';
import { Branches } from '../types/branches';
import { videosServices } from '../services/videos';
import { VideosType } from '../types/videosType';
import { Questions } from '../types/questions';
import { questionsServices } from '../services/questions';
import HomeList from '../Pages/Body/HomeList';





// const Body: React.FC = () => {
  interface BodyProps {
    selectedBranch: Branches | null; // Tipo de la prop selectedBranch
  }



// const videoData = [
//   {
//     title: "Plan de Tratamiento en Fisioterapia",
//     description: "Evaluación Inicial1: Basada en la historia clínica y el examen físico, se identifican las áreas problemáticas. Objetivos del Tratamiento: Definición de objetivos a corto y largo plazo, como reducir el dolor, mejorar la movilidad y fortalecer los músculos. Intervenciones Terapéuticas: Ejercicios Terapéuticos: Rutinas específicas para mejorar la fuerza, flexibilidad y rango de movimiento.",
//     url: "https://www.youtube.com/watch?v=c6lNu1JNa38&pp=ygUMZmlzaW90ZXJhcGlh"
//   },
//   {
//     title: "Otro Video de Fisioterapia",
//     description: "Evaluación Inicial2: Basada en la historia clínica y el examen físico, se identifican las áreas problemáticas. Objetivos del Tratamiento: Definición de objetivos a corto y largo plazo, como reducir el dolor, mejorar la movilidad y fortalecer los músculos. Intervenciones Terapéuticas: Ejercicios Terapéuticos: Rutinas específicas para mejorar la fuerza, flexibilidad y rango de movimiento.",
//     url: "https://www.youtube.com/watch?v=DCz4RStjxUM&pp=ygUMZmlzaW90ZXJhcGlh"
//   },
//   {
//     title: "Tercer Video de Fisioterapia",
//     description: "Evaluación Inicial3: Basada en la historia clínica y el examen físico, se identifican las áreas problemáticas. Objetivos del Tratamiento: Definición de objetivos a corto y largo plazo, como reducir el dolor, mejorar la movilidad y fortalecer los músculos. Intervenciones Terapéuticas: Ejercicios Terapéuticos: Rutinas específicas para mejorar la fuerza, flexibilidad y rango de movimiento.",
//     url: "https://www.youtube.com/watch?v=NLwDS3veHtw&pp=ygUMZmlzaW90ZXJhcGlh"
//   }
// ];

// const qnaList = [
//   { question: "¿Cómo funciona el producto?", answer: "El producto funciona de manera eficiente mediante el uso de..." },
//   { question: "¿Cuál es el tiempo de entrega?", answer: "El tiempo de entrega es de aproximadamente 3 a 5 días hábiles." },
//   // Agrega más preguntas y respuestas aquí
// ];



// const initialQnAList = [
//   { question: "¿Cómo funciona el producto?", answer: "El producto funciona de manera eficiente mediante el uso de..." },
//   { question: "¿Cuál es el tiempo de entrega?", answer: "El tiempo de entrega es de aproximadamente 3 a 5 días hábiles." },
//   // Agrega más preguntas y respuestas aquí
// ];


const Body: React.FC<BodyProps> = ({ selectedBranch }) => {
  
  const [qnaList, setQnaList] = useState<Questions[]>([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [videoItems, setVideoItems] = useState<VideosType[]>([]);

  // Función para obtener preguntas
  const fetchDataQuestions = async () => {
    try {
      const data = await questionsServices.getAllQuestions('');
      console.log({data})
      setQnaList(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    async function fetchDataVideos() {
      try {
        const data = await videosServices.getAllVideos('');
        setVideoItems(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchDataVideos();
    fetchDataQuestions(); // Llamar fetchDataQuestions al montar el componente
  }, []);

  const handleAddQuestion = async () => {
    if (newQuestion.trim()) {
      try {
        // Añadir la nueva pregunta al backend
        await questionsServices.createQuestions({ question: newQuestion, answer: '' }, '');
        // Actualizar las preguntas localmente después de agregar
        fetchDataQuestions();
        setNewQuestion('');
      } catch (error) {
        console.error('Error adding question:', error);
      }
    }
  };

  const filteredQnAList = qnaList.filter(
    (qna) =>
      (qna.question?.toLowerCase().includes(removeDiacritics(searchTerm.toLowerCase())) ||
      qna.answer?.toLowerCase().includes(removeDiacritics(searchTerm.toLowerCase())))
  );
  
  return (
    <div style={{ width: '100%' }}>
      <div id="section1" style={{paddingTop:'3vw'}}>
        <Section1 />
      </div>
      <div id="section2" style={{paddingTop:'5vw'}}>
        {/* <Section2 selectedBranch={selectedBranch} /> */}
        {selectedBranch!== null && <Section2 selectedBranch={selectedBranch} />}
      </div>
      <div id="section3">
        {selectedBranch!== null && <Section3 branchId={selectedBranch?._id} />}
      </div>
      {/* <div id="section4" style={{paddingTop:'1vw'}}>
        <Section4 />
      </div> */}
      <div id="section4" style={{paddingTop:'1.8vw'}}>
        {/* <div style={{width:'100%', backgroundColor:'#283E7E'}}> */}
        <div style={{width:'100%', backgroundColor:'#1976d2'}}>
        < ReviewUpdate/>
        </div>
      </div>
      <div id="section5" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.10)' }}>
      <Section5 />
      </div>
      <div id="section6">
        <div
        style={{
          textAlign: 'center',
          width: '70%',
          margin: '0 auto',
          fontSize: '1.5vw', // Tamaño de fuente ajustado al 3.5% del ancho de la ventana
          minWidth: '70%',
          // paddingBottom:'5.5vw'
          paddingTop:'5vw'
        }}
      >
        <h1>Echa un vistazo a nuestros videos</h1>
      </div>
      {videoItems && videoItems[0] !== undefined && videoItems.map((video, index) => (
        <Videos key={index} title={video.title} description={video.description} url_video={video.urlVideo} />
      ))}
      
      <div
        style={{
          textAlign: 'right',
          width: '90%',
          // margin: '0 auto',
          fontSize: '2vw', // Tamaño de fuente ajustado al 3.5% del ancho de la ventana
          minWidth: '80%',
          paddingTop:'1.5vw'
        }}
      >
        
        <Link href="https://www.youtube.com/channel/UCiHli8YiB3YalYVsltDFltw" target="_blank" rel="noopener">
          ver más
        </Link>
      
      </div>
      </div>
      <div id="section7" style={{paddingTop:'3vw'}}>
        <ServiceList selectedBranch={selectedBranch}  />
      </div>
      <div id="section8" style={{paddingTop:'3vw'}}>
        <HomeList selectedBranch={selectedBranch}  />
      </div>
      
      
    
      <div id="section9">
      <div style={{ padding: '5%', margin: '3%' }}>
      <div
        style={{
          textAlign: 'center',
          width: '70%',
          margin: '0 auto',
          fontSize: '1.5vw', // Tamaño de fuente ajustado al 3.5% del ancho de la ventana
          minWidth: '70%',
        }}
      >
        <h1>Preguntas y respuestas</h1>
      </div>
      
      <div style={{ marginBottom: '2vw' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca lo que quieres saber..."
          style={{ width: '97%', padding: '1vw', fontSize: '1.3vw',
            borderRadius: '15px',
            border: '1px solid #ccc', // Borde definido explícitamente
            boxShadow: 'none', // Asegura que no haya sombra

           }}
        />
      </div>
      <div style={{ marginBottom: '2vw', overflowY: 'auto', maxHeight: '60vh', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '15px' }}>
          {filteredQnAList.map((qna, index) => (
            <QuestionAnswer key={index} question={qna.question} answer={qna.answer} />
          ))}
        </div>
      <div style={{ marginTop: '2vw' }}>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="¿En que podemos apoyarte?"
          style={{ width: '88%', padding: '1vw', fontSize: '1.3vw',
            borderRadius: '15px',
            border: '1px solid #ccc', // Borde definido explícitamente
            boxShadow: 'none', 

           }}
        />
        <button onClick={handleAddQuestion} style={{ padding: '1vw', fontSize: '1vw', backgroundColor: '#00D6B2', color: '#fff', marginLeft: '1vw', cursor: 'pointer', 
          borderRadius: '15px',
          border: '1px solid #ccc', // Borde definido explícitamente
          // boxShadow: 'none', // Asegura que no haya sombra
        }}>
          Preguntar
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Body;



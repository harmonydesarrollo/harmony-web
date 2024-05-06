import React from 'react';
import '../styles/BtnChat.scss';

const ChatButton = () => {
  // Función para manejar el clic en el botón de chat
  const handleClick = () => {
    // Aquí puedes agregar la lógica para abrir el chat
    console.log('Abrir chat');
  };

  return (
    <div className="chat-button" onClick={handleClick}>
      {/* Ícono del chat (puedes usar un ícono de fuente o una imagen) */}
      <span>&#128172;</span>
    </div>
  );
};

export default ChatButton;

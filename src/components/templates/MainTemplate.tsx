// src/components/templates/MainTemplate.tsx
import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Body from '../organisms/Body';
import Menu from '../molecules/Menu';
import ChatButton from '../atoms/ChatButton';

interface MainTemplateProps {
  children?: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <>
      <ChatButton />
      <Menu />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default MainTemplate;

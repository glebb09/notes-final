import React from 'react';

import Navbar from './components/organisms/navbar';

import s from './App.module.scss';
import Sidebar from './components/organisms/sidebar';
import MainContent from './components/organisms/main-content';

function App() {
  return (
    <div className={s.container}>
      <Navbar />
      
      <div className={s.content}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

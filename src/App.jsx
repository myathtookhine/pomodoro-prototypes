
import React from 'react';
import Frame1_Modern from './components/frames/Frame1_Modern';
import Frame2_Brutalism from './components/frames/Frame2_Brutalism';
import Frame3_Flat from './components/frames/Frame3_Flat';
import Frame4_Pixel from './components/frames/Frame4_Pixel';
import Frame5_Cyberpunk from './components/frames/Frame5_Cyberpunk';
import Frame6_Terminal from './components/frames/Frame6_Terminal';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="frames-grid">
        <Frame1_Modern />
        <Frame2_Brutalism />
        <Frame3_Flat />
        <Frame4_Pixel />
        <Frame5_Cyberpunk />
        <Frame6_Terminal />
      </div>
      <footer className="app-footer">
        - Vibe Coded and Design by MHK -
      </footer>
    </div>
  );
}

export default App;

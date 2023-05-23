import { Header } from "./components/Header";
import { Carrusell } from "./components/Carrusell";
import { Bio } from "./components/Bio";
import { Portfolio } from "./components/Portfolio";
import { StreetP } from "./components/StreetP";
import { SportP } from "./components/SportP";
import { PortraitP } from "./components/PortraitP";
import { AnalogP } from "./components/AnalogP";
import { Contact } from "./components/Contact";
import React, { useRef } from 'react';
import './app.css';



function App() {
  const mainRef = useRef(null);
  const biographyRef = useRef(null);
  const portfolioRef = useRef(null);
  const portraitRef = useRef(null);
  const streetRef = useRef(null);
  const sportRef = useRef(null);
  const analogRef = useRef(null);

  const contactRef = useRef(null);

  return (
    <div>
    <Header
          onMainClick={() =>
            mainRef.current.scrollIntoView({ behavior: 'smooth' })
          } 
          onBiographyClick={() =>
            biographyRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          onPortfolioClick={() =>
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          onContactClick={() =>
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          onPortraitClick={() =>
            portraitRef.current.scrollIntoView({ behavior:'smooth' })
          }
          onStreetClick={() =>
            streetRef.current.scrollIntoView({ behavior:'smooth' })
          }
          onSportClick={() =>
            sportRef.current.scrollIntoView({ behavior:'smooth' })
          }
          onAnalogClick={() =>
            analogRef.current.scrollIntoView({ behavior:'smooth' })
          }

        />
      <div id="main">
        <div id="top-page">
        <Carrusell ref={mainRef}/>
        <div id="filling"></div>
        </div>
        <Bio ref={biographyRef} />
        <Portfolio ref={portfolioRef} />
        <PortraitP ref={portraitRef} />
        <StreetP ref={streetRef} />
        <SportP ref={sportRef} />
        <AnalogP ref={analogRef} />
        <Contact ref={contactRef} />
        
      </div>
    </div>
  );
}

export default App;

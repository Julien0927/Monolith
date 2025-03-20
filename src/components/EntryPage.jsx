/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import monolithLogo from '../assets/img/Monolith_V2.png'; // Assure-toi du bon chemin

const EntryPage = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [imageClass, setImageClass] = useState('opacity-0 translate-y-20');

  useEffect(() => {
    // Déclencher l'animation après le chargement de la page
    setTimeout(() => {
      setImageClass('opacity-100 transform-none');
      setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);
    }, 500);
  }, []);

  const handleClick = () => {
    navigate('/accueil');
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor:"var(--primary-color)" }}>
      <div 
        onClick={handleClick}
        className="text-center cursor-pointer"
      >
        <div className="">
          <img 
            src={monolithLogo} 
            alt="Monolith Logo" 
            className={`w-192 h-auto mx-auto transition-all duration-1000 transform ${imageClass}`} 
            style={{ transitionDelay: '100ms' }}
          />
        </div>
        
        <p className={`text-4xl text-white font-light transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
          L'innovation au service de la performance média
        </p>
      </div>
    </div>
  );
};

export default EntryPage;
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import monolithLogo from '../assets/img/Monolith_V3.png'; // Assure-toi du bon chemin

const EntryPage = () => {
  const navigate = useNavigate();
  const [logoClass, setLogoClass] = useState('opacity-0 scale-75');
  const [textClass, setTextClass] = useState('opacity-0 -translate-y-4');
  const [backgroundClass, setBackgroundClass] = useState('scale-110');
  const [pageClass, setPageClass] = useState('');

  useEffect(() => {
    // Séquence d'animation
    const timeline = async () => {
      // Démarrer avec l'animation du fond
      setBackgroundClass('scale-100');
      
      // Après un court délai, afficher le logo avec un effet de zoom
      await new Promise(resolve => setTimeout(resolve, 800));
      setLogoClass('opacity-100 scale-100 rotate-0');
      
      // Ensuite, faire apparaître le texte avec un effet de montée
      await new Promise(resolve => setTimeout(resolve, 1200));
      setTextClass('opacity-100 transform-none');
    };
    
    timeline();
  }, []);

  const handleClick = () => {
    setPageClass('opacity-0');
    
   const transitionElement = document.createElement('div');
   transitionElement.style.position = 'fixed';
   transitionElement.style.top = '0';
   transitionElement.style.left = '0';
   transitionElement.style.width = '100%';
   transitionElement.style.height = '100%';
   transitionElement.style.backgroundColor = 'var(--primary-color)';
   transitionElement.style.zIndex = '9999';
   transitionElement.style.opacity = '0';
   transitionElement.style.transition = 'opacity 0.5s ease-in-out';
   document.body.appendChild(transitionElement);
   
   setTimeout(() => {
     transitionElement.style.opacity = '1';
     
     setTimeout(() => {
       navigate('/accueil');
       
       setTimeout(() => {
         transitionElement.style.opacity = '0';
         
         setTimeout(() => {
           document.body.removeChild(transitionElement);
         }, 500);
       }, 100);
     }, 500);
   }, 10);
 };


  return (
    <div 
      className={`entry-page flex items-center justify-center h-screen overflow-hidden transition-transform duration-1500 ease-out ${backgroundClass} ${pageClass}`}
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div
        onClick={handleClick}
        className="relative text-center cursor-pointer px-6"
      >
        <div className="relative">
          <img
            src={monolithLogo}
            alt="Monolith Logo"
            className={`w-128 md:w-192 h-auto mx-auto transition-all duration-1500 ease-out transform ${logoClass}`}
          />
        </div>
        
        <p className={`text-xl md:text-4xl text-white font-montserrat-light transition-all duration-1000 ease-out transform ${textClass}`}>
          L'innovation au service de la performance média
        </p>
      </div>
    </div>
  );
};

export default EntryPage; 